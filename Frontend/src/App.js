import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";

import About from "./Components/About";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Item from "./Components/Item";
import Login from "./Components/Login";
import ModifyProductDetails from "./Components/ModifyProductDetails";
import ModifyUserDetails from "./Components/ModifyUserDetails";
import Navbar from "./Components/Navbar";
import Orders from "./Components/Orders";
import PageNotFound from "./Components/PageNotFound";
import Products from "./Components/Products";
import Profile from "./Components/Profile";
import Sell from "./Components/Sell";
import SellingForm from "./Components/SellingForm";
import Shop from "./Components/Shop";
import Signup from "./Components/Signup";
import Subcategory from "./Components/Subcategory";

const domain = process.env.REACT_APP_BACKEND_DOMAIN;

// Create AppContext
export const AppContext = createContext({
    totalQuantity: 0,
    setTotalQuantity: () => {},
    items: [],
    setItems: () => {},
});

function App() {
    const [message, setMessage] = useState();
    const [totalQuantity, setTotalQuantity] = useState(0); // Total quantity state
    const [items, setItems] = useState([]); // Items state

    //   useEffect(() => {
    //     fetch("http://localhost:8000/message")
    //       .then((res) => res.json())
    //       .then((data) => setMessage(data.home));
    // },[]);

    return (
        <BrowserRouter>
            {/* Provide AppContext to all children */}
            <AppContext.Provider
                value={{
                    totalQuantity,
                    setTotalQuantity,
                    items,
                    setItems,
                }}
            >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} index />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/products/:category/:subcat"
                        element={<Products />}
                    />
                    <Route path="/sell" element={<Sell />} />
                    <Route path="/selling-form" element={<SellingForm />} />
                    <Route path="/subcategory/:id" element={<Subcategory />} />
                    <Route path="/item/:id" element={<Item />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/my-orders" element={<Orders />} />
                    <Route
                        path="/modify-user-details"
                        element={<ModifyUserDetails />}
                    />
                    <Route
                        path="/modify-product-details"
                        element={<ModifyProductDetails />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </AppContext.Provider>
        </BrowserRouter>
    );
}

export default App;
