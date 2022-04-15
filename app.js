//  define multiple use variables
jsonURL = 'https://jsonplaceholder.typicode.com'
usersTable = document.getElementById('userTable');
getUserButton = document.getElementById('getUsers');
postSection = document.getElementById('userPosts')


// API CALLS
// get users
const getUsers = async () => {
  const endpoint = '/users'
  const urlToFetch = `${jsonURL}${endpoint}`

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {

      const jsonResponse = await response.json();


      for (let i = 0; i < jsonResponse.length; i++) {
        // create a new row and data for each user name
        let newRow = document.createElement("tr");
        let newCell = document.createElement("td");
        newCell.innerHTML = `${jsonResponse[i].name} <button class='postButton' data-key=${jsonResponse[i].id}>view posts</button>`;
        // append the new data to the new row
        newRow.append(newCell);
        // append new row to the table
        userTable.append(newRow)
      }
      getUserButton.disabled = true;
      return jsonResponse
    }

  } catch (error) {
    console.log(error)
  }
}
// get posts
const getPosts = async (key) => {
  const endpoint = `/posts?userId=${key}`
  const urlToFetch = `${jsonURL}${endpoint}`

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json()
      for (let i = 0; i < jsonResponse.length; i++) {
        // create new elements for the dom
        let title = document.createElement('h1')
        let body = document.createElement('p')
        //  add html
        title.innerHTML = jsonResponse[i].title
        body.innerHTML = jsonResponse[i].body
        // append
        title.append(body)
        postSection.append(title)
      }
    }
  } catch(error) {
    console.log(error)
  }
}
// EVENT LISTENERS
// get users button
getUserButton.addEventListener('click', event => {
  getUsers();
})
// add event listener to document 
document.addEventListener('click', event => {
  const element = event.target
  if (element.className == 'postButton') {
    postSection.innerHTML = '';
    getPosts(element.dataset.key)
  }
})
 
