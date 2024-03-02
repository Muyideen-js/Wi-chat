import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Logo from "./components/img/Logo.png";
import "./App.css";
import Firstimg from "./components/img/third.png";
import imagethree from "./components/img/image 3.png";
import imageFour from "./components/img/image 4.png";
import imageFive from "./components/img/image 5.png";
import Exp from "./components/img/exp.jpg";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowUp } from "react-icons/io";

const LandingPage = () => {
  const [menu, setMenu] = useState(false);

  const HandleShow = () => {
    setMenu(true);
  };

  const HandleHide = () => {
    setMenu(false);
  };

  const [showBackToTop, setShowBackToTop] = useState(false);
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navTop = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Why Us",
      href: "#Choose",
    },
    {
      name: "Connect ",
      href: "#Connect",
    },
    {
      name: "About Us",
      href: "#About",
    },
    {
      name: "Contact Us",
      href: "#footer",
    },
  ];

  return (
    <div>
      {menu && (
        <div className="menu-view">
          <AiOutlineClose
            onClick={HandleHide}
            size={"2rem"}
            style={{ float: "right" }}
          />
          <div className="items-flx">
            {navTop.map((item, i) => (
              <a href={item.href} key={i}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="navigation">
        <div className="logo">
          <img src={Logo} alt={Logo} />
        </div>
        <div>
          <MdMenu onClick={HandleShow} className="menu-bar-icn" size={"4rem"} />
        </div>
        <div className="item-flx">
          {navTop.map((item, i) => (
            <a href={item.href} key={i}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="body-cnt">
        <motion.div
          className="text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} >
          <h1>
            The versatile event platform <br />
            for interactive and outstanding events.
          </h1>
          <p>
            Discover Wi-Chat, your ultimate event platform designed for
            <br /> seamless engagement and event excellence. Elevate your
            gatherings <br />
            with innovative features. Join us in shaping the future of events.
          </p>
          <Link to="/index">
            <button>Start Meeting</button>
          </Link>
        </motion.div>
        <motion.div
          className="img-sec"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }} >
          <img src={Firstimg} alt={Firstimg} />
        </motion.div>
      </div>

      {/* Counter-Sec */}
      <div className="Number-Counter">
        <div className="first-count">
          <h1
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-duration="500"
            data-aos-mirror="true"
          >
            220K
          </h1>
          <p
            data-aos="fade-right"
            data-aos-offset="5"
            data-aos-duration="1000"
            data-aos-mirror="true">
            Active User in our Platform
          </p>
        </div>
        <div className="sec-count">
          <h1
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-duration="500"
            data-aos-mirror="true"
          >
            95%
          </h1>
          <p
            data-aos="fade-right"
            data-aos-offset="5"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            Revenue Growth
          </p>
        </div>
        <div className="third-count">
          <h1
            data-aos="fade-up"
            data-aos-offset="1"
            data-aos-duration="500"
            data-aos-mirror="true"
          >
            250
          </h1>
          <p
            data-aos="fade-right"
            data-aos-offset="5"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            Co-operation with companies
          </p>
        </div>
      </div>

      {/* Why Choose us section */}
      <div className="head" id="Choose">
        <h1 data-aos="fade-down-left" data-aos-duration="1000">
          Why Choose Us
        </h1>
      </div>
      <div className="card">
        <div className="first-card" data-aos="zoom-in" data-aos-duration="1000">
          <img src={imageFive} alt={imageFive} />
          <h3>Welcome to WI-Chat, the Heart of Interaction Excellence</h3>
          <p>
            Explore WI-Chat Engagement Cloud: the premier platform for virtual
            gamification and engagement. Elevate attendee experiences and
            achieve impactful brand amplification for measurable business
            success.
          </p>
          <button>Learn More</button>
        </div>
        <div data-aos="slide-up" data-aos-duration="2000" className="sec-card">
          <img src={imageFour} alt={imageFour} />
          <h3>Your committed customer success team.</h3>
          <p>
            A designated client success lead and customer success team are
            readily available to support you before, during, and after your
            event, ensuring its success. We provide education, enablement, and
            execution excellence.<br></br> We have your back.
          </p>
          <button>Learn More</button>
        </div>
        <div className="third-card" data-aos="zoom-in" data-aos-duration="1000">
          <img src={imagethree} alt={imagethree} />
          <h3>Enhance your Brand</h3>
          <p>
            Ensure seamless brand integration for your grand event with Hubilo's
            powerful suite of customizable and scalable branding capabilities,
            allowing you to expand your brand presence while effectively
            <br />
            conveying your messaging.
          </p>
          <button>Learn More</button>
        </div>
      </div>

      {/* stack-connect */}
      <div className="connect-stack" id="Connect">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="image-stack"
        >
          <img src={Exp} alt={Exp} />
        </div>
        <div className="stack-text">
          <h1 data-aos="fade-up">Connect with our Stack</h1>
          <p data-aos="flip-left">
            Discover the seamless connectivity and power of our cutting-edge
            technology stack designed to elevate your digital experiences. Our
            robust and versatile stack brings together the latest innovations in
            web development, real-time communication, and user engagement.
            Connect with the heart of our technology to unlock a world of
            possibilities, ensuring that your interactions, whether virtual
            meetings or immersive events, are backed by the strength and
            reliability of our advanced technological infrastructure. Explore
            the future of connectivity with our integrated stack and transform
            the way you engage with your audience.
          </p>
          <button data-aos="fade-up">Connect</button>
        </div>
      </div>

      {/* About Us */}
      <div className="about-us" id="About">
        <h1 data-aos="fade-in" data-aos-duration="1000">
          About Us
        </h1>
        <p data-aos="zoom-in-left" data-aos-duration="2000">
          Crafted with passion and innovation, WI-Chat is more than a company;
          it's a commitment to redefining the landscape of virtual experiences.
          Our journey is fueled by the belief that technology should seamlessly
          connect people, creating moments that resonate. With a dedicated team
          and cutting-edge solutions, we empower you to shape exceptional events
          and conversations. WI-Chat is where possibilities meet purpose, making
          every interaction memorable and meaningful.
        </p>
        <button data-aos="slide-up" data-aos-duration="1000">
          Learn More
        </button>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <div className="back-to-top" onClick={handleScrollTop}>
          <IoMdArrowUp  color="black" size={"1rem"}/>
        </div>
      )}

      {/* Contact-us */}
      <footer id="footer">
        <div className="all-footer-flx">
          <div className="left-side">
            <img style={{ width: "200px" }} src={Logo} alt={Logo} />
            <div className="both-style">
              <input type="text" placeholder="Enter Your Email..." />
              <button>Subscribe</button>
            </div>
            <div className="social-icon">
              <div className="twitter">
                <a target="_blank" href="https://twitter.com/abolax_123">
                  <BsTwitterX />
                </a>
              </div>
              <div className="instagram">
                <a target="_blank" href="https://twitter.com/abolax_123">
                  <FaInstagram />
                </a>
              </div>
              <div className="LinkedIn">
                <a target="_blank" href="https://twitter.com/abolax_123">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="mid">
            <h1>Api Reference</h1>
            <ul>
              <a href="">
                <li>Settings</li>
              </a>
              <a href="">
                <li>Web APi</li>
              </a>
              <a href="">
                <li>Mobile Api</li>
              </a>
              <a href="">
                <li>Node Installation</li>
              </a>
              <a href="">
                <li>Documentation</li>
              </a>
            </ul>
          </div>
          <div className="right-sid">
            <h1>UseFul Link</h1>
            <ul>
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
              <a href="">
                <li>Message Us</li>
              </a>
              <a href="">
                <li>Twitter</li>
              </a>
              <a href="">
                <li>Facebook</li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
