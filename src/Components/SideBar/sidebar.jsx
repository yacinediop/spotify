import React from 'react'
import { BsFillHouseDoorFill,BsSearch, BsJustifyLeft,BsFillPlusCircleFill,BsFillChatSquareHeartFill } from "react-icons/bs";



const sidebar = () => {
  return (
    <div className=" side position-fixed ">
    <div className="row">
       <div className="col-auto px-md-5 min-vh-100 bg-dark text-white pt-5 mt-5 ">
       <ul>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsFillHouseDoorFill />
                   <span className="ms-3 mb-2 d-none d-sm-inline">Home</span>
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                <BsSearch />
                  <span className="ms-3  d-none d-sm-inline">Search</span> 
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsJustifyLeft />   
                   <span className="ms-3 d-none d-sm-inline">Your library</span> 
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsFillPlusCircleFill />
                   <span className="ms-3 mb-2 d-none d-sm-inline">Create Playlist</span>
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                <BsFillChatSquareHeartFill />
                  <span className="ms-3  d-none d-sm-inline">Liked song</span> 
                </a>
              </il>
             
            </ul>
       </div>
    </div>
  </div>
  )
}

export default sidebar
