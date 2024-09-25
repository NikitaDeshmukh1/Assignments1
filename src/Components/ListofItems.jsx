import React from 'react'
import './ListofItems.css'

const ListofItems = ({items}) => {
  return (
    <div className='list-container'>
        <h2>List of Itmes</h2>
        <ul>
            {items.map((item , index) =>(
                <li key ={index}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListofItems