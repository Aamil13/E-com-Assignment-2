import React from 'react'

const Porduct = ({item}) => {
  return (
    <div className='col-md-3 mx-1 bg-light shadow p-3 mb-3'>
            <h6 className='fw-light'>{item?.title}</h6>
            <img src={item?.image} alt='img' className='prod-img' loading='lazy'/>
            <h4>$ <span className='text-secondary my-3'><s>{item.price * 2}</s></span> ${item.price}</h4>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-warning btn-sm'>Add to Cart</button>
                <button className='btn btn-primary btn-sm'>Buy Now</button>
            </div>
            </div>
  )
}

export default Porduct