import React from 'react'

export default function Menu({menu}) {
  return (
    <div className='section-center'>
      {
        menu.map((menuItem)=>{
           const {id,title,img,desc,price} = menuItem
           return(
            <article key={id} className='menu-item'>
              <img src={img} alt={title} className='photo'/>
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <p className='text-info'>{desc}</p>
              </div>
            </article>
           ) 
        })
      }
    </div>
  )
}
