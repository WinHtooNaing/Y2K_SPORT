import React from "react";
import { NavLink } from "react-router-dom";
import './main.css'

const OurProduct = () => {

    return(
        <>
        <h2 className="text-center py-4 mt-5">Our Products</h2>
        <div className="row product-container">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title text-center">Premier League</h5>
              </div>
              <img className="card-img-top img-fluid" src="./assets/home/permierleague.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"><NavLink to="/login" className="btn btn-outline-dark m-2 ">buy now</NavLink></h5>
                
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title text-center">Laliga</h5>
              </div>
              <img className="card-img-top img-fluid" src="./assets/home/laliga.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"><NavLink to="/login" className="btn btn-outline-dark m-2 ">buy now</NavLink></h5>
                
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title text-center">Serie A</h5>
              </div>
              <img className="card-img-top img-fluid" src="./assets/home/serieA.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"><NavLink to="/login" className="btn btn-outline-dark m-2 ">buy now</NavLink></h5>
                
              </div>
            </div>
          </div>
          
        </div>
        <div className="row product-container" >

          
        <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title text-center">Bundesliga</h5>
              </div>
              <img className="card-img-top img-fluid" src="./assets/home/bundesliga.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"><NavLink to="/login" className="btn btn-outline-dark m-2 ">buy now</NavLink></h5>
                
              </div>
            </div>
          </div><div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title text-center">Other</h5>
              </div>
              <img className="card-img-top img-fluid" src="./assets/home/home.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"><NavLink to="/login" className="btn btn-outline-dark m-2 ">buy now</NavLink></h5>
                
              </div>
            </div>
          </div>
          
        </div>
      
        </>
    )
}

export default OurProduct