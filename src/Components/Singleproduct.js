
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CardState } from '../Context/Context'
import Rating from './Rating'

const Singleproduct = ({prod}) => {

    const {state:{cart},dispatch}=CardState()
  return (
    <div className='products' key={prod.id}>
        <Card>
            <Card.Img variant='top' src={prod.image} alt='image'/>
        </Card>
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{padding:10}}>
                <span>{prod.price}</span>
                {prod.fastdeliver?(<div>Fast delivery</div>):(<div>4 day delivery</div>)}
              <Rating rating={prod.rating}/>
            </Card.Subtitle>
            {cart.some((p)=>p.id===prod.id)?(
            <Button 
            onClick={()=>{dispatch({
                type:"remove_from_cart",
                payload:prod,

              });
      }}
        variant='danger' >Remove from cart</Button>
      ):(<Button 
        onClick={()=>{dispatch({
            type:"add_to_cart",
            payload:prod,
    });
  }}
        
        disabled={!prod.instock}>{!prod.instock?"out of stock":"add to cart"}</Button>
      )}
            
        </Card.Body>

    </div>
  )
}

export default Singleproduct