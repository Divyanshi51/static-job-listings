import React from 'react'

const FilterBar = (props) => {
  console.log(props, "props")
  return (
    <div className='filterBar'>
        <button className='clear'>clear</button>
    </div>
  )
}

export default FilterBar
