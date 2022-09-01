import React from 'react';
import "./Footer.scss";
import {FaInstagramSquare, FaFacebookSquare, FaYoutube, FaTwitter} from "react-icons/fa";
import logo from "../../Assets/Logo/kalpanacaps.png";

export default function index() {
  return (
    <div class="body">
      <hr class="divider" />
      <hr class="divider" />
      <footer class="flex-rw">
          
          <ul class="footer-list-top">
            <li>
              <h4 class="footer-list-header">Team Kalpana</h4></li>
            <li class="society-description">A society for hard working, like-mided people who are enthusiastic about space exploration.</li>
            <li class="society-description" style={{paddingTop: 30}}>Mail us: <p style={{textDecoration: 'underline'}}>teamkalapana@gmail.com</p></li>
          </ul>
          <ul class="footer-list-top">
            <li>
              <img src={logo} alt="logo" style={{width:'180px'}} />
            </li>
            <li style={{color:'white', fontSize:'15px'}}>Netaji Subhas University of Technology, Dwarka Sec-3, Delhi</li>
          </ul>
          <ul class="footer-list-top">
            <li id='help'>
              <h4 class="footer-list-header">Site Map</h4></li>
            <li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">HOME</a></li>
            <li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">TEAM</a></li>
            <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">ACHIEVEMENTS</a></li>
            <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">SPONSORS</a></li>
            <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor">BLOGS</a></li>
          </ul>
          <section class="footer-social-section flex-rw">
              <span class="footer-social-overlap footer-social-connect">
              CONNECT <span class="footer-social-small">with</span> US
              </span>
              <span class="footer-social-overlap footer-social-icons-wrapper">
              {/* <a href="https://www.pinterest.com/paviliongift/" class="generic-anchor" target="_blank" title="Pinterest" itemprop="significantLink"><i class="fa fa-pinterest"></i></a> */}
              <a href="https://www.facebook.com/paviliongift" class="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><FaFacebookSquare /></a>
              <a href="https://twitter.com/PavilionGiftCo" class="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><FaTwitter /></a>
              <a href="http://instagram.com/paviliongiftcompany" class="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><FaInstagramSquare /></a>
              <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" class="generic-anchor" target="_blank" title="Youtube" itemprop="significantLink"><FaYoutube /></a>
              {/* <a href="https://plus.google.com/+Paviliongift/posts" class="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i class="fa fa-google-plus"></i></a> */}
              </span>
          </section>
          <section class="footer-bottom-section flex-rw">
        <div class="footer-bottom-wrapper">   
        <i class="fa fa-copyright" role="copyright">
        
        </i> <span>ⓒ 2022 Copyright: Team Kalpana - All Rights Reserved - </span>
            </div>
            <div class="footer-bottom-wrapper">
            <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacy</a>
              </div>
          </section>
      </footer>
    </div>
  )
}
