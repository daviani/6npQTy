import React from 'react'

const Footer = () => {
  return (
    <footer className='footer fixed-bottom bg-gradient-dark'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-5'>
            <p>
              Thank you for watching this little web project, which was carried out between the 7th and 8th of
              March 2021 by <strong> Fillatre Daviani.</strong>
            </p>
          </div>

          <div className='col-2 mt-5'>
            <a
              className='text-white m-2'
              href='https://github.com/daviani/6npqty'
            >
              <strong>GitHub</strong>
            </a>
            <a
              className='text-white m-2'
              href='https://www.linkedin.com/in/daviani-fillatre/'
            >
              <strong>LinkedIn</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer