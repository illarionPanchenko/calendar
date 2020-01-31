import React from "react";
import './header.css'
import Icon from './img/icon_search.svg'
import Support from './img/SupportIcon.svg'
import Chat from './img/Path9.svg'
import Chat2 from './img/Path10.svg'
import Bell from './img/Path3.svg'
import Username from './img/Username.svg'
import Avatar from './img/Avatar.png'
import Arrow from './img/Path26.svg'
import Notification from './img/NotificationBadge.svg'
import BellDrop from './img/Path2.svg'

export const Header = () => {
  return(
      <div className='header'>
          <div className='Header-Block-start'>
          <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback">
                  <img src={Icon} alt='' style={{marginTop: '28px'}}/>
              </span>
          <input type="text" className="form-control" placeholder="Search transactions, invoices or help"/>
          </div>
          </div>
          <div className='Header-Block'>
              <div className='blockForIcons' style={{marginLeft: '20px'}}>
              <img src={Support} alt=''/>
              </div>
              <div className='blockForIcons'>
              <img src={Chat} alt='' />
                  <img src={Chat2} alt='' style={{position:'relative', left: '-8px', top:'4px'}} />
              </div>
              <div className='blockForIcons'>
              <img src={Bell} alt=''/>
                  <img src={Notification} alt='' style={{position:'relative', left: '-8px', top:'-7px'}}/>
                  <img src={BellDrop} alt='' style={{position:'relative', left: '-22px', top:'7px'}}/>
              </div>
              <img src={Username} alt=''/>
              <img src={Arrow} alt=''/>
              <img src={Avatar} style={{height: '38px', marginRight: '20px'}} alt=''/>
          </div>
      </div>
  )
};