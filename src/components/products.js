'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Products = ({data}) => {
  const router = useRouter()

  return (
    <div className='grid grid-cols-4 gap-5 mx-auto w-[1350px] pt-[100px]'>
        {
            data?.products?.map((product) => (
                <div key={product.id} className='text-center border rounded-[10px]'>
                  <div className=''>
                    <Image onClick={() => router.push(`/product/${product.id}`)} className='mx-auto' src={product.thumbnail} alt={product.title} width={250} height={250}/>
                  </div>
                    <h3 className='text-[24px] py-[15px]'>{product.title}</h3>
                    <div className='flex justify-around'>
                      <div className='flex gap-[4px] '>
                        <p className='text-red-500'>Rate :</p>
                        <p className= ' text-yellow-400 text-[18px]'>{product.rating}</p>
                      </div>
                      <p className='text-green-400 '>Price : {product.price} $</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Products