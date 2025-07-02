import React from 'react'

const ReportItem = () => {
  return (
      <div className='flex-center'>
          <h3 className='page-title'>Report your findings.</h3>
          <form>
              <label htmlFor="Title">Title</label>
              <input type="text" name="report_title" id="report_title" />
              <label htmlFor="Title">Description</label>
              <textarea name="report_desc" className="report_desc" placeholder='Write your full report here...'></textarea>
              <label htmlFor="image">Attach a photo of the item found.</label>
              <input type="file" name="report_photo" id="report_photo" accept='file'/>
              <button className="btn">Submit Report</button>
          </form>
    </div>
  )
}

export default ReportItem