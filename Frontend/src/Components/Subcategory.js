import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import React from "react";
import allbags from "../assets/Bags.webp";
import allboots from "../assets/Boots.jpg";
import allbracelets from "../assets/Bracelets.webp";
import allcrocs from "../assets/Crocs.jpg";
import allearings from "../assets/Earings.jpg";
import allheels from "../assets/Heels.webp";
import allnecklaces from "../assets/Necklaces.avif";
import allrings from "../assets/Rings.jpg";
import allshoes from "../assets/Shoes.avif";
import allslippers from "../assets/Slippers.jpg";
import childrenbottomwear from "../assets/CBottomWears.jpg";
import childrencoats from "../assets/CCoats.webp";
import childrendresses from "../assets/CDresses.webp";
import childrentops from "../assets/CTops.webp";
import childrentraditionals from "../assets/CTraditionals.webp";
import menbottomwear from "../assets/MBottomWears.webp";
import mencoats from "../assets/MCoats.png";
import menshirts from "../assets/Shirts.avif";
import mentraditionals from "../assets/MTraditionals.jpg";
import mentshirts from "../assets/Tshirts.jpg";
import { useParams } from "react-router-dom";
import womenbottomwear from "../assets/WBottomWears.avif";
import womencoats from "../assets/WCoats.jpg";
import womendresses from "../assets/Dresses.jpeg";
import womentops from "../assets/Tops.jpg";
import womentraditionals from "../assets/WTraditionals.jpg";

// Sample data for subcategories (replace with your actual data)
const subcategories = {
    1: [
        "womentops",
        "womenbottomwear",
        "womencoats",
        "womendresses",
        "womentraditionals",
    ],
    2: [
        "mentshirts",
        "menbottomwear",
        "mencoats",
        "menshirts",
        "mentraditionals",
    ],
    3: [
        "childrentops",
        "childrenbottomwear",
        "childrencoats",
        "childrentraditionals",
        "childrendresses",
    ],
    4: ["allheels", "allcrocs", "allslippers", "allshoes", "allboots"],
    5: ["allrings", "allbracelets", "allbags", "allnecklaces", "allearings"],
};

const subcategoryImages = {
    womentops: womentops,
    childrentops: childrentops,
    womenbottomwear: womenbottomwear,
    menbottomwear: menbottomwear,
    childrenbottomwear: childrenbottomwear,
    womencoats: womencoats,
    mencoats: mencoats,
    childrencoats: childrencoats,
    womendresses: womendresses,
    childrendresses: childrendresses,
    womentraditionals: womentraditionals,
    mentraditionals: mentraditionals,
    childrentraditionals: childrentraditionals,
    mentshirts: mentshirts,
    menshirts: menshirts,
    allheels: allheels,
    allcrocs: allcrocs,
    allslippers: allslippers,
    allshoes: allshoes,
    allboots: allboots,
    allrings: allrings,
    allbracelets: allbracelets,
    allbags: allbags,
    allnecklaces: allnecklaces,
    allearings: allearings,
};

function capitalizeEachWord(str) {
    const wordsToRemove = ["women", "men", "children", "all"];

    const regex = new RegExp(wordsToRemove.join("|"), "gi");
    let separatedWords = str.replace(regex, (matchedWord) => matchedWord + " ");
    separatedWords = separatedWords.replace(/\b\w/g, (char) =>
        char.toUpperCase()
    );
    return separatedWords;
}

function Subcategory() {
    const { id, subcat } = useParams();
    console.log(id, subcat);

    // Get the subcategories for the selected category ID
    const categorySubcategories = subcategories[id];

    return (
        <>
            <div style={{ padding: "20px", marginLeft: "100px" }}>
                <h1>Choose Your Style</h1>
                <Box
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: "94%",
                        justifyContent: "space-around",
                    }}
                >
                    {/* Map through subcategories of the selected category and render cards */}
                    {categorySubcategories &&
                        categorySubcategories.map((subcategory, index) => (
                            <Card
                                key={index}
                                sx={{ width: 300, marginBottom: 3 }}
                            >
                                <Link
                                    to={`/products/${id}/${subcategory}`} // Assuming "/products/:categoryId/:subcategory" is your products page route
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }} // Optional styling
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={
                                                subcategoryImages[subcategory]
                                            }
                                            alt={subcategory}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {capitalizeEachWord(
                                                    subcategory
                                                )}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        ))}
                </Box>
            </div>
            <Footer />
        </>
    );
}

export default Subcategory;
