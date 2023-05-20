import React from 'react'
import Photo1 from '../image/piano.png'
import Photo2 from '../image/deep.png'
import Photo3 from '../image/instrument.png'
import Photo4 from '../image/focus.png'
import Photo5 from '../image/beats.png'
import Photo6 from '../image/todays.png'
import Photo7 from '../image/rap.png'
import Photo8 from '../image/all.png'
import Photo9 from '../image/rock.png'
import Photo10 from '../image/chill.png'

const cardtitle = () => {
  return (
    
    <div classsName="container-fluid ntr">
          <div className='d-flex justify-content-between mt-5 pt-5'>
          <h1 className='text-white ms-5 ps-5'>Focus  </h1>
          <p className='text-white '>Show all</p>
          </div>

    <div className="offset-2 row row-cols-1 row-cols-md-5 ntr g-3"> 

    <div className="col">
      <div class="card frero text-white">
        <img src={Photo1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Peaceful Piano</h5>
          <p class="card-text">Peaceful piano to help you slow down, breathe, and...</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card frero text-white">
        <img src={Photo2} class=" frero- text-whiteimg-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Deep Focus</h5>
          <p class="card-text">Keep calm and focus with ambient and post-rock music.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card frero text-white">
        <img src={Photo3} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Instrumental Study</h5>
          <p class="card-text">Focus with soft study music in the background.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card frero text-white">
        <img src={Photo4} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Focus Flow</h5>
          <p class="card-text">Uptempo instrumental hip hop beats.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="cardfrero text-white">
        <img src={Photo5} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Beats to think to</h5>
          <p class="card-text">Focus with deep techno and tech house.</p>
        </div>
      </div>
    </div>

 
    <div className="col ">
      <div class="cardfrero text-white">
        <img src={Photo6} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Today’s Top Hits</h5>
          <p class="card-text">Harry Styles is on top of the Hottest 50!</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card frero text-white">
        <img src={Photo7} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">RapCaviar</h5>
          <p class="card-text">New music from Lil Baby, Gucci Mane and DaBaby.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card frero text-white">
        <img src={Photo8} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">All Out 2010s</h5>
          <p class="card-text">The biggest songs of the 2010s.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card frero text-white">
        <img src={Photo9} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Rock Classics</h5>
          <p class="card-text">Rock legends & epic songs that continue to inspire...</p>
        </div>
      </div>
    </div>
     <div className="col ">
      <div class="card frero  text-white">
        <img src={Photo10} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Chill Hits</h5>
          <p class="card-text">Kick back to the best new and recent chill hits.</p>
        </div>
      </div>
    </div>
    
 
  </div>
  </div>
  

  )
}

export default cardtitle
