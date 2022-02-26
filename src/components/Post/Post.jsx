import React, { useState, useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import './Post.css';
const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useContext(AuthContext);
  const date = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleDiarySubmit = (e) => {
    e.preventDefault();
    const postData = async (url = '', data = {}) => {
      try {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${user.accessToken}`);
        myHeaders.append('Content-Type', 'application/json');

        let res = await fetch(url, {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data),
        });
        const resJson = await res.json();
        if (resJson.Status === 'Success') {
          setContent('');
          setTitle('');
        } else throw new Error(resJson);
      } catch (err) {
        console.log(err);
      }
    };

    postData('https://mental-diaries.herokuapp.com/api/diary/entry/', {
      username: user.username,
      entry: content,
      entry_title: title,
    });
  };
  return (
    <div className="diary__content">
      <div className="heading__container">
        <h1 className="primary__heading">Hi, {user ? user.username : null}</h1>
        <h1 className="primary__heading">{date}</h1>
      </div>
      <form className="input__container" onSubmit={handleDiarySubmit}>
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
