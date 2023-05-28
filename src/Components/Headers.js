import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from'react-icons/fa'
import { Link } from 'react-router-dom'
import { CardState } from '../Context/Context'
import { AiFillDelete } from 'react-icons/ai'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
function Headers() {

    const{state:{cart},dispatch,setproductstate}=CardState()

  return (
    <div className='header'>
    <Navbar  className='header' bg='dark' variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link>Shopping-cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl
                style={{width:500}}
                placeholder='search product'
                className='m-auto'
                onChange={(e)=>setproductstate({
                    type:"sort_by_searchquery",
                    payload:e.target.value,

                })}
                
                />
            </Navbar.Text>
            <Nav>
                <Dropdown align="end">
                    <Dropdown.Toggle variant='success'>
                    <FaShoppingCart color='white' fontSize="25px"/>
                        <Badge>{cart.length}</Badge>

                    </Dropdown.Toggle>
                    <Dropdown.Menu  style={{minWidth:370}}
                    
                    >

                        {cart.length>0?(
                         <>
                         {cart.map((prod)=>(
                            <span className='cartitem' key={prod.id}>
                                <img
                                src={prod.image}
                                className='cartitemimage'
                                alt={prod.name}
                                />
                                <div className='cartitemdetail'>
                            <span>{prod.name}</span>
                            <span>{prod.price}</span>

                                </div>
                                <AiFillDelete
                                fontSize={20}
                                style={{cursor:'pointer'}}
                                onClick={()=>
                                dispatch({
                                    type:"remove_from_cart",
                                    payload:prod
                                })
                                }
                                />

                            </span>
                            
                         ))

                         }<Link to="/cart">
                         <Button style={{width:"95%",margin:"0 10px"}}> go to cart</Button>
                         </Link>
                            
                         </>

                        ):(<span style={{padding:10}}>card is  empty! </span>
)}
                        
                    </Dropdown.Menu>

                </Dropdown>
            </Nav>




        </Container>

    </Navbar>
    </div>
    
  )
}

export default Headers