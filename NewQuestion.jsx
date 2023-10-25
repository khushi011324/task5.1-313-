import React from 'react';

function NewQuestions() {
  return (
    <form>
      <div className="subhead">
        <h2>What do you want to ask or share</h2>
      </div>

      <div className="area">
        <label htmlFor="title-post">Title:</label>
        <input
          type="text"
          id="title-post"
          placeholder="Start your question with how, what, why, etc."
        />
      </div>

      <div className="area" id="questionForm">
        <label htmlFor="questionText">Describe your problem:</label>
        <br />
        <textarea
          rows={10}
          cols={50}
          id="questionText"
          placeholder="Describe your question here"
        ></textarea>
      </div>

      <div className="area_footer">
        <label htmlFor="tags-post">Tags:</label>
        <input
          type="text"
          id="tags-post"
          placeholder="Please add up to 3 tags (e.g., Java)"
        />
      </div>

      <div className="button">
        <button id="button-post" type="submit">
          Post
        </button>
      </div>
    </form>
  );
}

export default NewQuestions;