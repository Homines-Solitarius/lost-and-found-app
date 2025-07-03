import React from 'react'
import { FaFileUpload } from 'react-icons/fa'

const ReportItem = () => {
  return (
      <div className='px-5 lg:max-w-200 mx-auto'>
          <h3 className='my-10 text-2xl font-bold lg:text-center lg:text-4xl'>Report Lost Item</h3>
          <form className='bg-gray-100 p-4 rounded-md block lg:p-10'>
            <label htmlFor="title" className='text-md/2 font-bold lg:text-xl'>Title</label>
            <input type="text" name="report_title" id="report_title" placeholder='Did you find anything..?' className='border-3 border-gray-200 focus:border-blue-500 my-1 p-2 w-full rounded-md' />
        <label htmlFor="description" className='text-md/2 font-bold mt-2 lg:text-xl'>Description</label>
            <textarea name="report_desc" className="border-3 border-gray-200 p-2 my-2 h-60 resize-none rounded-md" placeholder='Write your full report here...'></textarea>
        <label htmlFor="image" className='lg:text-xl'>Attach a photo of the item found</label>
            <div className='bg-blue-300 focus:bg-blue-600 flex justify-center items-center gap-2 rounded-md p-2 my-2'>
              <FaFileUpload className='text-white'/>
              <input type="file" name="report_photo" id="report_photo" className='text-white cursor-pointer'/>
            </div>
            <button className='mt-4 w-full bg-blue-700 text-white py-2 rounded-md font-bold'>Submit Report</button>
          </form>
    </div>
  )
}

export default ReportItem