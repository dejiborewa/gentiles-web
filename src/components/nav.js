import React, { useState } from 'react'
import { Link } from 'gatsby'

export default function Nav() {  // real-time width
  const [width, setWidth] = useState((function currentWidth() {
    if (typeof window !== 'undefined') {
        return document.documentElement.clientWidth
      }
    }())
  ) 

  const checkWidth = () => {
    setWidth(document.documentElement.clientWidth)
  }

  if (typeof window !== 'undefined') {
    window.onresize = checkWidth;
  }

  const displaySidebar = () => {
    document.getElementById('sidebar').style.display = 'flex'
  }

  return (
    <div className='row top'>
      <div>
        {(width >= 768) ? <OpenMenu /> : <button className='hamburger' onClick={() => {
          if (typeof window !== 'undefined') {
              displaySidebar()
            }
          }} onKeyDown={() => {
            if (typeof window !== 'undefined') {
                displaySidebar()
              }
            }}>&#9776;</button>}
      </div>
      <div className='gentiles'>THE GENTILES</div>
      <Sidebar />
    </div>
  )
}

function OpenMenu() {
  return (
    <div className='open-menu'>
      <Link to='/'><div className='menu-home'>HOME</div></Link>
      <Link to='/gallery'>
        <div className='menu-gallery'>GALLERY</div>
      </Link>
    </div>
  )
}

function Sidebar() {
  
  const closeSidebar = () => {
    document.getElementById('sidebar').style.display = 'none';
  }

  return (
    <div className='row sidebar' id='sidebar'>
      <div className='col-10'>
        <Link to='/'>
          <div role='button' className='sidebar-text' onClick={() => {
              if (typeof window !== 'undefined') {
                  closeSidebar()
                }
              }} onKeyDown={() => {
                if (typeof window !== 'undefined') {
                    closeSidebar()
                  }
                }} tabIndex={0}>HOME</div>
        </Link>
        <Link to='/gallery'>
          <div className='sidebar-text'>GALLERY</div>
        </Link>
      </div>
      <div className='col-2'>
        <button className='cancel' onClick={() => {
          if (typeof window !== 'undefined') {
              closeSidebar()
            }
          }} onKeyDown={() => {
            if (typeof window !== 'undefined') {
                closeSidebar()
              }
            }}>&times;</button>
      </div>
    </div> 
  )
}
  
