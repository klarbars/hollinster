import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import ListOfQuestions from './ListOfQuestions.jsx';

const Question = () => {
  return (
    <>
    <Search />
    <ListOfQuestions />
    <span>
      <button onClick={() => console.log('retrieve more questions')}><strong>MORE ANSWERED QUESTIONS</strong></button>
      <button onClick={() => console.log('add a question')}><strong>ADD A QUESTION +</strong></button>
    </span>
    </>
  )
}

export default Question;