import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

export default function ProductSection() {

    const [amazon, setAmazon] = useState("");
    const [flipkart, setflipkart] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const amazonUrl = "https://dummyjson.com/products";
    const flipkartUrl = "https://fakestoreapi.com/products";
    const fetchData = async () => {
        let amazonData = await axios(amazonUrl);
        setAmazon(amazonData.data.products)
        let flipkartData = await axios(flipkartUrl);
        setflipkart(flipkartData.data);        
    }

    const allData = [...flipkart,...amazon ];

    function getFilteredList() {
        if (selectedCategory==="default") {
          return allData;
        }
        else if(selectedCategory==="amazon"){
            return amazon;
        }
        else if(selectedCategory==="flipkart"){
            return flipkart;
        }
        else{
            return amazon;
        }
    }

    const filteredList = useMemo(getFilteredList, [selectedCategory, allData]);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="small-container">
            <div className="row row-2">
                <h2>All Products</h2>
                <select onChange={(e)=>setSelectedCategory(e.target.value)}>
                    <option value="default">Default Shorting</option>
                    <option value="amazon">Short Amazon</option>
                    <option value="flipkart">Short Flipkart</option>
                </select>
            </div>
            <div className="row">
                {
                    Array.from(filteredList).map((item, index) => (
                        <div className="col-4" key={index}>
                            <img src={(item.image)?item.image:item.images[0]} alt="" />
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