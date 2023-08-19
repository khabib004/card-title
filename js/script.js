let usersRow = document.querySelector( ".users-row" );
let postsRow = document.querySelector( ".posts-row" );

function getData( url, callback ) {
  let xhr = new XMLHttpRequest();

  // console.log(xhr.readyState);

  xhr.onreadystatechange = function () {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
      let resJson = xhr.response;
      let res = JSON.parse( resJson );
      callback?.( res );
    } else if ( xhr.readyState === 4 ) {
      console.log( xhr.statusText );
    }
  };

  xhr.open( "get", url );

  xhr.send();
}

function getUserRow( user ) {
  return `
    <div class="row-title">
      <div class="title-card">
        <mark class="merk">Id: ${user.id}</mark>
        <h3>${user.name}</h3>
        <p>Email: <a href="">${user.email}</a></p>
        <p>website: <a href="">${user.website}</a></p>
        <p>phone: <a href="">${user.phone}</a></p>
        <div class="btn">
          <button><a href="">Todos</a></button>
          <button><a href="">Posts</a></button>
          <button><a href="">Galarey</a></button>
        </div>
      </div>
    </div>
  `;
}

usersRow.innerHTML = "...Loading";

getData( "https://jsonplaceholder.typicode.com/users", ( users ) => {
  usersRow.innerHTML = "";
  users.map( ( user ) => {
    usersRow.innerHTML += getUserRow( user );
  } );
} );

function getPostRow( { id, title, body } ) {
  return `
    <div>
      <mark>Id: ${id}</mark>
      <h3>Title: ${title}</h3>
      <p>Body: ${body}</p>
    </div>
  `;
}