import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
function Quote() {
    const { id } = useParams();
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/quotes/${id}`)
            .then(res => res.json())
            .then(veri => setData(veri))
    }, [])
    return (
        <div style={{ margin: "30px" }}>
            <h1>
                Single data page
            </h1>
            {
                data ? <div>
                    {
                        data.map(item => {
                            return (
                                <div style={{ marginTop: "20px" }} key={item.quote_id}>
                                    {item.author} - {item.quote}
                                </div>
                            )
                        })
                    }
                </div> : <h4 style={{ margin: "20px" }}>
                    Loading
                </h4>
            }
        </div>
    )
}
export default Quote;