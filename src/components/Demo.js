import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Demo.css';


function Demo() {
    const [data, setData] = useState([]);
    
    async function fetchData(){

        axios.get('https://random-data-api.com/api/food/random_food?size=15').then((response) => {
            setData(response.data);
        }).catch((error) => console.error(error));
    };
    

    useEffect(()=>{
        fetchData();
    },[]) 




   
    return (
        <div className="demo">
            <div className="demo__left">
               <div className="demo__1">
                    <h1 className="demo__h1">API Call Example</h1>
                    <p className="demo__axios"><strong>Using Axios</strong></p>
                    <p className="demo__text">Displaying Random food data using axios, refresh and the data will randomize</p>
               </div>
            </div>

            <div className="demo__right">
            
                <div className="demo__products">
                {data.map((d) => {
                    return(
                        
                        <div className="demo__product" >
                        <h3>{d.dish} made with {d.ingredient}</h3>
                        
                        </div>
                        
                        )
                    })}
                    
                </div>

            
            </div>

        </div>
    )
}

export default Demo
