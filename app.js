jsonURL = 'https://jsonplaceholder.typicode.com'
usersTable = document.getElementById('userTable');
getUserButton = document.getElementById('getUsers');
let users = []

const getUsers = async() => {
  const endpoint = '/users'
  const urlToFetch = `${jsonURL}${endpoint}`
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();

      for (let i = 0; i < jsonResponse.length; i++) {

        var newRow = document.createElement("tr");
        var newCell = document.createElement("td");
        newCell.innerHTML = jsonResponse[i].name;
          newRow.append(newCell);
        document.getElementById("userTable").innerHTML(newRow)
      }
    }
    
  } catch(error) {
    console.log(error)
  }
}

getUserButton.addEventListener('click', event => { 
  getUsers();
})

