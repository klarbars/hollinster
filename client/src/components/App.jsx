// imports the react module installed in node_modules
import React, { useState } from 'react';
// import axios from 'axios';
// import Overview from './overview/Overview.jsx';
// import Reviews from './ratings-reviews/Reviews.jsx';
// import Related from './related/Related.jsx'

const App = (props) => {
  const [test, setTest] = useState(true);

  return (
    <>
      <h1 style={{ fontFamily: 'Staatliches' }}>HOLLINSTER established 1991</h1>
      <button onClick={() => {setTest(!test)}}>{test.toString()}</button>
      {/* <Overview /> */}
      {/* <Related /> */}
      {/* <Reviews /> */}
    </>
  );
};

export default App;
