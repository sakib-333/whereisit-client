import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white bg-black">
      <footer className="footer text-white p-10 max-w-5xl mx-auto">
        <nav>
          <h6 className="footer-title">Contact information</h6>
          <div>
            <span className="font-bold">Phone: </span>
            <span className="link link-hover">+8801322901105</span>
          </div>
          <div>
            <span className="font-bold">Support: </span>
            <span className="link link-hover">web@programming-hero.com</span>
          </div>
          <div>
            <span className="font-bold">Address: </span>
            <span className="link link-hover">
              Level-4, 34, Awal Centre, Banani, Dhaka
            </span>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">About us</h6>
          <a className="link link-hover" href="#">
            Blogs
          </a>
          <a className="link link-hover" href="#">
            Important links
          </a>
          <a className="link link-hover" href="#">
            Jobs
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="#" className="hover:opacity-50">
              <FaFacebook />
            </a>
            <a href="#" className="hover:opacity-50">
              <FaGithub />
            </a>
            <a href="#" className="hover:opacity-50">
              <FaTwitter />
            </a>
            <a href="#" className="hover:opacity-50">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </footer>
      <div className="divider"></div>
      <p className="text-center pb-4">
        Copyright &copy; {new Date().getFullYear()} - All right reserved
      </p>
    </div>
  );
};

export default Footer;
