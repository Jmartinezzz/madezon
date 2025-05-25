import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';


export default function ProductCard({ testurl, text }) {
  const header = (
    <div className="p-2">
      <div className="w-full h-14rem md:h-18rem overflow-hidden border-round-xl">
        <img
          src={testurl}
          alt="Card"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
  const footer = (
    <div className='mt-auto'>
      <Button className='w-full shadow-4 mt-auto' style={{ paddingTop: '.9rem', paddingBottom: '.9rem' }} label="Agregar al carrito" rounded raised />
    </div>
  );

  const title = (
    <div className='flex justify-content-between align-items-start'>
      <span className="flex-1 break-words">
        Advanced Card
      </span>
      <Badge value="$44.99" size="large"></Badge>
    </div>
  );
  const subTitle = (
    <div className='flex gap-1'>
      <Tag severity="warning" value="celulares" rounded style={{ fontSize: '0.7rem', padding: '12px 8px', height: '22px' }} ></Tag>
      <Tag severity="warning" value="Quedan 9" rounded style={{ fontSize: '0.7rem', padding: '12px 8px', height: '22px' }} ></Tag>
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Card 
        title={title}
        subTitle={subTitle}
        footer={footer}
        header={header}
        className="w-12 md:w-11 shadow-5 border-round-xl flex flex-column justify-content-between"
        style={{ height: '100%' }}
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
            {text}
          </div>
        </div>
      </Card>
    </div>
  )
}
