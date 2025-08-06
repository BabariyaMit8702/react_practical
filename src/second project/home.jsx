import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'
import { Nav } from './nav'

export const Home2 = () => {
  const [menu, setmenu] = useState([]);
  const [area, setarea] = useState('Canadian');
  const [loading, setloading] = useState(true)
  const [searched, setsearched] = useState('')
  const [find, setfind] = useState(true)
  useEffect(() => {
    async function call(ct) {
      try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ct}`);
        if (!response.ok) {
          throw new Error('network issues');
        }
        let data = await response.json()
        setmenu(data.meals);
        setloading(false);
      }
      catch (e) {
        console.Error(e)
      }
    }
    call(area)
  }, [area])

  useEffect(() => {
    async function name_call(searches) {
      if (searches !== '') {
        try {
          let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searches}`);
          let data = await response.json();
          if (data.meals === null) {
            setfind(false);
            setmenu([]);
          } else {
            setmenu(data.meals);
            setloading(false);
            setfind(true)
          }
        } catch (e) {
          console.Error(e)
        }
      }
    }
    name_call(searched)
  }, [searched])

  let modser = (e) => {
    let dta = e.target.value
    setsearched(dta)
  }

  const cs = {
    color: 'white',
    width: '200px',
  }
  const ccun = (city) => {
    setarea(city);
  }
  document.title = 'foods'
  return (
    <>
      <center>
        <Nav func={ccun} />
        <hr>
        </hr>
        <input type='text' value={searched} onChange={modser} /><hr></hr>
        <div className='container2'>
          {loading ? <p>Loading...
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </p> :
            find !== true ? <p>Not-Found</p>
              : menu.map((ml) => <div className='obj' key={ml.idMeal}>
                <a href={ml.strMealThumb}>
                  <div className='img'><img src={ml.strMealThumb} alt="Loading" width='200px' /></div>
                  <div style={cs}>{ml.strMeal.slice(0, 20)}</div>
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

