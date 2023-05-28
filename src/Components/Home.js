import React from 'react'
import {CardState} from'../Context/Context'
import Singleproduct from './Singleproduct';
import "./styles.css"
import Filter from './Filter';

const Home = () => {

  const {state:{products},
  productstate:{bystock,
  byfastdeliver,
  byrating,
  searchquery,sort}}=CardState();

  const transformproduct=()=>{
    let sortedproduct=products;
    if(sort){
      sortedproduct=sortedproduct.sort((a,b)=>
      sort==="lowToHigh" ? a.price - b.price : b.price- a.price);
    }

    if(!bystock){
      sortedproduct=sortedproduct.filter((prod)=>prod.instock);
    }
    if(byfastdeliver){
      sortedproduct=sortedproduct.filter((prod)=>prod.fastdeliver);
    }
    if(byrating){
      sortedproduct=sortedproduct.filter((prod)=>
      prod.rating>=byrating
      );

    }
    if(searchquery){
      sortedproduct=sortedproduct.filter((prod)=>
      prod.name.toLowerCase().includes(searchquery)
      );

    }

    return sortedproduct;
  }

  return (
    <div  className='home'>
      <Filter/>
      <div className='productcontainer'>
        {transformproduct().map((prod)=>{
          return  <Singleproduct prod={prod} key={prod.id}/>
        })}

      </div>


    </div>
  )
}

export default Home