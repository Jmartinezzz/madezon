import React, { useState } from 'react';
import AddRemoveButton from './AddRemoveButton';
import QtyInput from './QtyInput';

export default function AddProductControls({ product }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex justify-content-between mt-6 md:mt-8 gap-5 align-items-center">
            <AddRemoveButton
                extraClasses="w-6 shadow-4"
                extraStyle={{ paddingTop: '.9rem', paddingBottom: '.9rem' }}
                product={{...product, quantity}}
            />
            <QtyInput extraClasses="wcus-show w-5 md:w-3" product={product} quantity={quantity} setQuantity={setQuantity} />
        </div>
    );
}
