import React from 'react'

const LocationInfo = ({location}) => {
    
  return (
    <div className="location_container">
    <article className='Location_info'>
        <ul>
            <li><span>Name: <br></br> {location?.name} </span></li>
            <li><span>Type: <br></br> {location?.type} </span></li>
            <li><span>Dimension: <br></br> {location?.dimension}</span></li>
            <li><span>Population: <br></br> {location?.residents.length}</span></li>
        </ul>
    </article>
    </div>
  )
}

export default LocationInfo