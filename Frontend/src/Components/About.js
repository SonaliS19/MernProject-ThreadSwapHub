import "./About.css"; // Import the CSS file

import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";
import maintop from "../assets/maintop.png";
import perople from "../assets/p1.png";

function About() {
    return (
        <>
            <div>
                <img
                    src={maintop}
                    alt="Description of Image"
                    className="main-image"
                />
                <h2 className="about-heading">About ThreadSwapHub</h2>
                <div className="content-container">
                    <img
                        className="slide-in-image"
                        src={perople}
                        alt="Description of Image"
                    />
                    <div className="text-content">
                        <h2>Welcome to our platform</h2>
                        <p>
                            A place where we firmly believe in the power of
                            second chances! Our mission is to create a
                            sustainable fashion ecosystem that benefits everyone
                            involved.
                            <br />
                            <br />
                            Our platform serves as a conduit connecting those
                            looking to streamline their closets with others
                            seeking budget-friendly clothing options. We
                            prioritize quality alongside affordability, ensuring
                            each listed item meets rigorous standards through
                            our verification process. More than a mere
                            marketplace, we foster a community of
                            style-conscious individuals committed to prolonging
                            the lifespan of garments, thereby reducing fashion
                            waste and advocating for sustainability. Join us in
                            revolutionizing wardrobes globally, empowering each
                            other to give fashion a new lease on life.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
