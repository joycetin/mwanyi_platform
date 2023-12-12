import React from 'react'
import YoungImage from '../images/young.jpg'; // Import the coffeeleaf.png image
import './home.css'
import seedsImage from '../images/seeds.png';
import tenderImage from '../images/tender.jpg';

const Home = () => {
  return (
    <>
      <div className='homeb'>
        <div className='headim'>
          <h1>Welcome!</h1>
          <h4>For all of your important coffee supplies and fertilizers, you are in the right place.</h4>
          <button className='acc'>Create Account</button>
          <img className='seed' src={seedsImage} alt="Seeds" />
        </div>
        <div className='headim'>
          <img className='home' src={YoungImage} alt="Young leaf" />
          <h4>The best seedlings for the best yields</h4>
        </div>
      </div>
      <div className='types'>
        <h2>Healthy Coffee Types</h2>
        <div className='imgtypes'>
          <div className='pimg'>
            <img className='seed' src={tenderImage} alt="Seeds" />
            <p>Arabica <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={tenderImage} alt="Seeds" />
            <p>Arabica <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={tenderImage} alt="Seeds" />
            <p>Arabica <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={tenderImage} alt="Seeds" />
            <p>Arabica <br/>*****</p>
          </div>
        </div>
        <div className='imgtypes'>
          <div className='pimg'>
            <img className='seed' src={tenderImage} alt="Seeds" />
            <p>Arabica <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={tenderImage} alt="Seeds" />
            <p>Arabica <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={tenderImage} alt="Seeds" />
            <p>Arabica <br/>*****</p>
          </div>
          <div className='pimg'>
            <img className='seed' src={tenderImage} alt="Seeds" />
            <p>Arabica <br/>*****</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
