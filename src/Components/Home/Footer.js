import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <section className='bg-dark text-white py-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                       <h6> Company Info</h6>
                        <hr />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti commodi, architecto vitae sunt odio deserunt culpa provident ipsa saepe possimus.</p>

                </div>
                <div className="col-md-4">
                      
                    
                        <h6>Quick links</h6>
                        <hr />
                            <div> <Link to='/' className='text-decoration-none text-white'> Home </Link> </div>
                         
                            <div> <Link to='/contact' className='text-decoration-none text-white'> Contact Us </Link> </div>
                            <div> <Link to='/about' className='text-decoration-none text-white'> About Us</Link> </div>
                            <div> <Link to='/blog' className='text-decoration-none text-white'  > Blog </Link> </div> 

                </div>
                <div className="col-md-4">
            
                
                       <h6> Conntact Info</h6>
                        <hr />
                        <div>
                            <p> Dhaka,Bangladesh</p>
                        </div>
                        <div> <p>0123456778</p></div>
                        <div> <p>019373456778</p></div>
                        <div> <p>absy@gmail.com</p></div>
                        
                </div>


                

                
                
            </div>
            
        </div>

      </section>

  )
}

export default Footer
