import React from 'react'
import CustomerData from './CustomerData'



const Customers = () => {
  return (
   <>
   <div className='w-full h-auto py-3 px-12 mt-24 flex flex-col items-start justify-start gap-12 overflow-hidden '>
    <div className='flex flex-col items-start gap-2'>
    <div className='flex items-center'><h2 className='text-2xl  md:text-4xl font-extrabold font-poppins tracking-wider text-[#90e0ef] '> <span className='text-[#ffbd00]'>Our</span> Satisfied Customers</h2></div>
    <div><p className='text-[16px]  md:text-[18px] text-zinc-700 '>Now Its Your Time To Begin</p></div>
    </div>
    

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
       
     {CustomerData.slice(5,8).map((data, index)=> (
      <div key={index} className='flex flex-col items-start justify-start p-4 border-r-2 border-dashed border-gray-400 bg-gradient-to-tr from-white via-white to-[#cbf3f0]/25 '>
      <img className='w-14 h-14 object-cover' src={data.icon} alt={data.name} />
      <h2 className='font-poppins mt-2 font-semibold text-zinc-400 tracking-wider'>{data.name}</h2>
      <h1 className=' flex items-center gap-4 font-poppins mt-4 text-gray-500'> <span><img className='w-5 h-5' src="/love.svg" alt="" /></span> {data.title}</h1>
      <p className='font-poppins text-[12px] leading-4 mt-3 text-zinc-500'>{data.description}</p>
      <img className='w-12 h-12 object-cover' src={data.rateing} alt={data.name} />
    </div>
     ))}
    </div>
   </div>
   </>
  )
}

export default Customers