import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data';

import Cartbtn from './buttons/Cartbtn';

const ProductDetail = () => {
    const [Cartbtn, setCartBtn] = useState("Add to Cart")
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id === proid.id);
    const product = proDetail[0];
    console.log(product);

    const handleCart = (product) =>{
        if (Cartbtn === "Add to Cart") {

        }

    }

  return (
    <>
    <div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.img} alt={product.title} />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1>{product.title}</h1>
                <hr />
                <h2>{product.price}</h2>
                <p>{product.desc}</p>
                <button onClick={()=>handleCart(product)} className='btn btn-ooutline-primary'>{Cartbtn}</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default ProductDetail
