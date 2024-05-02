import "./Login.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Footer from "./Footer";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import adminImage from "../assets/admin.png";
import arrow from "../assets/arrow.png";
import axios from "axios"; // Import axios
import customerImage from "../assets/customer.png";
import gliterback from "../assets/gliterback.jpg";

const domain = process.env.REACT_APP_BACKEND_DOMAIN;

function Signup() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("");
    const emailPattern = /.+\@.+\..+/;

    const handleAccountTypeClick = (type) => {
        setAccountType(type);
    };

    const handleSubmit = () => {
        let data = { name, mobile, address, email, password, isAdmin: false };

        console.log(data);
        // if accountType is not set, show error message
        if (!accountType) {
            toast.error("Please select account type");
            return;
        }
        // if accountType is customer, set isAdmin to false
        if (accountType === "customer") {
            data.isAdmin = false;
        }
        // if accountType is admin, set isAdmin to true
        if (accountType === "admin") {
            data.isAdmin = true;
        }
        // if any field is empty, show error message
        if (!name || !mobile || !address || !email || !password) {
            toast.error("Please fill all fields");
            return;
        }
        // if mobile number is not 10 digits, show error message
        if (mobile.length !== 10) {
            toast.error("Mobile number should be 10 digits");
            return;
        }
        // if password is less than 6 characters, show error message
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters");
            return;
        }
        // if email is invalid, show error message
        if (!emailPattern.test(email)) {
            toast.error("Please fill a valid email address");
            return;
        }
        // if all fields are valid, send POST request to backend
        axios
            .post(`${domain}/api/user/signup`, data)
            .then((res) => {
                toast.success(res.data.message);
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.response.data.message);
            });
    };

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
                                Sign Up
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                sx={{ alignContent: "center", marginTop: 2 }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Mobile"
                                type="number"
                                variant="outlined"
                                sx={{ alignContent: "center", marginTop: 2 }}
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                sx={{ alignContent: "center", marginTop: 2 }}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                type="email"
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
                                onClick={handleSubmit}
                            >
                                Sign Up
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

export default Signup;
