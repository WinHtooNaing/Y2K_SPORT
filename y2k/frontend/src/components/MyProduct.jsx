import React, { useState } from "react";

import Data from "../Data";


import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

import MainNavbar from "../pages/MainNavbar";

const MyProduct = () => {
  const [filter, setFilter] = useState(Data);
  

  

 

 

  const filterProduct = (cat) => {
    const updatedList = Data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = (product) => {
    return (
      <>

       
            <div  id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title}
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to="/login" className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  
                </div>
              </div>
            </div>

         
      </>
    );
  };
  return (
    <>
    <MainNavbar/>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="buttons text-center py-5" key={Data.id}>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(Data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Premier League")}>Premier League</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("La Liga")}>
            La Liga
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Serie A")}>Serie A</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Bundesliga")}>Bundesliga</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Other")}>Other</button>
        </div>
        <div className="row justify-content-center">
          {filter.map(ShowProducts)}
        </div>
      </div>
    </>
  );
};

export default MyProduct;
