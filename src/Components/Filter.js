import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import { CardState } from '../Context/Context'

const Filter = () => {

    const{productstate:{bystock,
        byfastdeliver,
        byrating,
        sort},setproductstate}=CardState();
        
  return (
    
    <div className='filter'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check
            inline
            type="radio"
            label="Ascending"
            name='group1'
            id={'inline-1'}
            onChange={()=>setproductstate({
                type:"sort_by_price",
                payload:"lowToHigh",
            })}
            checked={sort==="lowToHigh"?true:false}
            />

        </span>
        <span>
            <Form.Check
            inline
            type="radio"
            label="Descending"
            name='group1'
            id={'inline-2'}
            onChange={()=>setproductstate({
                type:"sort_by_price",
                payload:"highToLow",
            })}
            checked={sort==="highToLow"?true:false}
            />

        </span>
        <span>
            <Form.Check
            inline
            type="checkbox"
            label="Include out of stock"
            name='group1'
            id={'inline-3'}
            onChange={()=>setproductstate({
                type:"sort_by_stock"
            })}
            checked={bystock}
            />

        </span>
        <span>
            <Form.Check
            inline
            type="checkbox"
            label="Fast Delivery Only"
            name='group1'
            id={'inline-4'}
            onChange={()=>setproductstate({
                type:"sort_by_delivery"
            })}
            checked={byfastdeliver}
            />

        </span>
        <span>
            <label style={{padding:10}}>Rating:</label>
            <Rating rating={byrating} 
            onClick={(i)=>setproductstate({
                type:'sort_by_rating',
                payload: i+1,
            })}
            style={{cursor:"pointer"}}/>
        </span>
        <Button variant='light'
        onClick={()=>setproductstate({
            type:"clear_filter"
        })}
        >clear filters</Button>
    </div>
  )
}

export default Filter