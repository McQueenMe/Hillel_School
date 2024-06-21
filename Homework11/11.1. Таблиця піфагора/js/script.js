document.addEventListener('DOMContentLoaded', () => {
   const tableContainer = document.getElementById('table-container');

   const table = document.createElement('table');

   for (let i = 0; i <= 10; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j <= 10; j++) {
         let cell;
         if (i === 0 && j === 0) {
            cell = document.createElement('th');
            cell.innerText = '';
         } else if (i === 0) {
            cell = document.createElement('th');
            cell.innerText = j;
         } else if (j === 0) {
            cell = document.createElement('th');
            cell.innerText = i;
         } else {
            cell = document.createElement('td');
            cell.innerText = i * j;
         }
         tr.appendChild(cell);
      }
      table.appendChild(tr);
   }

   tableContainer.appendChild(table);
});
