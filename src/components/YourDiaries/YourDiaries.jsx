import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import './YourDiaries.css';
const dummyData = [
  {
    id: 1,
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt at ea assumenda. Inventore, eius, iure at numquam eveniet nesciunt excepturi alias non quaerat sequi aliquid culpa?',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis quos cupiditate vero dolores ad, dolorum dignissimos aperiam! Iusto repudiandae nulla incidunt similique quia, voluptatum reiciendis quas tenetur praesentium amet eligendi unde animi ipsum ex laboriosam. Facilis ipsam quod laborum praesentium totam sunt in iusto. Fugit aperiam temporibus natus ad?',
    status: 'Depressed',
    date: new Date().toISOString(),
    color: '#eb4f17',
  },
  {
    id: 2,
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt at ea assumenda. Inventore, eius, iure at numquam eveniet nesciunt excepturi alias non quaerat sequi aliquid culpa?',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis quos cupiditate vero dolores ad, dolorum dignissimos aperiam! Iusto repudiandae nulla incidunt similique quia, voluptatum reiciendis quas tenetur praesentium amet eligendi unde animi ipsum ex laboriosam. Facilis ipsam quod laborum praesentium totam sunt in iusto. Fugit aperiam temporibus natus ad?',
    status: 'Depressed',
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
    status: 'Cheerfull',
    color: '#1de9b6',
  },
];

const headings = ['Title', 'Content', 'Written Date', 'Status'];

const YourDiaries = () => {
  const { user } = useContext(AuthContext);
  const [allDiaries, setAllDiaries] = useState([]);
  const handleRowClick = (id) => {
    console.log(id);
  };
  useEffect(() => {
    if (!user) return;

    // NOTE: User is there meaning, both tokens are in the user context
    // fetch
    const postData = async (url = '', data = {}) => {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${user.accessToken}`);

      const requestOptions = {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: myHeaders,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      };
      let res = await fetch(url, requestOptions);
      return response.json();
    };

    postData('https://example.com/answer')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => err.message);
  }, [user]);
  return (
    <div className="diary__table">
      <div className="diary__table--row table__heading">
        {headings.map((heading, index) => (
          <div className="diary__table--cell " key={index}>
            {heading}
          </div>
        ))}
      </div>
      {dummyData.map((row, index) => (
        <div
          className="diary__table--row"
          key={index}
          onClick={(e) => {
            handleRowClick(row.id);
          }}
        >
          <div className="diary__table--cell cell__title">
            {row.title.slice(1, 40)}
          </div>
          <div className="diary__table--cell">{row.content.slice(1, 100)}</div>
          <div className="diary__table--cell">{row.date}</div>

          <div className="diary__table--cell" style={{ color: row.color }}>
            {row.status === 'Depressed' ? (
              <span class="material-icons">sentiment_dissatisfied</span>
            ) : (
              <span className="material-icons">sentiment_very_satisfied</span>
            )}

            <span>{row.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourDiaries;
