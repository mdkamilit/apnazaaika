import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Recipe from './components/Recipe'

function App() {
  const [search, setSerach] = useState("chiken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "0fc42a08";
  const APP_KEY = "d797e3b6ee8e8f8fe2ede801abd6ac86";
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipe recipes={recipes} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
