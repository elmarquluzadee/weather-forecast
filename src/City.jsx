import React from 'react'

const City = ({city})=> {
    console.log(city)
  return (
    <div>
                <h5>{city.main.temp}</h5>     
            <h5>{city.name}</h5>
            <h5>{city.weather[0].main}</h5>
    </div>
  )
}

export default City
