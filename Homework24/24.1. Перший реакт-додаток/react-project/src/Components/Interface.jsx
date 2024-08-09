import React, { useState, useEffect } from "react";
import FetchStarCharacter from "./fetchStarCharacter";

function Interface() {
   const [data, setData] = useState(null);
   const [films, setFilms] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const result = await FetchStarCharacter();
         setData(result);

         // Загрузка названий фильмов
         if (result && result.films) {
            const filmTitles = await Promise.all(
               result.films.map(async (film) => {
                  const response = await fetch(film);
                  const data = await response.json();
                  return data.title;
               })
            );
            setFilms(filmTitles);
         }
      }

      fetchData();
   }, []);

   return (
      <>
         <div className="card mb-3" style={{ maxWidth: "540px", marginRight: '20px' }}>
            <div className="text-center" style={{ fontSize: '20px', fontWeight: 'bold' }}>With logic</div>
            <img
               src="https://s.yimg.com/ny/api/res/1.2/W4bkbrlk4HVVctqJSL1Erg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM3Mw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f2a3e4666b816d95e07e087c085320ef"
               className="card-img-top img-fluid"
               alt="..."
            />
            <div className="card-body">
               <h5 className="card-title">{data ? data.name : "Loading"}</h5>
               <h3 className="fw-bold">Films with this person:</h3>
               <p className="card-text">
                  {films.length > 0 ? (
                     films.map((film, index) => (
                        <div key={index}> - {film}</div>
                     ))
                  ) : (
                     <div>Loading films...</div>
                  )}
               </p>
               <h3 className="fw-bold">Biografiya:</h3>
               <p className="card-text">
                  {data ? `When he born: ${data.birth_year}` : "Does not exist"}
               </p>
               <p className="card-text">
                  {data ? `Hair color: ${data.hair_color}` : "Does not exist"}
               </p>
               <p className="card-text">
                  {data ? `Eyes color: ${data.eye_color}` : "Does not exist"}
               </p>
               <p className="card-text">
                  {data ? `Gender: ${data.gender}` : "Does not exist"}
               </p>
               <p className="card-text">
                  {data ? `Mass: ${data.mass} kg` : "Does not exist"}
               </p>


            </div>
         </div>
      </>
   );
}

export default Interface;
