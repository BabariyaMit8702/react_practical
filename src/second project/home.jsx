import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'
import { Nav } from './nav'

export const Home2 = () => {
  const [menu, setmenu] = useState([0]);
  const [area, setarea] = useState('Canadian');
  useEffect(() => {
    async function call(ct) {
      try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ct}`);
        if (!response.ok) {
          throw new error('network issues');
        }
        let data = await response.json()
        setmenu(data.meals);
      }
      catch (e) {
        console.error(e)
      }
    }
    call(area)
  }, [area])

  const cs = {
    color: 'white',
    width:'200px',
  }
  const ccun = (city) => {
      setarea(city);
  }
  return (
    <>
      <center>
        <Nav func={ccun}/>
        <div className='container2'>
          {menu === 0 ? loading : menu.map((ml) => <div className='obj' key={ml.idMeal}>
            <a href={ml.strMealThumb}>
              <div className='img'><img src={ml.strMealThumb} alt="Loading" width='200px' /></div>
              <div style={cs}>{ml.strMeal.slice(0,20)}</div>
            </a>
          </div>
          )}
        </div>
      </center>

    </>
  )
}

// notes : agar api ka data object hota toh yeh karte
// Object.entries(menu).map(([key, value]) => (
//   <div key={key}>
//     <strong>{key}</strong>: {value}
//   </div>
// ))

