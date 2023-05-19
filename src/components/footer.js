import React from 'react'

const footer = () => {
  return (
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          First React Project
        </a>
      </div>
  )
}

export default footer