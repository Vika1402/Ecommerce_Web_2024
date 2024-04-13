import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout.js";

import axios from "axios";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";
import { Checkbox,Radio } from "antd";
import { Prices } from "../components/Price.js";
const HomePage = () => {
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
const [checked,setChecked]=useState([])
const [radio,setRadio]=useState([])
  //get all category
   const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Soemthing went Wrong getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //get all prodyuct
  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-products`);
      setProducts(data.products);
      
      toast.success("products renderd");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter=(value,id)=>{
    let all=[...checked]
    if(value){
      all.push(id)
    }else{
      all=all.filter(c=>c!==id)
    }
    setChecked(all);
      }

  useEffect(() => {
    getAllProduct();
  }, []);


 
  return (
    <Layout title={"All Product - Best Offer"}>
      <div className="row mt-3">
        <div className="col-md-2">
          <h4 className="text-center">Filter by Category </h4>
          <div className="d-flex flex-column">
          {categories?.map((c) => (
            <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked,c._id)}>
              {c.name}
            </Checkbox>
          ))}
          {/* price filter  */}
          </div>
          <h4 className="text-center">Filter by Price </h4>
          <div className="d-flex flex-column">
         <Radio.Group onChange={e=>setRadio(e.target.value)}>
         <div key={p._id}>
         {Prices?.map(p=>(
            <Radio value={p.array}>{p.name}</Radio>
          ))}
         </div>
          
         </Radio.Group>
          </div>
         
        </div>
        <div className="col-md-9">
        {JSON.stringify(checked,null,4)}
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2">
                  <img
                    src={`/api/v1/product/product-picture/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <div className="cartButton">
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                      <button type="button" className="btn btn-success">
                        Success
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
