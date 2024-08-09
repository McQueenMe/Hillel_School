async function FetchStarCharacter() {
   try {
      const response = await fetch('https://swapi.dev/api/people/1/');
      const data = await response.json();
      console.log(data)
      return data;
   } catch (error) {
      return error;
   }
}


export default FetchStarCharacter