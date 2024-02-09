import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch student data from API
    axios.get('https://api.example.com/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures effect runs only once

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search by name" onChange={handleSearch} />
      {filteredStudents.map((student, index) => (
        <div key={index}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Grade: {student.grade}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchList;