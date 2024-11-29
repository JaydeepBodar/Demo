
import React from 'react'
import Image from 'next/image'
const Singleproduct = ({product}) => {
    const {Productname,Productprice,Productimage,Productdescription}=product
  return (
    <div className='h-[70vh] flex gap-x-[50px] justify-center'>
      <div className='h-[450px] basis-[30%]'>
        <Image src={Productimage} width={100} height={400} className="w-[100%]"/>
      </div>
      <div className='basis-[50%] pt-[40px]'>
        <h2 className='text-[25px]'><strong>Title :- </strong>{Productname}</h2>
        <h3 className='text-[20px]'><strong>Price :- </strong>{Productprice}₹</h3>
        <p><strong>Description :- </strong>{Productdescription}</p>
      </div>
    </div>
  )
}

export default Singleproduct
