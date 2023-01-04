import React from 'react'
import Footer from './Footer'

const Contact = () => {
   
  return (
    <div>
        <section className=' text-center bg-primary  py-4'>
           <h1 className='text-white'>Contact Us</h1>

        </section>
       <section className='py-5'>
          <div className='container'>
               <div className='row'>
                   <div className='col-md-8'>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239580085!2d90.27919510355895!3d23.780887454340053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1672750345813!5m2!1sen!2sbd" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='col-md-4'>
                        <div className="card-shadow">
                            <div className="card-body py-4">
                                <h4>send your idea</h4>
                                <div className="underline mb-5"></div>
                                <form action="">
                                    <label htmlFor="">Name</label>
                                    <input type="text"  placeholder='enter your name' className='form-control mb-3'/>
                                    <label htmlFor="">Email</label>
                                    <input type="email"  placeholder='enter your mail' className='form-control mb-3'/>
                                     <button className='btn btn-primary w-100'>Submit</button>
                                </form>

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

export default Contact
