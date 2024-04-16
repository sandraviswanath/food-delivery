import React from 'react'
import './ExploreSection.css'
import ExploreCard from '../ExploreCard'
import CollectionCard from './CollectionCard'



function ExploreSection({list,collectionName}) {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName}</div>
     <div className='explore-grid'>
      {/* {list.map((restaurant)=>
      // <ExploreCard restaurant={restaurant}/>
    
      )} */}
      <CollectionCard/>
     </div>
    </div>
  )
}

export default ExploreSection
