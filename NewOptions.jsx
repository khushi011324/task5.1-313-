import React, { useState } from 'react';

function NewOptions({ onPostTypeChange }) {
  const [postType, setPostType] = useState('question');

  const handlePostTypeChange = (e) => {
    const newPostType = e.target.value;
    setPostType(newPostType);
    onPostTypeChange(newPostType);
  };

  return (
    <div>
      <div className="options">
        <div className="head">
          <h2>New Post</h2>
        </div>
        <div className="typer">
          <label>Select post type:</label>
          <input
            type="radio"
            value="question"
            id="question"
            name="type-post"
            checked={postType === 'question'}
            onChange={handlePostTypeChange}
          />
          <label htmlFor="question">Question</label>
          <input
            type="radio"
            value="article"
            id="article"
            name="type-post"
            checked={postType === 'article'}
            onChange={handlePostTypeChange}
          />
          <label htmlFor="article">Article</label>
        </div>
      </div>
    </div>
  );
}

export default NewOptions;