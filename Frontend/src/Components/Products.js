import { Box, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";

import { AppContext } from "../App";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router-dom";

const domain = process.env.REACT_APP_BACKEND_DOMAIN;

function Products() {
    const { category = "", subcat = "" } = useParams();
    const { items, setItems } = useContext(AppContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${domain}/api/item/fetch/${subcat}`)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);

    // if (!subcat.startsWith("women")) {
    //     return <PageNotFound />;
    // }

    const handleAddToCart = (item) => {
        setItems([...items, item]);
    };
    return (
        <>
            <div style={{ display: "flex", minHeight: "100vh" }}>
                <div style={{ flex: 1, padding: "20px" }}>
                    <h1>Showing Products</h1>
                    <Box
                        style={{
                            backgroundColor: "white",
                            boxShadow: "0 5px 5px rgba(0, 0, 0, 0.3)",
                            height: "fit-content",
                            overflowY: "hidden",
                            padding: "10px",
                            marginTop: "20px",
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        {Array.isArray(products) &&
                            products.map((product) => (
                                <Card
                                    key={product.id} // Use a unique identifier for the key
                                    className="animate_from_bottom"
                                    sx={{
                                        width: 250,
                                        height: 350,
                                        marginLeft: 3,
                                        marginBottom: 3,
                                        boxShadow: 5,
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="190"
                                            src={product.imageLink}
                                            alt={product.name}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                style={{ color: "black" }}
                                            >
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Size: {product.size}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color="black"
                                            >
                                                Price: Rs {product.price}
                                            </Typography>

                                            {/* add to cart button */}
                                            <IconButton
                                                style={{
                                                    marginLeft: "auto",
                                                    height: "40px",
                                                    marginBottom: "4%",
                                                }}
                                                color="primary"
                                                onClick={() =>
                                                    handleAddToCart(product)
                                                }
                                            >
                                                Add to Cart
                                            </IconButton>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                    </Box>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Products;
