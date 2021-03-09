import React, { useState } from 'react'
import { GIT_URL } from '../config'

const ReactLevel2 = () => {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState({})

  //Request HTTP
  const httpRequest = () => {
    fetch(GIT_URL + query,
      { method: 'GET' })
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        setItems(json.items)
      })
      .catch(function (json) {
        console.error('error', json.message)
      })
  }
  return (
    <div className='jumbotron jumbotronHome mt-5 pb-10'>
      <h1 className='display-3'>
        Github user search
      </h1>
      <p className='lead'>
        Create an input text in which as the user types in, launch a search against Github users and return a result
        list.
      </p>
      <div className='row'>
        <div className='col-9'>
          <input className='form-control' placeholder='Search' type='text'
                 onChange={(e) => {
                   setQuery(e.target.value)
                 }}
          />
        </div>
        <div className='col-3'>
          <button type='button' className='btn bg-gradient-primary' onClick={httpRequest}>Search</button>
        </div>
      </div>
      <hr className='my-4'/>


      <div className='card'>
        <div className='table-responsive'>
          <table className='table align-items-center mb-0'>
            <thead>
            <tr>
              <th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>id</th>
              <th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'>avatar</th>
              <th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'>user name</th>
              <th/>
            </tr>
            </thead>
            {items.length >= 1 && (
              <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td className='pt-3'>
                    {item.id}
                  </td>
                  <td>
                    <img
                      src={item.avatar_url}
                      className='avatar avatar-sm rounded-circle me-2'
                      alt='avatar of'/>
                  </td>
                  <td className='pt-3'>
                    {item.login}
                  </td>
                  <td className='align-middle text-center'>
                    <button type="button" className='btn btn-secondary'>View profile</button>
                  </td>
                </tr>
              ))}
              </tbody>
            )}
          </table>
          {items.length === undefined && (
            <p className='text-center p-4'>
              No Data
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReactLevel2