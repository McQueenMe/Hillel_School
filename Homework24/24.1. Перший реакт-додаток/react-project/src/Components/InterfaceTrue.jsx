import React from "react";

function InterfaceTrue() {
   // Статические данные для демонстрации интерфейса
   const data = {
      name: "Luke Skywalker",
      birth_year: "19BBY",
      hair_color: "Blond",
      eye_color: "Blue",
      gender: "Male",
      mass: "77",
      films: [
         "A New Hope",
         "The Empire Strikes Back",
         "Return of the Jedi",
         "Revenge of the Sith"
      ]
   };

   return (
      <>
         <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="text-center" style={{ fontSize: '20px', fontWeight: 'bold' }}>Without logic</div>
            <img
               src="https://s.yimg.com/ny/api/res/1.2/W4bkbrlk4HVVctqJSL1Erg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM3Mw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f2a3e4666b816d95e07e087c085320ef"
               className="card-img-top img-fluid"
               alt="..."
            />
            <div className="card-body">
               <h5 className="card-title">{data.name}</h5>
               <h3 className="fw-bold">Films with this person:</h3>
               <p className="card-text">
                  {data.films.map((film, index) => (
                     <div key={index}> - {film}</div>
                  ))}
               </p>
               <h3 className="fw-bold">Biografiya:</h3>
               <p className="card-text">When he born: {data.birth_year}</p>
               <p className="card-text">Hair color: {data.hair_color}</p>
               <p className="card-text">Eyes color: {data.eye_color}</p>
               <p className="card-text">Gender: {data.gender}</p>
               <p className="card-text">Mass: {data.mass} kg</p>
            </div>
         </div>
      </>
   );
}

export default InterfaceTrue;
