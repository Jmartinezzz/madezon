<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class DataTableService
{
    protected $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    public function paginateRecordsList(Request $request, $conditions) : LengthAwarePaginator
    {
        $page = $request->input('page', 1);
        $rows = $request->input('rows', 10);
        $filters = $request->input('filters', []);
        $orderBy = $request->input('orderBy', null);
        $orderDirection = $request->input('orderDirection', 'desc');
        $globalFilter = $request->input('globalFilter', null);
        $rerlationships = $request->input('relationships', []);

        $query = $this->model::query();

        $query->when(!empty($rerlationships), fn($q) => $q->with($rerlationships));

        if(!empty($conditions))
        {
            foreach ($conditions as $condition) {
                if (isset($condition['condition']) ) {
                    $query->where($condition['column'], $condition['condition'], $condition['value']);
                }          
            }
        }       

        if ($globalFilter) {
            $this->applyGlobalFilter($query, $globalFilter);
        }else{
            foreach ($filters as $field => $filter) {
                $type = $filter['type'];
                $value = $filter['value'] ?? null;

                if (!empty($value) || $value == '0') {
                    switch ($type) {
                        case 'text':
                            $query->whereRaw('LOWER(' . $field . ') like ?', ['%' . strtolower($value) . '%'], 'and');
                            break;
                        case 'dropdown':
                            $query->where($field, $value);
                            break;
                        case 'date':
                            $query->where($field, '>=', $value);
                            break;                        
                        case 'boolean':
                            $query->where($field, $value);
                            break;
                    }
                }
            }
        }

        if ($orderBy) {
            $query->orderBy($orderBy, $orderDirection);
        } else {
            $query->orderBy('created_at', 'desc');
        }

        return $query->paginate($rows, ['*'], 'page', $page);
    }

    private function applyGlobalFilter(Builder $query, string $globalFilter): void
    {
        $columns = (new $this->model)->getFillable();

        $query->where(function ($query) use ($globalFilter, $columns) {
            foreach ($columns as $column) {
                $query->orWhereRaw('LOWER(' . $column . ') like ?', ['%' . strtolower($globalFilter) . '%']);
            }
        });
    }
}
