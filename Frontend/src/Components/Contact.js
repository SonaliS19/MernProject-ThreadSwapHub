import "./Contact.css";

import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Footer from "./Footer";
import { Link } from "@mui/material";
import Navbar from "./Navbar";
import React from "react";
import Typography from "@mui/material/Typography";
import github from "../assets/github.jpg";
import gmail from "../assets/gmail.webp";
import insta from "../assets/insta.webp";
import linkedin from "../assets/linkedin.jpg";
import maintop from "../assets/maintop.png";

function Contact() {
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
                        left: "41%",
                        color: "white",
                        fontSize: 60,
                        fontWeight: "bolder",
                        fontFamily: "Roboto",
                    }}
                >
                    Contact Us
                </h1>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Card
                        className="animate_from_bottom"
                        sx={{
                            width: 330,
                            marginTop: 3,
                            marginLeft: 3,
                            marginBottom: 3,
                            boxShadow: 5,
                        }}
                    >
                        <CardActionArea
                            component={Link}
                            href="https://www.instagram.com/sonalisights"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="160"
                                image={insta}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Instagram
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    sonalisights
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card
                        className="animate_from_bottom"
                        sx={{
                            width: 330,
                            marginTop: 3,
                            marginLeft: 3,
                            marginBottom: 3,
                            boxShadow: 5,
                        }}
                    >
                        <CardActionArea
                            component={Link}
                            href="https://www.linkedin.com/in/sonali-singh-935256225/"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="160"
                                image={linkedin}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    LinkedIn
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    sonalisingh
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card
                        className="animate_from_bottom"
                        sx={{
                            width: 330,
                            marginTop: 3,
                            marginLeft: 3,
                            marginBottom: 3,
                            boxShadow: 5,
                        }}
                    >
                        <CardActionArea
                            component={Link}
                            href="https://github.com/SonaliS19"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="160"
                                image={github}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    GitHub
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    SonaliS19
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card
                        className="animate_from_bottom"
                        sx={{
                            width: 330,
                            marginTop: 3,
                            marginLeft: 3,
                            marginBottom: 3,
                            boxShadow: 5,
                        }}
                    >
                        <CardActionArea
                            component={Link}
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=sonalisingh1928@gmail.com"
                            target="_blank"
                        >
                            <CardMedia
                                component="img"
                                height="160"
                                image={gmail}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Mail Us
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    sonalisingh1928@gmail.com
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card
                        className="animate_from_bottom"
                        sx={{
                            width: 330,
                            marginTop: 3,
                            marginLeft: 3,
                            marginRight: 3,
                            marginBottom: 3,
                            boxShadow: 5,
                        }}
                    >
                        <CardActionArea
                            component={Link}
                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64125.95042934547!2d75.65975046015878!3d31.23914611532172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1706717693076!5m2!1sen!2sin"
                            target="_blank"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64125.95042934547!2d75.65975046015878!3d31.23914611532172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1706717693076!5m2!1sen!2sin"
                                width="100%"
                                height="160"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Location
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lovely Professional University, Punjab
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
