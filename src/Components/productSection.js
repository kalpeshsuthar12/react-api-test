import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProductSection() {

    const [amazon, setAmazon] = useState("");
    const [flipkart, setflipkart] = useState("");

    const amazonUrl = "https://dummyjson.com/products";
    const flipkartUrl = "https://fakestoreapi.com/products";
    const fetchData = async () => {
        let amazonData = await axios(amazonUrl);
        setAmazon(amazonData.data.products)
        let flipkartData = await axios(flipkartUrl);
        setflipkart(flipkartData.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="small-container">
            <div className="row row-2">
                <h2>All Products</h2>
            </div>
            <div className="row row-2">
                <h2>Amazon Products</h2>
            </div>
            <div className="row">
                {
                    Array.from(flipkart).map((item, index) => (
                        <div className="col-4" key={index}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>₹{item.price}</p>
                        </div>
                    ))
                }
            </div>
            <div className="row row-2">
                <h2>Flipkart Products</h2>
            </div>
            <div className="row">
                {
                    Array.from(amazon).map((item, index) => (
                        <div className="col-4" key={index}>
                            <img src={item.images[0]} alt="" />
                            <h4>{item.title}</h4>
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>₹{item.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}