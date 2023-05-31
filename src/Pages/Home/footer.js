import React from "react"
import * as RiIcons from "react-icons/ri";
import * as md from "react-icons/md";
import * as bs from "react-icons/bs";


function Footer() {
  return (
    <footer style={{textAlign: 'center', position: 'fixed',bottom:'5px', width: '100%',backgroundColor: 'coral', padding: '20px', color:'white',  }}>
      <p>© 2023 by group no:10. All rights reserved.</p>
      <p>Privacy Policy | Terms of Use | Contact Us</p>
      <a href="https://www.facebook.com/mmit.lohgaon.90"> <i class="fa-brands fa-facebook" style={{color: "#3b5998",fontSize:'1.5rem'}} /> </a>
      <a href="https://twitter.com/MMIT_Lohgaon"><i class="fab fa-twitter" style={{color: "#00acee",fontSize:'1.5rem'}} /></a>
      <a href ="https://www.instagram.com/mmitlohgaonpune/"> <i class="fa-brands fa-instagram" style={{color: "#962fbf",fontSize:'1.5rem'}} />  </a>
      <a href="https://www.linkedin.com/in/mmit-lohgaon-b45855154/"><i class="fa-brands fa-linkedin" style={{color: "#0a66c2",fontSize:'1.5rem'}} /> </a>

    </footer>
  );
}

export default Footer;
