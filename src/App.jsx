import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react'

const App = () => {
  const [about, setAbout] = useState([]);
  // const [description, setDescription] = useState([])
  // const [error, setError] = useState(false);

  useEffect(() => {
    // setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get('http://103.123.45.76:9444/api/aboutUs]');
        setAbout(response.data);
        console.log(about.description)
      } catch (error) {
        setError(error);
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {
        about ? (
          <>
            <h3> About Us</h3>
            <p className='content-heading'>{about.content}</p>
            <p className='heading'>{about.heading}</p>
            {about.description ? <p className='objective'>{about.description[0].Objective}</p> : null}
          </>
        )
          :
          (
            <p>error fetching data</p>
          )
      }
    </>
  )
}

export default App;