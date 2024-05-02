import "./Login.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Footer from "./Footer";
import { Navigate } from "react-router-dom"; // Import Navigate component
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import adminImage from "../assets/admin.png";
import arrow from "../assets/arrow.png";
import axios from "axios";
import customerImage from "../assets/customer.png";
import gliterback from "../assets/gliterback.jpg";

const domain = process.env.REACT_APP_BACKEND_DOMAIN;
const emailPattern = /.+\@.+\..+/;

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("");
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status

    const handleAccountTypeClick = (type) => {
        setAccountType(type);
    };

    const notify = () => {
        toast.success("Logged In Successfully!");
    };

    const handleLogin = () => {
        const data = { email, password, isAdmin: accountType === "admin" };

        if (!emailPattern.test(email)) {
            return toast.error("Invalid email");
        }

        if (!email || !password) {
            return toast.error("Please fill all fields");
        }
        if (accountType === "") {
            return toast.error("Please select an account type");
        }
        axios
            .post(`${domain}/api/user/signin`, data)
            .then((response) => {
                console.log(response);
                notify();
                setLoggedIn(true);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    // If user is logged in, Navigate to home page
    if (loggedIn) {
        return <Navigate to="/home" />;
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {/* Left part of the screen */}
                <div
                    style={{
                        backgroundImage: `url(${gliterback})`,
                        marginTop: "10px",
                        backgroundSize: "cover",
                        height: "100vh",
                        width: "50%", // Use 50% to take half of the screen
                    }}
                >
                    {/* Rest of the component code */}
                    <h3
                        style={{
                            fontSize: 40,
                            fontWeight: "bolder",
                            paddingTop: "30px",
                            marginTop: 30,
                            textAlign: "left",
                            marginLeft: "175px",
                        }}
                    >
                        Choose Account Type
                    </h3>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginLeft: "10px",
                            marginTop: "40px",
                        }}
                    >
                        <div
                            className="zoom_in"
                            onClick={() => handleAccountTypeClick("customer")}
                            style={{
                                cursor: "pointer",
                                border:
                                    accountType === "customer"
                                        ? "3px solid black"
                                        : "none",
                                borderRadius: "5px",
                                padding: "5px",
                                marginRight: "10px",
                            }}
                            onMouseOver={(e) => {
                                if (accountType !== "customer") {
                                    e.currentTarget.style.border =
                                        "2px solid grey";
                                }
                            }}
                            onMouseOut={(e) => {
                                if (accountType !== "customer") {
                                    e.currentTarget.style.border = "none";
                                }
                            }}
                            onMouseDown={(e) => {
                                if (accountType !== "customer") {
                                    e.currentTarget.style.border =
                                        "3px solid black";
                                }
                            }}
                            onMouseUp={(e) => {
                                if (accountType !== "customer") {
                                    e.currentTarget.style.border =
                                        "2px solid transparent";
                                }
                            }}
                        >
                            <img
                                src={customerImage}
                                alt="Customer"
                                style={{ width: 200, height: 300 }}
                            />
                            <p
                                style={{
                                    textAlign: "center",
                                    marginTop: 10,
                                    fontSize: 20,
                                }}
                            >
                                Customer
                            </p>
                        </div>
                        <div
                            className="zoom_in"
                            onClick={() => handleAccountTypeClick("admin")}
                            style={{
                                cursor: "pointer",
                                border:
                                    accountType === "admin"
                                        ? "3px solid black"
                                        : "none",
                                borderRadius: "5px",
                                padding: "5px",
                                marginLeft: "20px",
                            }}
                            onMouseOver={(e) => {
                                if (accountType !== "admin") {
                                    e.currentTarget.style.border =
                                        "2px solid grey";
                                }
                            }}
                            onMouseOut={(e) => {
                                if (accountType !== "admin") {
                                    e.currentTarget.style.border = "none";
                                }
                            }}
                            onMouseDown={(e) => {
                                if (accountType !== "admin") {
                                    e.currentTarget.style.border =
                                        "3px solid black";
                                }
                            }}
                            onMouseUp={(e) => {
                                if (accountType !== "admin") {
                                    e.currentTarget.style.border =
                                        "2px solid transparent";
                                }
                            }}
                        >
                            <img
                                src={adminImage}
                                alt="Admin"
                                style={{
                                    width: 150,
                                    height: 300,
                                    paddingLeft: "32px",
                                }}
                            />
                            <p
                                style={{
                                    textAlign: "center",
                                    marginRight: "15px",
                                    marginTop: 10,
                                    fontSize: 20,
                                }}
                            >
                                Admin
                            </p>
                        </div>
                    </div>
                    <Button
                        sx={{
                            backgroundColor: "#31473A",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#97BC62",
                            },
                            padding: "10px 20px",
                            borderRadius: "5px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            marginLeft: "290px",
                            marginTop: "20px",
                        }}
                        onClick={() => handleAccountTypeClick("")}
                    >
                        Clear Selection
                    </Button>
                </div>

                <img
                    src={arrow}
                    alt="arrow 1"
                    style={{
                        width: "8%",
                        height: 150,
                        marginLeft: 10,
                        position: "absolute",
                        zIndex: 1,
                        top: "290px",
                        left: "700px",
                    }}
                />

                <Box
                    sx={{
                        width: 750,
                        marginTop: "10px",
                        marginBottom: 1,
                        boxShadow: 8,
                        backgroundColor: "#A1BE95",
                        marginLeft: "auto", // centers the box horizontally
                        marginRight: "0px", // centers the box horizontally
                        display: "flex",
                        height: "100vh",
                        flexDirection: "column",
                        alignItems: "center", // centers the card horizontally
                        justifyContent: "center", // centers the card vertically
                    }}
                >
                    <Card
                        variant="outlined"
                        sx={{ backgroundColor: "#f7f4e9", marginTop: "-70px" }}
                    >
                        <CardContent
                            sx={{
                                width: 400,
                                display: "flex",
                                flexDirection: "Column",
                                alignContent: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    mb: 0.5,
                                    color: "black",
                                    fontSize: 25,
                                    fontFamily: "Roboto",
                                    textAlign: "center",
                                }}
                                color="text.secondary"
                            >
                                Login
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                sx={{ alignContent: "center", marginTop: 2 }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                sx={{ alignContent: "center", marginTop: 2 }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                sx={{
                                    backgroundColor: "#31473A",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#97BC62",
                                    },
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    marginTop: 3,
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}
                                onClick={() => {
                                    handleLogin();
                                }}
                            >
                                Login
                            </Button>
                            <ToastContainer />
                        </CardContent>
                    </Card>
                </Box>
            </div>
            <Footer />
        </>
    );
}

export default Login;
