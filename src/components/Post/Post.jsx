import React, { useState } from 'react';
import './Post.css';
const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const date = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleDiarySubmit = (e) => {
    e.preventDefault();
    const postData = async (url = '', data = {}) => {
      let res = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
      return response.json();
    };

    postData('https://example.com/answer', {
      title,
      content,
    })
      .then((data) => {
        setContent('');
        setTitle('');
        console.log(data);
      })
      .catch((err) => err.message);
    console.log(title, content);
  };
  return (
    <div className="diary__content">
      <div className="heading__container">
        <h1 className="primary__heading">{date}</h1>
      </div>
      <form className="input__container">
        <input
          value={title}
          className="input__title"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="input__diary"
          role="textbox"
          placeholder="Write something....."
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button
          className="input__button"
          type="submit"
          onClick={handleDiarySubmit}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
