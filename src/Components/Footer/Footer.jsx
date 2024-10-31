import React from "react";
import footerCSS from './../Footer/Footer.module.css'

function Footer(){
    return(
        <footer className={`${footerCSS.footer_wrapper} sectionss`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                <h2>RoyalX</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur modi officia rem, voluptate voluptatum repudiandae eligendi in numquam itaque expedita asperiores aperiam libero vero nam.</p>
                </div>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Contact Us</p>
                <p>Rooms</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address: <span>Dehri-on -sone </span></p>
                <p>Email:<span> shiavm@gmail.com </span></p>
                <p>phone: <span>54u587023</span></p>
            </div>
            <div className={footerCSS.FooterLinks}></div>
        </footer>
    )
}
export default Footer