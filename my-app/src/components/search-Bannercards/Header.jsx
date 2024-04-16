import React, { useState } from 'react'
import './Header.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { IoSearch } from "react-icons/io5";
// function Header({ handleSearchInputChange }) {
  function Header({handleSearchInputChange}) {

  return (
    <div className='header max-width'>
    <div className='header-right'>
       <div className='header-location-search-container shadow-lg p-3 mb-5 bg-white rounded'>
             <div className='location-wrapper'>
                <div className='location-icon-name'>
                <IoLocationOutline className='absolute-center location-icon'/>
                <div>malappuram
                  {/* <input type="text" placeholder='kochi,thrissur,plakad' value={searchQuery} onChange={handleinputchange}/> */}
                </div>
               
                {/* <select>
                  <option value="palakad">Palakad</option>
                  <option value="">thrissur</option>
                </select> */}
                </div>
                <FaCaretDown className='absolute-center'/>
             </div>
             <div className='location-search-seperator'></div>
             <div className='header-searchbar'>
             <IoIosSearch className='absolute-center search-icon'/>
             <input placeholder='Search for restaurant or a dish' className='search-input' onChange={handleSearchInputChange}/>
             </div>
         </div>
    </div>
    </div>
   
  )
}

export default Header




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Header = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       try {
//         if (query.trim() !== '') {
//           // const response = await axios.get(`http://localhost:5000/food/search?q=${query}`);
//           // setResults(response.data);
//         } else {
//           setResults([]);
//         }
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       }
//     };

//     fetchResults();
//   }, [query]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for restaurant or a dish"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <ul>
//         {results.map((result) => (
//           <li key={result._id}>
//             <p>Name: {result.name}</p>
//             <p>Location: {result.location}</p>
//             {/* Display other relevant fields */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Header;


