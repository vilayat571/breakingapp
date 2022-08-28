import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { dataSelect, getData, loadSelect } from '../../redux/breaking/breakingSlice';

function Characters() {
  const data = useSelector(dataSelect);
  const isLoading = useSelector(loadSelect);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(6)
  useEffect(() => {
    dispatch(getData(limit))
  }, [dispatch,limit]);
  const loadMore = () => {
    setLimit(limit + 6)
    dispatch(getData(limit))
  }
  if (isLoading) {
    return <div style={{
      width: "100%",
      marginTop: "50px",
      display: "flex",
      justifyContent: "center",
      fontSize: "30px"
    }} > Loading</div>
  }
  return (
    <div>
      <div className='main'>
        <div className='child'>
          {
            data.map((item) => {
              return (
                <div className='char' key={item.char_id}>
                  <Link to={`/characters/${item.char_id}`}>
                    <img className='img' src={item.img} alt="the first appearance" />
                    <div className='div'>
                      {
                        item.name
                      }
                    </div>
                  </Link>
                </div>
              )
            })
          }
          <div style={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center"
          }} >
            <button style={{
              backgroundColor: "black",
              color: 'white',
              padding: "6px 15px",
              border: "none",
              outline: "none",
              fontSize: "18px",
              borderRadius: "3px",
              cursor: "pointer"
            }} onClick={() => loadMore()}  >Load More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Characters