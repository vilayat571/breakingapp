import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function Character() {
  const { id } = useParams();
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then(res => res.json())
      .then(veri => setData(veri))
  })
  return (
    <div style={{ margin: "30px" }}>
      <h1 style={{ marginLeft: "20px" }}>
        Single Character Pages
      </h1>
      {
        data ? data.map((item) => {
          return (
            <div className='char' key={item.char_id}>
              <img className='img' src={item.img} alt="characters specified appearance" />
              <div className='div'>
                {
                  item.name
                }
              </div>
            </div>
          )
        }) : <h4 style={{ margin: "20px" }}>
          Loading
        </h4>
      }
    </div>
  )
}
export default Character