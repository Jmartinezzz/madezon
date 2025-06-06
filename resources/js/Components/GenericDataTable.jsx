import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { router, Link } from "@inertiajs/react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { debounce } from 'lodash';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useToast } from "@/Context/ToastContext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';
import InputDynamicFilter from "./InputDynamicFilter";

const GenericDataTable = forwardRef((
    {
        key = 0,
        dataEndpoint,
        columns,
        initialData,
        showGlobalFilter,
        routeName,
        useModalEdit = false,
        onFindItem,
        showActionColumn = true,
        showDeleteAction = true,
        isSelectRowEnabled = false,
        selectedItems,
        onSelectionChange,
        rowClassName,
        moreActionButtons = [],
    }, ref) => {

    const { showToast } = useToast();
    const [data, setData] = useState(initialData.data);
    const [loading, setLoading] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [lazyParams, setLazyParams] = useState({
        first: 0,
        rows: initialData.per_page,
        page: initialData.current_page - 1,
        filters: {},
        orderBy: null,
        orderDirection: 'asc',
        showDeleted: false,
        globalFilter: '',
    });
    const [totalRecords, setTotalRecords] = useState(initialData.total);
    const tableRef = useRef(null);

    useEffect(() => {
        if (lazyParams.page !== initialData.current_page - 1 ||
            Object.keys(lazyParams.filters).length > 0 ||
            lazyParams.orderBy !== null ||
            lazyParams.globalFilter !== '') {
            loadData();
        }
    }, [lazyParams]);

    const loadData = () => {
        setLoading(true);

        const params = {
            page: lazyParams.page + 1,
            rows: lazyParams.rows,
            filters: lazyParams.filters,
            orderBy: lazyParams.orderBy,
            orderDirection: lazyParams.orderDirection,
            globalFilter: lazyParams.globalFilter,
        };

        router.get(dataEndpoint, params, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (page) => {
                let paginate = page.props.data;

                setData(paginate.data);
                setTotalRecords(paginate.total);
                setLoading(false);
            },
            onError: (data) => {
                setLoading(false);
            },
        });
    };

    useImperativeHandle(ref, () => ({
        loadData
    }));

    const onPage = (event) => {
        setLazyParams({
            ...lazyParams,
            first: event.first,
            rows: event.rows,
            page: event.page,
        });
    };

    const onFilter = debounce((e, field, filterType) => {
        const value = e.target.value;
        setLazyParams((prevState) => ({
            ...prevState,
            filters: {
                ...prevState.filters,
                [field]: {
                    type: filterType,
                    value: value,
                },
            },
            page: 0,
            first: 0,
        }));
    }, 300);

    const onSort = (event) => {
        setLazyParams({
            ...lazyParams,
            orderBy: event.sortField,
            orderDirection: event.sortOrder === 1 ? 'asc' : 'desc',
        });
    };

    const handleDelete = (item) => {
        confirmDialog({
            message: 'Are you sure to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => {
                router.delete(deleteRoute(item.id), {
                    preserveState: true,
                    // preserveScroll: true,
                    onSuccess: () => {
                        loadData();
                        showToast('success', 'Éxito', 'Item deleted with success', 4000);
                    },
                    onError: (data) => {
                        console.log('Error deleting item', data);
                    },
                });
            },
        });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        setGlobalFilter(value);

        setLazyParams((prevState) => ({
            ...prevState,
            globalFilter: value,
            page: 0,
            first: 0,
        }));
    };

    const badgeBodyTemplate = (field, staticColor = null, showRelationId = null) => {
        return (rowData) => {
            if (showRelationId) {
                const relation = field.split('.')[0]
                return <Badge value={rowData[relation].id} severity="info"></Badge>
            } else {
                return <Badge value={rowData[field]} severity={staticColor ?? 'info'}></Badge>
            }
        }
    };

    const priceBodyTemplate = (field) => {
         return (item) => {
            const value = Number(item[field]);
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }        
    };

    const customBooleanBodyTemplate = (col) => {
        return (item) => {
            const tagProps = {
                value: (item[col.boolField] === 1) ? col.trueValue : col.falseValue,
                severity: (item[col.boolField] === 1) ? 'success' : 'danger'
            };
            return <Tag {...tagProps} />;
        }
    };

    const booleanBodyTemplate = (item) => {
        const tagProps = {
            value: item.is_active ? 'Active' : 'Inactive',
            severity: item.is_active ? 'success' : 'danger'
        };
        // similar a <Tag value={value} severity={severity} />
        return <Tag {...tagProps} />;
    };

    const customBadgeBodyTemplate = (options, field) => {
        return (item) => {
            const data = options.find(option => option.value === item[field]);
            return <Tag className="text-sm" value={data?.text} severity={data?.color} />;
        }
    };

    const customExternalLinkTemplate = (field) => {
        return (item) => {
            return <a
                href={item[field]}
                target="_blank"
                rel="noopener noreferrer"
            >
                { item[field] }
            </a>
        }
    };

    const renderColumns = () => {
        return columns.map((col) => {
            let filterElement;
            if (col.filterField) {
                filterElement = (
                    <InputDynamicFilter
                        filterType={col.filterType ?? 'text'}
                        value={lazyParams.filters[col.filterField]?.value || null}
                        onChange={(e) => onFilter(e, col.filterField, col.filterType)}
                        placeholder={`Search by ${col.header}`}
                        options={col.filterOptions}
                    />
                );
            }

            switch (col.type) {
                case 'id':
                    return (
                        <Column
                            key={col.field}
                            header={col.header}
                            field={col.field}
                            sortable={col.sortable}
                            filter={col.filter}
                            filterField={col.filterField}
                            filterElement={filterElement}
                            body={badgeBodyTemplate(col.field, col.staticColor, col.showRelationId)}
                            showFilterMenu={false}
                            style={{ minWidth: `${col.customWidth ?? 9}rem` }}
                        />
                    );
                case 'customBoolean':
                    return (
                        <Column
                            key={col.field}
                            bodyClassName="text-center"
                            header={col.header}
                            sortable={col.sortable}
                            filter={col.filter}
                            filterField={col.filterField}
                            filterElement={filterElement}
                            body={customBooleanBodyTemplate(col)}
                            showFilterMenu={false}
                            style={{ minWidth: '2rem' }}
                        />
                    );
                case 'boolean':
                    return (
                        <Column
                            key={col.field}
                            bodyClassName="text-center"
                            header={col.header}
                            sortable={col.sortable}
                            filter={col.filter}
                            filterField={col.filterField}
                            filterElement={filterElement}
                            body={booleanBodyTemplate}
                            showFilterMenu={false}
                            style={{ minWidth: '2rem' }}
                        />
                    );
                case 'money':
                    return (
                        <Column
                            key={col.field}
                            bodyClassName="text-center"
                            header={col.header}
                            sortable={col.sortable}
                            filter={col.filter}
                            filterField={col.filterField}
                            filterElement={filterElement}
                            body={priceBodyTemplate(col.field)}
                            showFilterMenu={false}
                            style={{ minWidth: '7rem' }}
                        />
                    );
                case 'customBadge':
                    return (
                        <Column
                            key={col.field}
                            bodyClassName="text-center"
                            header={col.header}
                            sortable={col.sortable}
                            filter={col.filter}
                            filterField={col.filterField}
                            filterElement={filterElement}
                            body={customBadgeBodyTemplate(col.typeOptions, col.field)}
                            showFilterMenu={false}
                            style={{ minWidth: `${col.customWidth ?? 5}rem` }}
                        />
                    );
                case 'externalLink':
                    return (
                        <Column
                            key={col.field}
                            header={col.header}
                            sortable={col.sortable}
                            filter={col.filter}
                            filterField={col.filterField}
                            filterElement={filterElement}
                            body={customExternalLinkTemplate(col.field)}
                            showFilterMenu={false}
                            style={{ minWidth: '4rem' }}
                        />
                    );
                default:
                    return (
                        <Column
                            key={col.field}
                            field={col.field}
                            header={col.header}
                            sortable={col.sortable}
                            filter={col.filter}
                            filterField={col.filterField}
                            filterElement={filterElement}
                            showFilterMenu={false}
                            bodyClassName={col.extraClasses}
                            style={{ minWidth: `${col.customWidth ?? 15}rem` }}
                        />
                    );
            }
        });
    };

    const headerTemplate = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilter} onChange={onGlobalFilterChange} placeholder="Buscar..." />
                </IconField>
            </div>
        );
    };

    const deleteRoute = (id) => route(`${routeName}.destroy`, { id });
    const editRoute = (id) => route(`${routeName}.edit`, { id });

    const renderEditAction = (id) => {
        if (useModalEdit) {
            return (
                <Button 
                    icon="pi pi-pencil"
                    rounded text raised
                    severity="warning"
                    onClick={() => findItemForModal(id)}
                    tooltip="Editar"
                    tooltipOptions={{ position: 'top'}}
                />
            );
        }

        return (
            <Link href={editRoute(id)} onClick={(e) => e.preventDefault()}><Button icon="pi pi-pencil" rounded text raised severity="warning" /></Link>
        );
    };

    const findItemForModal = (id) => {
        onFindItem(id);
        setShowModalEdit(true)
    };

    const actionsTemplate = (rowData) => {
        return (
            <div className="flex justify-content-center gap-2">
                {
                    moreActionButtons.map((button, index) => {
                        {
                            if (button?.customAction !== undefined) {
                                return (
                                    <Button key={index} onClick={() => button?.customAction(rowData)} className="mr-1" label={button.label} icon={button.icon} tooltip={button?.tooltipText ? button.tooltipText : ""} rounded text raised severity={button.severity} />
                                )
                            }

                            return (
                                <Link key={index} href={button.url.replace(':id', rowData.id)}>
                                    <Button className="mr-1" label={button.label} icon={button.icon} rounded text raised severity={button.severity} />
                                </Link>
                            )
                        }
                    })
                }

                {
                    renderEditAction(rowData.id)
                }
                {showDeleteAction && (
                    <Button
                        icon="pi pi-trash"
                        rounded text raised severity="danger"
                        onClick={() => handleDelete(rowData)}
                        tooltip="Eliminar"
                        tooltipOptions={{ position: 'top'}}
                    />
                )}
                
            </div>
        );
    };

    return (
        <div>
            <ConfirmDialog />
            <div ref={tableRef}>
                <DataTable
                    key={key}
                    header={showGlobalFilter && headerTemplate}
                    value={data}
                    selectionMode={isSelectRowEnabled ? 'multiple' : null}
                    selection={selectedItems}
                    onSelectionChange={(e) => onSelectionChange(e)}
                    lazy
                    paginator
                    stripedRows
                    showGridlines
                    first={lazyParams.first}
                    rows={lazyParams.rows}
                    rowClassName={rowClassName}
                    rowsPerPageOptions={[5, 10, 20, 50]}
                    totalRecords={totalRecords}
                    onPage={onPage}
                    loading={loading}
                    filterDisplay="row"
                    onSort={onSort}
                    sortField={lazyParams.orderBy}
                    sortOrder={lazyParams.orderDirection === 'asc' ? 1 : -1}
                    removableSort
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
                    emptyMessage="No records were found"
                >
                    {
                        isSelectRowEnabled && <Column selectionMode="multiple" style={{ width: '3rem' }} />
                    }

                    {renderColumns()}

                    {showActionColumn && <Column header="Actions" body={actionsTemplate} />}
                </DataTable>
            </div>
        </div>
    );
});

export default GenericDataTable;
