import "./Sell.css";

import { Button } from "@mui/material";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";
import arrow from "../assets/arrow.png";
import maintop from "../assets/maintop.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";

function Sell() {
    return (
        <>
            <div>
                <img
                    src={maintop}
                    alt="Description of Image"
                    style={{ width: "100%", height: "310px" }}
                />
                <h1
                    style={{
                        position: "absolute",
                        top: "21%",
                        left: "38%",
                        color: "white",
                        fontSize: 60,
                        fontWeight: "bolder",
                        fontFamily: "Roboto",
                    }}
                >
                    Selling Process
                </h1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            marginTop: 15,
                            justifyContent: "center",
                        }}
                    >
                        <img
                            className="zoom-image"
                            src={s1}
                            alt="Image 1"
                            style={{
                                width: "11%",
                                height: 210,
                                transition: "transform 0.3s",
                                cursor: "pointer",
                            }}
                        />
                        <img
                            src={arrow}
                            alt="arrow 1"
                            style={{ width: "8%", height: 150, marginLeft: 10 }}
                        />
                        <img
                            className="zoom-image"
                            src={s2}
                            alt="Image 2"
                            style={{
                                width: "11%",
                                height: 210,
                                marginLeft: 10,
                                transition: "transform 0.3s",
                                cursor: "pointer",
                            }}
                        />
                        <img
                            src={arrow}
                            alt="arrow 2"
                            style={{ width: "8%", height: 150, marginLeft: 10 }}
                        />
                        <img
                            className="zoom-image"
                            src={s3}
                            alt="Image 3"
                            style={{
                                width: "11%",
                                height: 210,
                                marginLeft: 10,
                                transition: "transform 0.3s",
                                cursor: "pointer",
                            }}
                        />
                        <img
                            src={arrow}
                            alt="arrow 3"
                            style={{ width: "8%", height: 150, marginLeft: 10 }}
                        />
                        <img
                            className="zoom-image"
                            src={s4}
                            alt="Image 4"
                            style={{
                                width: "11%",
                                height: 210,
                                marginLeft: 10,
                                transition: "transform 0.3s",
                                cursor: "pointer",
                            }}
                        />
                        <img
                            src={arrow}
                            alt="arrow 4"
                            style={{ width: "8%", height: 150, marginLeft: 10 }}
                        />
                        <img
                            className="zoom-image"
                            src={s5}
                            alt="Image 5"
                            style={{
                                width: "11%",
                                height: 210,
                                marginLeft: 10,
                                transition: "transform 0.3s",
                                cursor: "pointer",
                            }}
                        />
                    </div>

                    <Link
                        to="/selling-form"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <Button
                            sx={{
                                backgroundColor: "#31473A",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "#A1BE95",
                                    justifyContent: "center",
                                },
                                padding: "10px 20px",
                                borderRadius: "5px",
                                width: "110%",
                                marginTop: 3,
                                marginBottom: 3,
                                fontSize: "16px",
                                fontWeight: "bold",
                            }}
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Sell;
