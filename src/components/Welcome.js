import React from 'react'
import { Button } from './Button';
import {Link} from 'react-router-dom'
import './Welcome.css';
import '../Animation.css'

function Welcome() {
    return (
        <div id='header' className="welcome">
          
                <div className="welcome__left ">
                        <div className="welcome__skills  ">
                            <div className=" animated fadeInRight ">
                            <h1 className="welcome__text ">Software
                            Engineer</h1>

                            <p>I am looking to constantly evolve my skills. <br></br>I enjoy Learning new stacks and Technologies</p>

                            <div className="welcome__demo" style={{marginTop:30}}>
                            

                            <Link to="/FunDemo">
                                <button className="fun__button">Fun Demo</button>
                            
                            </Link>
                            </div>
                            </div>
                            
                        </div>
                            
                        

                </div>

                <div className="welcome__right">
                    <img src='/images/img1.jpg' alt="" className="img fadeIn "/>
                
                </div>
            
        </div>
    )
}

export default Welcome



 
// function Common({name,imgsrc,visit,btname}) {
//     return (
//         <div className="home">
//             <section id= "header" className="d-flex align-items-center">
//                  <div className="container-fluid">
                 
//                     <div className="row">
//                         <div className="col-10 mx-auto">
//                         <div className="row">
//                             <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
//                                 <h1>{name} <strong className="brand-name">Muzammil Technical</strong></h1>
//                                 <h2 className="my-3">
//                                     we are the team of talented developer making websites
//                                 </h2>
//                                 <div className="mt-3">
//                                     <NavLink to={visit} className="btn-get-started">{btname}</NavLink>
//                                 </div>
//                             </div>

//                             <div className="col-lg-6 order-1 order-lg-2 header-img">
//                                 <img src={imgsrc} className="img-fluid animated" alt="home img"/>
//                             </div>
//                         </div>

//                         </div>
//                     </div>
//                  </div>


//             </section>
//         </div>
//     )
// }

// export default Common

