import React from 'react';

function NewArticle() {
  return (
    <form>
      <div className="area">
        <label htmlFor="title-post">Title:</label>
        <input
          type="text"
          id="title-post"
          placeholder="Enter a 1-paragraph"
        />
      </div>

      <div className="area" id="articleForm">
        <label htmlFor="abstractText">Abstract:</label>
        <br />
        <textarea
          rows={5}
          cols={50}
          id="abstractText"
          placeholder="Enter your abstract here"
        ></textarea>
      </div>

      <div className="area" id="articleForm">
        <label htmlFor="articleText">Describe your problem:</label>
        <br />
        <textarea
          rows={10}
          cols={50}
          id="articleText"
          placeholder="Describe your article here"
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
        <button id="button-post" className="primary" type="submit">
          Post
        </button>
      </div>
    </form>
  );
}

export default NewArticle;