import React from 'react';
import Slider from '../Slider2'
import About from './About'
import Footer from './Footer'
import Mv from './Mv'
//import Slider from './Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <section className='py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h4>Our website</h4>
                    <div className='underline mb-3'></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odio cumque sequi voluptates quidem natus libero sit reprehenderit ea vitae nisi laudantium alias placeat illo ipsum ratione consequuntur pariatur reiciendis voluptate iste quasi, veniam doloribus? Iure, quo mollitia amet officiis placeat atque qui ratione eligendi suscipit aut molestias porro eum?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odio cumque sequi voluptates quidem natus libero sit reprehenderit ea vitae nisi laudantium alias placeat illo ipsum ratione consequuntur pariatur reiciendis voluptate iste quasi, veniam doloribus? Iure, quo mollitia amet officiis placeat atque qui ratione eligendi suscipit aut molestias porro eum?</p>

                </div>

            </div>

        </div>

      </section>
      <Mv/>
      
      <section className=' py-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h4>Our Services</h4>
                <div className=" underline mb-3"></div>

                </div>
                <div className="col-md-4">
                    <div className='card shadow'>
                       <div className="card-body">
                    
                           <h6>Web desiging</h6>
                            <div className=" underline mb-3"></div>
                                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Extpariatur reiciendis voluptate iste quasi, veniam doloribus? Iure, quo mollitia amet officiis placeat atque qui ratione eligendi suscipit aut molestias porro eum?</p>


                            </div>
                
                      </div>
                  </div>
                  <div className="col-md-4">
                    <div className='card  shadow'>
                       <div className="card-body">
                    
                           <h6>Web development</h6>
                            <div className=" underline mb-3"></div>
                                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Extpariatur reiciendis voluptate iste quasi, veniam doloribus? Iure, quo mollitia amet officiis placeat atque qui ratione eligendi suscipit aut molestias porro eum?</p>


                            </div>
                
                      </div>
                  </div>
                  <div className="col-md-4">
                    <div className='card  shadow'>
                       <div className="card-body">
                    
                           <h6>Digital marketing</h6>
                            <div className=" underline mb-3"></div>
                                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Extpariatur reiciendis voluptate iste quasi, veniam doloribus? Iure, quo mollitia amet officiis placeat atque qui ratione eligendi suscipit aut molestias porro eum?</p>


                            </div>
                
                      </div>
                  </div>
                </div>
                
          
        </div>
      </section>
     
      <Footer/>

    
    </div>
  )
}

export default Home

