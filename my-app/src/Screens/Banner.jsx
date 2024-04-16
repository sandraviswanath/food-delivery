import React, { useState, useEffect } from 'react';
import './Banner.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { FaCaretDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import axios from 'axios';
import HomeCollections from '../components/Card/HomeCollections';
import HomeBannerCard from '../components/Card/HomeBannerCard';

function Banner() {
  const { storeemail } = useParams();

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

 
  // const handleSearchInputChange = (event) => {
  //   const query = event.target.value.toLowerCase();
  //   setSearchQuery(query);
  //   const filtered = restaurants.filter((restaurant) =>
  //     restaurant.subtitle.toLowerCase().includes(query)
  //   );
  //   setFilteredRestaurants(filtered);
  // };





  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/foodlist');
        setFilteredRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, [filteredRestaurants]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Filter restaurants based on search query
    const filtered = filteredRestaurants.filter((restaurant) =>
      restaurant.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchQuery, filteredRestaurants]);

  return (
    <div className="banner-image">
      <Navbar>
        <Container>
          <Navbar.Brand className="food-title" href="#home">
            <Link to="/adminlogin" style={{ textDecoration: 'none' }}>
              Food
            </Link>
          </Navbar.Brand>

          <Nav className="ms-auto banner-nav">
            <Nav.Link className="banner-nav-text" href="#home">
              <Link
                to={`/addrestaurant/${storeemail}`}
                style={{ textDecoration: 'none' }}
                className="banner-nav-text"
              >
                {' '}
                Add Restaurants
              </Link>
            </Nav.Link>
            <Nav.Link className="banner-nav-text" href="#features">
              <Link to="/log" className="banner-nav-text">
                {' '}
                Login
              </Link>
            </Nav.Link>
            <Nav.Link className="banner-nav-text" href="#pricing">
              <Link to="/signup" className="banner-nav-text">
                Sign Up
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="banner-title">
        <div className="header-banner max-width">
          <div className="header-right">
            <div className="header-location-search-container-banner shadow-lg p-3 mb-5 rounded">
              <div className="location-wrapper">
                <div className="location-icon-name">
                  <IoLocationOutline className="absolute-center location-icon" />
                  <div>malappuram</div>
                </div>
                <FaCaretDown className="absolute-center" />
              </div>
              <div className="location-search-seperator-banner"></div>
              <div className="header-searchbar-banner">
                <IoIosSearch className="absolute-center search-icon" />
                <input
                  placeholder="Search for restaurant or a dish"
                  className="search-input-banner"
                  value={searchQuery}
                  onChange={handleInputChange}
                  // onChange={handleSearchInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Display filtered restaurants */}
      {/* <div className="filtered-restaurants">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
           
            <p>{restaurant.title}</p>
           
          </div>
        ))}
      </div> */}


    </div>
  );
}

export default Banner;
