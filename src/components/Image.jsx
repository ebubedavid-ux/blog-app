import React from 'react'
import { IKImage } from 'imagekitio-react';

function Image({src, className, w, h, alt}) {
  return (
    <IKImage urlEndpoint= {import.meta.env.VITE_IK_URL_ENDPOINT} 
        path={src}
        className={className}
        loading='lazy'
        lqip={{ active: true, quality: 20 }}
        width={w}
        height={h}
        transformation={[
          {
            width:w,
            height: h,
          }
        ]}
        alt={alt}
         />
        
        
  )
}

export default Image
