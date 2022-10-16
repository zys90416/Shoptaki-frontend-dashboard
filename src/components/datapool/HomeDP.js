import React, { useState, useEffect } from "react";
import "./HomeDP.css";
import { Link, Redirect} from 'react-router-dom'
import AppBox from "../home/app_component/AppBox";
import { items } from "./PoolItem";
import image from "./poolImage.png";
export default function HomeDP({display}) {
  const [pool_item, setPoolItem] = useState(items);
  const [heading, setHeading] =  useState(display);
  const showHeading = () =>{
	setHeading(display === "home" ?  "Explore Data Pools" : display )
	return <h1>{heading}</h1>
  }
  return (
    <>
      <div className="HomeDP">
        <div className="heading">
		<h1>{display === 'home' ? 'Explore Data Pools' : display } </h1>
		  <div className="addCat" >
				Add Categories
			</div>
        </div>


		<div class="poolWrapper">

		 {/* datapool cards */}
		{pool_item.map((pool) => (

		<Link
			to={{
			pathname: `/datapool/pool`,
			}}>
            <div className="card" >
				<img src={image}></img>
				<div className="container">
			 		 <div className="text">
					{/* <h1>Covid-19 Paitent Data</h1> */}
						<h1>{pool.name}</h1>
						<p>{pool.des}</p>
			  		</div>
				</div>
		 	 </div>

			</Link>

          ))}
   
		</div>
        


      </div>
    </>
  );
}
