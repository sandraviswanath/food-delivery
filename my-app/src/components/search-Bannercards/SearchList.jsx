import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CardCollection from "./CardCollection";
import "./CollectionCard.css";
import Header from "./Header";
import NavBar2 from "../NavBar2";
import Home2 from "../../Screens/Home2";

function SearchList() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:5000/foodlist");
        setRestaurants(response.data);
        setFilteredRestaurants(response.data); // Initialize filtered list with all restaurants
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = restaurants.filter((restaurant) =>
      restaurant.subtitle.toLowerCase().includes(query)
    );
    setFilteredRestaurants(filtered);
  };

  return (
   
    <div className="max-width explore-section">
  
      <div className="collection-title"></div>
      <Header handleSearchInputChange={handleSearchInputChange} />
      <div className="explore-grid">
        {filteredRestaurants.map((restaurant) => (
          <CardCollection key={restaurant.email} display={restaurant} />
        ))}
      </div>
    </div>
   
  );
}

export default SearchList;
