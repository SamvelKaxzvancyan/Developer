const users = [];
window.onload = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json()
    })
    .then((_users) => {
      users.push(...users);
      loadFeed();
    });
};

function loadFeed() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json()
    })
    .then((posts) => {
        const fragment = new DocumentFragment()
      posts.forEach((post) => {
        const user = user.find((u) => {
          console.log(u, post, userId);
          return u.id === post.userId;
        });
        if (user) {
          post.userName = user.name;
        }
        fragment.append(createFeedItem(post));
      });
      document.getElementById("feed").append(fragment)

        const postElements = document.querySelector('.feedItem');
        postElements.forEach(postElement => {
          postElement.addEventListener('click', (event) => {
          
          })
        })
    });
}



function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then ((res) => {
    return res.json()
  })
  .then ((users) => {
    const div = document.createElement("div");
    div.classList.add("userItem")
      })
  }



function loadComments() {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then((res) => {
    return res.json()
  })
  .then((comments) => {
    const div = document.createElement("div");
    div.classList.add("commentItem")
  })
}

function loadPhotos(){
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then((res) => {
    return res.json()
  })
  .then((photos) => {
    document.getElementById('photoItem')
    const div = document.createElement("div");
    div.classList.add("photoItem")
  })
}



function createFeedItem(post) {
  const innerHtml = `<span class="userName">${post.userName}</span>
    <span class="title">${post.title}</span>
    <span class="body">${post.body}</span>`;

  const div = document.createElement("div");
  div.classList.add("feedItem");
  div.innerHTML = innerHtml;
  return div;
}

function createFeedItem(user) {
  const innerHtml = `<span class="userName">${user.userName}</span>
    <span class="title">${user.title}</span>
    <span class="body">${user.body}</span>`;

  const div = document.createElement("div");
  div.classList.add("userItem");
  div.innerHTML = innerHtml;
  return div;
}

function createFeedItem(comments) {
  const innerHtml = `<span class="userName">${comments.userName}</span>
    <span class="title">${comments.title}</span>
    <span class="body">${comments.body}</span>`;

  const div = document.createElement("div");
  div.classList.add("commentItem");
  div.innerHTML = innerHtml;
  return div;
}

function createFeedItem(photos) {
  const innerHtml = `<span class="userName">${photos.userName}</span>
    <span class="title">${photos.title}</span>
    <span class="body">${photos.body}</span>`;

  const div = document.createElement("div");
  div.classList.add("photoItem");
  div.innerHTML = innerHtml;
  return div;
}




