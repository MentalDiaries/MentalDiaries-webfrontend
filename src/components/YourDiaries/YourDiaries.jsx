import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import './YourDiaries.css';
const dummyData = [
  {
    id: 1,
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt at ea assumenda. Inventore, eius, iure at numquam eveniet nesciunt excepturi alias non quaerat sequi aliquid culpa?',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis quos cupiditate vero dolores ad, dolorum dignissimos aperiam! Iusto repudiandae nulla incidunt similique quia, voluptatum reiciendis quas tenetur praesentium amet eligendi unde animi ipsum ex laboriosam. Facilis ipsam quod laborum praesentium totam sunt in iusto. Fugit aperiam temporibus natus ad?',
    status: 'suicide',
    date: new Date().toISOString(),
    color: '#eb4f17',
  },
  {
    id: 2,
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt at ea assumenda. Inventore, eius, iure at numquam eveniet nesciunt excepturi alias non quaerat sequi aliquid culpa?',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis quos cupiditate vero dolores ad, dolorum dignissimos aperiam! Iusto repudiandae nulla incidunt similique quia, voluptatum reiciendis quas tenetur praesentium amet eligendi unde animi ipsum ex laboriosam. Facilis ipsam quod laborum praesentium totam sunt in iusto. Fugit aperiam temporibus natus ad?',
    status: 'suicide',
    date: new Date().toISOString(),
    color: '#eb4f17',
  },
  {
    id: 3,
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt at ea assumenda. Inventore, eius, iure at numquam eveniet nesciunt excepturi alias non quaerat sequi aliquid culpa?',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis quos cupiditate vero dolores ad, dolorum dignissimos aperiam! Iusto repudiandae nulla incidunt similique quia, voluptatum reiciendis quas tenetur praesentium amet eligendi unde animi ipsum ex laboriosam. Facilis ipsam quod laborum praesentium totam sunt in iusto. Fugit aperiam temporibus natus ad?',
    date: new Date().toISOString(),
    status: 'no suicide',
    color: '#1de9b6',
  },
];

const headings = ['Title', 'Content', 'Written Date', 'Status'];

const YourDiaries = () => {
  const { user, allDiaries, setAllDiaries } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    console.log(id);
    navigate(`/your-diaries/${id}`);
  };
  useEffect(() => {
    // Guard clause
    if (!user) return;

    // NOTE: User is there meaning, both tokens are in the user context
    // fetch
    const getData = async (url = '') => {
      try {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${user.accessToken}`);

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        };
        let res = await fetch(url, requestOptions);
        const resJson = await res.json();
        if (resJson.code === 'token_not_valid') throw new Error(resJson.code);

        // If resJson is successful
        console.log(resJson);
        setAllDiaries(resJson);
      } catch (err) {
        console.log(err);
      }
    };
    getData(
      `https://mental-diaries.herokuapp.com/api/diary/entry/?username=${user.username}`
    );
  }, []);
  return (
    <div className="diary__table">
      <div className="diary__table--row table__heading">
        {headings.map((heading, index) => (
          <div className="diary__table--cell " key={index}>
            {heading}
          </div>
        ))}
      </div>
      {allDiaries &&
        allDiaries.map((row, index) => (
          <div
            className="diary__table--row"
            key={index}
            onClick={(e) => {
              handleRowClick(row.entry_id);
            }}
          >
            <div className="diary__table--cell cell__title">
              {row.entry_title[0].toUpperCase() + row.entry_title.slice(1)}
            </div>
            <div className="diary__table--cell">
              {row.entry.slice(0, 100)} ...
            </div>
            <div className="diary__table--cell">
              {new Date(row.entry_date_time).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>

            <div className="diary__table--cell" style={{ color: '#22c55e' }}>
              <span className="material-icons" style={{ fontSize: '3rem' }}>
                sentiment_very_satisfied
              </span>
              {/* {row.status === 'suicide' ? (
                <span className="material-icons">sentiment_dissatisfied</span>
              ) : (
              )} */}

              <span>{row.status}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default YourDiaries;
