import React, { 
  createContext, useContext, useReducer } from 'react'
  import {faker} from '@faker-js/faker'
import { cartReducer,productreducer } from './Reducers';

const Cart=createContext();
faker.seed(99)

const Context = ({children}) => {

const products=[...Array(21)].map(( e,i)=>({
  name:faker.commerce.productName(),
  id:i,
  product:faker.commerce.product(),
  productdes:faker.commerce.productAdjective(),
  material:faker.commerce.productMaterial(),
  price:faker.commerce.price(),
  image:faker.image.url(),  
  instock:faker.number.int({min:5,max:10}),
  fastdeliver:faker.datatype.boolean(),
  rating:faker.number.int({min:1,max:5}),

}))
console.log(products);
const initialstate={products:products,cart:[]}
const[state,dispatch]=useReducer(cartReducer,initialstate)
const[productstate,setproductstate]=useReducer(productreducer,{
bystock:false,
byfastdeliver:false,
byrating:0,
searchquery:"",

})
  return (
    <Cart.Provider
    value={{state,dispatch,productstate,setproductstate}}
    > {children}
    </Cart.Provider>
  )
}

export default Context

export const CardState=()=>{
  return useContext(Cart)
}