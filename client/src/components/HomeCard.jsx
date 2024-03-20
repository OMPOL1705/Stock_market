import React from 'react'

const HomeCard = () => {
  return (

    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{width:"100vw"}}>
        <a href="/">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Investment</h5>
        </a>
        <h5 class="mb-3 font-normal text-2xl text-gray-500 dark:text-gray-400">$20000</h5>
        <div className='flex' style={{justifyContent :"space-between", padding:"30px"}}>
            <div className='flex'>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
            </svg>
                <p className='text-white'>126</p>
            </div>
            <div className='flex'>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
                </svg>
                <p className='text-white'>126</p>
            </div>
        </div>
    </div>

  )
}

export default HomeCard
