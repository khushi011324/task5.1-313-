import React, { useState } from 'react';
import Options from './NewOptions';
import Question from './NewQuestion';
import Article from './NewArticle';
import './App.css';

function App() {
  const [postType, setPostType] = useState('question'); // Default post type is 'question'

  const handlePostTypeChange = (newPostType) => {
    setPostType(newPostType);
  };

  return (
    <div className="App">
      <Options onPostTypeChange={handlePostTypeChange} />
      <div className="content">
        {postType === 'question' ? <Question /> : <Article />}
      </div>
    </div>
  );
}

export default App;