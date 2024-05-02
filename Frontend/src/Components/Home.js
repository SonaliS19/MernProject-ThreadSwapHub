import "./Home.css"; // Import the CSS file

import Footer from "./Footer";
import React from "react";

function Home() {
    return (
        <>
            <div className="home-container">
                <div>
                    <h1 className="animate_zoomIn">ThreadSwapHub</h1>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
