import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'; // Assuming you have a CSS file for styling
const Footer = () => {
  return (
    <div>
      <div className='footer_outer_container'>
        <div className='footer_inner_container'>
          <div className='footer_icons'>
            <FacebookIcon className='footer_icon' />
            <YouTubeIcon className='footer_icon' />
            <InstagramIcon className='footer_icon' />

          </div>
          <div className='footer_data'>
             <div>
                <ul>
                  <li>Audio description</li>
                  <li> Invester Relation Ship</li>
                  <li> Legal Notice</li>
                  <li> <button>services Code</button></li>

                </ul>
             </div>
                <div>
                    <ul>
                      <li>Help Center</li>
                      <li>Jobs</li>
                      <li>Cookie Preferences</li>
                    </ul>
                </div>
                <div>
                    <ul>
                      <li>Gift Cards</li>
                      <li>Terms of Use</li>
                      <li>Corporate Information</li>
                    </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                      </ul>
                    </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer