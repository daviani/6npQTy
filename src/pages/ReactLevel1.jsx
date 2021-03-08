import React, { useState, useEffect } from 'react'
import CheckBox from '../components/checkBox/CheckBox'
import { Items } from '../components/checkBox/Items'


const ReactLevel1 = () => {
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const [listCheckBox, setListCheckBox] = useState([])

  useEffect(() => {
    setListCheckBox(Items)
  }, [listCheckBox])

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll)
    setIsCheck(listCheckBox.map(li => li.id))
    if (isCheckAll) {
      setIsCheck([])
    }
  }

  const handleClick = e => {
    const { id, checked } = e.target
    setIsCheck([...isCheck, id])
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id))
    }
  }

  const items = listCheckBox.map(({ id, name }) => {
    return (
      <>
        <li>
          <CheckBox
            key={id}
            type="checkbox"
            name={name}
            id={id}
            handleClick={handleClick}
            isChecked={isCheck.includes(id)}
          />
          {name}
        </li>
      </>
    )
  })

  return (
    <div>
      <div className='card mt-5'>
        <div className='card-body text-center'>
          <h3 className='card-title'>React level 1</h3>
          <h4 className='card-subtitle mb-2 text-muted'>
            Build a simple React application to handle multiple selection in lists.
          </h4>
          <hr className='my-4' />
          <div className="mt-5">
            <CheckBox
              type='checkbox'
              name='Selected-All'
              id='SelectAll'
              handleClick={handleSelectAll}
              isChecked={isCheckAll}
            />
            Select All
            {items}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ReactLevel1