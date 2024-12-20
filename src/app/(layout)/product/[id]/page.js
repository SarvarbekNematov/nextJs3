import Image from 'next/image'
import React from 'react'

const Detail = async ({params}) => {
    const data = await fetch(`https://dummyjson.com/products/${params.id}`)
    const posts = await data.json()
  return (
    <div className='w-[450px] mx-auto mt-[80px] border p-[20px] rounded-md'>
        <h2 className='text-center text-[24px]'>{posts.title}</h2>
        <Image className='mx-auto' src={posts.thumbnail} alt={posts.title} width={200} height={200}/>
        <div className='flex justify-around mt-[35px]'>
          <div className='flex gap-[4px] '>
            <p className='text-red-500'>Rate :</p>
            <p className= ' text-yellow-400 text-[18px]'>{posts.rating}</p>
          </div>
          <p className='text-green-400 '>Price : {posts.price} $</p>
        </div>
        <strong className='text-[18px] pb-[20px] pt-[30px]'>Brand's -- {posts.brand}</strong>
        <p>{posts.description}</p>
    </div>
  )
}

export default Detail