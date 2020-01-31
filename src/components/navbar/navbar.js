import React from "react";
import './navbar.css'
import logo from './img/Logo.svg'
import Home from './img/Path357.svg'
import Inbox from './img/Path358.svg'
import Invoices from './img/Path102.svg'
import Help from './img/Path107.svg'
import Settings from './img/Path108.svg'
import Vertical from './img/VerticalLine.svg'
import CalendarIcon from "./img/Path149.svg";
import Chat from '../header/img/Path9.svg'
import Chat2 from '../header/img/Path10.svg'

export const Navbar = () => {
  return(
      <div className='block'>
          <div className='impekable'>
              <img className='logo' src={logo} alt=''/>
          </div>
      <div className='main'>
          <div className='cell'>
              <img src={Home} alt=''/>
                  <p className='cellP'>Home</p>
          </div>
          <div className='cell'>
              <div className='imgBox'>
                  <div style={{width:'4px', height:'6px', backgroundColor:'#A5A4BF'}}/>
                  <div style={{width:'4px', height:'16px', backgroundColor:'#A5A4BF'}}/>
                  <div style={{width:'4px', height:'11px', backgroundColor:'#A5A4BF'}}/>
              </div>
              <p className='cellP'>Dashboard</p>
          </div>
          <div className='cell'>
              <img src={Inbox} alt=''/>
              <p className='cellP'>Inbox</p>
          </div>
          <div className='cell'>
              <div className='imgBox' style={{alignItems: 'flex-start'}}>
                  <div style={{width:'2px', height:'16px', backgroundColor:'#A5A4BF'}}/>
                  <div style={{width:'2px', height:'11px', backgroundColor:'#A5A4BF'}}/>
                  <div style={{width:'4px', height:'11px', backgroundColor:'#A5A4BF'}}/>
                  <div style={{width:'2px', height:'11px', backgroundColor:'#A5A4BF'}}/>
                  <div style={{width:'2px', height:'16px', backgroundColor:'#A5A4BF'}}/>
              </div>
              <p className='cellP'>Products</p>
          </div>
          <div className='cell'>
              <img src={Invoices} alt=''/>
              <p className='cellP'>Invoices</p>
          </div>
          <div className='cell'>
              <img src={Inbox} alt=''/>
              <p className='cellP'>Customers</p>
          </div>
          <div className='cell'>
              <div style={{width: '30px', display:'flex', marginLeft: '25px'}}>
                  <img src={Chat} alt='' style={{margin:0}} />
                  <img src={Chat2} alt='' style={{position:'relative', left: '-33px', top:'4px'}} />
              </div>
              <p className='cellP'>Chat room</p>
          </div>
          <div className='cell'>
              <img src={Vertical} style={{margin:0}} alt=''/>
              <img src={CalendarIcon} style={{marginLeft:'20px'}}alt=''/>
              <p className='cellP'>Calendar</p>
          </div>
          <div className='cell'>
              <img src={Help} alt=''/>
              <p className='cellP'>Help Center</p>
          </div>
          <div className='cell'>
              <img src={Settings} alt=''/>
              <p className='cellP'>Settings</p>
          </div>
      </div>
      </div>
  )
};