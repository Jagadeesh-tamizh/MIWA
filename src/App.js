import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import ImageGenerationForm from "./components/Dalle";
import ImageToTextConverter from "./components/Tesseract";
import HomePage from "./components/Home";
import { Chatgpt } from "./components/Chatgpt";
import Crypto from "./components/Crypto-track/Crypto";
import News from "./components/news/News";
import Exchange from "./components/exchange/Exchange";
import Stock from "./components/stocks/Stocks";
import StockList from "./components/stocks/StockList";

const App = () => {
  return (
    <>
      <div className="home-container">
        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/image-generation">Image Generation</Link>
          <Link to="/text-to-image">Image to Text Generation</Link>
          <Link to="/gpt">GPT</Link>
          <Link to="/crypto">Crypto</Link>
          <Link to="/news">News</Link>
          <Link to="/exchange">exchange</Link>
          {/* <Link to="/stocks">stocks</Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/image-generation" element={<ImageGenerationForm />} />
          <Route path="/text-to-image" element={<ImageToTextConverter />} />
          <Route path="/gpt" element={<Chatgpt />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/news" element={<News />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
