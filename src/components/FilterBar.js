import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clear, clearAll } from '../reduxToolkit/Slice'

const FilterBar = (props) => {
  const dispatch = useDispatch()
  const { filterTablets } = useSelector(state => state.filterArray)
  return (
    <div className='filterBar'>
      <div className='tablets-container'>
        {filterTablets.map(i => <p id={i} className='filterTablets'> {i} <span className='clearFilterTablet' onClick={(event) => { dispatch(clear(event.target.parentNode)) }}>X</span></p>)}</div>
      <button className='clear' onClick={() => dispatch(clearAll())}>clear</button>
    </div>
  )
}

export default FilterBar