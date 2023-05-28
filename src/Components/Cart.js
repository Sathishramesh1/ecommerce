import React, { useEffect, useState } from 'react'
import { CardState } from '../Context/Context'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
   const {state:{cart},dispatch}=CardState();
   const[total,settotal]=useState();
   useEffect(()=>{

    settotal(cart.reduce((acc,curr)=>
    acc + Number(curr.price)*curr.qty,0));
    
   },[cart]);
  return (
    <div className='home'>
<div className='productcontainer'>
  <ListGroup>
    {cart.map((prod)=>(
  
      <ListGroup.Item key={prod.id}>
        <Row>
        < Col md={2}>
          <Image src={prod.image} alt={prod.name} fluid rounded/></Col>
          < Col md={2}>{prod.name}</Col>
          < Col md={2}>${prod.price}</Col>
          < Col md={2}><Rating rating={prod.rating}/></Col>
          < Col md={2}><Button 
          fontSize={20}
          style={{cursor:'pointer'}}
          onClick={()=>
          dispatch({
              type:"remove_from_cart",
              payload:prod
          })
          }
          ><AiFillDelete
          fontSize={20}/>
            </Button></Col>
            < Col md={2}>
                <Form.Control 
                as="select" 
                value={prod.qty}
                onChange={(e)=>
                dispatch({
                  type:"change_qty",
                  payload:{
                    id:prod.id,
                    qty:e.target.value,
                  },
                })}
                >
                  {[...Array(prod.instock).keys()].map((x)=>(
                    <option key={x+1}>{x+1}</option>
                  ))}
                </Form.Control>
                

            </Col>

        </Row>
      </ListGroup.Item>
    ))}
  </ListGroup>
</div>

<div className='filter summary'>
<span className='title'>Subtotal Items: {cart.length} </span>
<span className='price'>Total Price:${total}</span>
<div><br/>
<Link to="/">
<Button style={{width:"95%",margin:"0 10px"}} >Home Page</Button>
</Link>

</div>

</div>

    </div>
  )
}

export default Cart