import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchData } from '../../redux/quote/quoteSlice';
function Quotes() {
  const data = useSelector(state => state.quotesReducer.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  });
  const loading = useSelector(state => state.quotesReducer.fetchData.isloading)
  if (loading) {
    return <div style={{
      width: "100%",
      marginTop: "50px",
      display: "flex",
      justifyContent: "center",
      fontSize: "30px"
    }} > Loading</div>
  }
  return (
    <div style={{ margin: "30px" }}>
      <h1>
        Quotes page
      </h1>
      {
        data.slice(0, 10).map((item) => (
          <div key={item.quote_id}>
            <Link style={{ textDecoration: "none", color: "black" }} to={`/quotes/${item.quote_id}`}>
              <div style={{ marginTop: "20px" }}>
                {item.quote} - {item.author}
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}
export default Quotes