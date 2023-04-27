import React from "react"
import * as RiIcons from "react-icons/ri";
import * as md from "react-icons/md";
import * as bs from "react-icons/bs";


function Footer() {
  return (
    <footer style={{textAlign: 'center', position: 'fixed', bottom: '0', width: '100%',backgroundColor: '#f5f5f5', padding: '20px' }}>
      <h1>Made with ❤️ by group no:10</h1>
      <p>© 2023 by group no:10. All rights reserved.</p>
      <p>Privacy Policy | Terms of Use | Contact Us</p>
      <a href="https://www.facebook.com/mmit.lohgaon.90"> <i class="fab fa-facebook-f" ></i> </a>
  <a href="https://twitter.com/MMIT_Lohgaon"><i class="fab fa-twitter"></i> </a>
  <a href ="https://www.instagram.com/mmitlohgaonpune/"> <i class="fab fa-instagram"></i>  </a>
  <a href="https://www.linkedin.com/in/mmit-lohgaon-b45855154/"><i class="fab fa-linkedin-in"></i> </a>
  <a href="https://mmit.edu.in/"><i class="fab fa-dribbble"></i> </a>
    </footer>
  );
}

export default Footer;
