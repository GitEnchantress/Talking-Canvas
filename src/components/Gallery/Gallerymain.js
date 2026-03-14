import React, {useEffect} from 'react';
import {Link} from "react-router-dom"
import "./gallery.css";
import data from "./gallerydetail.json";
import Work from '../Work';
function Gallerymain() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div>
            <div className="gallery--page--heading mt-5 pt-5">
        <center>
            <h1 className=' my-3 font-bold text-5xl text-blue-800'>  GALLERY  </h1>
            <p>100% MONEY BACK GUARANTEE - SHIPPING CHARGE EXTRA </p>
         
            <p>Pay 40% IN ADVANCE. THE REST AFTER APPROVAL(T&c apply).</p>
        </center>
    </div> 
    {data.map(data => {
      return (
        <div className="container mt-5" key={data.id}>
        <div className="container--gallery">
            <div className="first--card">
                <img src={data.card1} alt={data.alt2} />
                <div className="centered"><h1>{data.title}</h1>
               <Link to={data.link}><button className='btn btn-danger mt-3'>View Gallery</button></Link>  </div>
            </div>
            <div className="second--card">
                <img src={data.card2} alt={data.alt2} />
            </div>
            <div className="third--card">
                <div className="gallery--card card--text">
                    <div className="card--text--body">
                    <p>{data.description} </p>
                    <p><span className="text--bold">Recommended For: </span> {data.recommended}</p>
                  
                    <p><span className="text--bold">Finishing Options: </span>{data.finishing}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <hr className="h-rule" />
    </div>
      )  
    })}
   <Work/>
   <div className="gallery--page--heading mt-5 pb-5">
        <center>
           <span class="button button-pulse">Order Now</span>
            <p>100% MONEY BACK GUARANTEE - SHIPPING CHARGE EXTRA</p>
         
            <p>Pay 40% IN ADVANCE. THE REST AFTER APPROVAL(T&c apply).</p>
        </center>
    </div> 

        </div>
    );
}

export default Gallerymain;