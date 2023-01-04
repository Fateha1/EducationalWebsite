import React from 'react'
import Footer from './Footer'
import Mv from './Mv'

const About = () => {
  return (
    <div>
       <section className='text-center bg-primary  py-4'>
        <h1 className='text-white'>About Us</h1>

       </section>
       <section className='py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h4> About Our Website</h4>
                    <div className='underline mb-3'></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odio cumque sequi voluptates quidem natus libero sit reprehenderit ea vitae nisi laudantium alias placeat illo ipsum ratione consequuntur pariatur reiciendis voluptate iste quasi, veniam doloribus? Iure, quo mollitia amet officiis placeat atque qui ratione eligendi suscipit aut molestias porro eum?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odio cumque sequi voluptates quidem natus libero sit reprehenderit ea vitae nisi laudantium alias placeat illo ipsum ratione consequuntur pariatur reiciendis voluptate iste quasi, veniam doloribus? Iure, quo mollitia amet officiis placeat atque qui ratione eligendi suscipit aut molestias porro eum?</p>

                </div>

            </div>

        </div>

      </section>
      <Mv/>
      <Footer/>
    </div>
  )
}

export default About
