import React from 'react';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { Tag } from 'primereact/tag';
import { router } from '@inertiajs/react';
import AddRemoveButton from './AddRemoveButton';


export default function ProductCard({ product }) {
  const header = (
    <div className="p-2">
      <div className="w-full h-14rem md:h-18rem overflow-hidden border-round-xl cursor-pointer">
        <img
          src={product.first_image_url}
          alt="Card"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
  const footer = (
    <div className='mt-auto'>
      <AddRemoveButton extraClasses="w-full shadow-4 mt-auto" extraStyle={{ paddingTop: '.9rem', paddingBottom: '.9rem' }} product={product} />
    </div>
  );

  const title = (() => {
    const priceToShow = product.promo_price ?? product.price
    return (
      <div className='flex justify-content-between align-items-start'>
        <span className="flex-1 break-words">
          {product.name}
        </span>
        <Badge severity={product.promo_price ? 'warning' : 'primary'} value={`$${priceToShow}`} size="large"></Badge>
      </div>
    )
  })();
  const subTitle = (
    <div className='flex gap-1'>
      {product.sub_category_id && (
        <Tag severity="warning" value="celulares" rounded style={{ fontSize: '0.7rem', padding: '12px 8px', height: '22px' }} ></Tag>
      )}
      <Tag severity="warning" value={`quedan ${product.stock}`} rounded style={{ fontSize: '0.7rem', padding: '12px 8px', height: '22px' }} ></Tag>
      {product.promo_price && (
        <Tag severity="warning" value="descuento" rounded style={{ fontSize: '0.7rem', padding: '12px 8px', height: '22px' }} ></Tag>
      )}
    </div>
  );

  const handleCardClick = () => {
    router.get(route('products.show', product))
  }

  return (
    <div className="card flex justify-content-center">
      <Card
        title={title}
        subTitle={subTitle}
        footer={footer}
        header={header}
        className="w-12 md:w-11 shadow-5 border-round-xl flex flex-column justify-content-between hover:shadow-7"
        style={{ height: '100%' }}
        onClick={handleCardClick}
      >
        <div className="flex flex-column h-full">
          <div
            style={{
              flex: 1,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis'
            }}
          >
            {product.short_description}
          </div>
        </div>
      </Card>
    </div>
  )
}
