import React,{useState,useEffect} from 'react';    ///useState only use for functional component where for class based component we need constructor
import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';


const HomeScreen = () => {

    const[products,setProducts]=useState([])  /// 1st argument what we call piece of state and 2nd is function how to manipulate this state

    useEffect(()=>{             //useEffect return elements as soon as application start
           const fetchProducts=async()=>{
               const {data}=await axios.get('/api/products')  ///object destrucing

               setProducts(data)
           }

           fetchProducts()
    },[])
    return (
        <>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default HomeScreen
