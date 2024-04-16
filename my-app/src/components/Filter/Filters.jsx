import React from 'react'
import FilterItem from './FilterItem'

function Filters({filterList}) {
  return (
    <div className='filters absolute-center'>
     {filterList && filterList.map((filter)=>
     <>
     <FilterItem filter={filter} key={filter.id}/>
     </>
     )}
    </div>
  )
}

export default Filters
