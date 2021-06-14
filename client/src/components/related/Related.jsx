import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx';
import YourOutfit from './YourOutfit.jsx';

export default function Related() {
  const [current, setCurrent] = useState(25167);
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);

  const addToOutfit = () => {
    if (!outfit.includes(current)) {
      setOutfit(outfit.push(current));
    }
  };

  useEffect(() => {
    const storedOutfit = JSON.parse(localStorage.getItem('outfit'));
    (storedOutfit ? setOutfit(storedOutfit) : null);
  }, []);

  useEffect(() => {
    axios.get(`/products/${current}`)
      .then((response) => {
        setCurrent(response.data);
      });
    axios.get(`/products/${current}/related`)
      .then((response) => {
        setRelated(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <List current={current} related={related} />
      <YourOutfit current={current} outfit={outfit} addToOutfit={addToOutfit} />
    </>
  );
}
