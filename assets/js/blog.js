// Create a variable that selects the main element
const mainElement = document.querySelector('main');

// Create a function that builds an element and appends it to the DOM

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    const titleElement = document.createElement('h3');
    titleElement.textContent = post.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    const authorElement = document.createElement('p');
    authorElement.textContent = `Posted by: ${post.username}`;

    const dateElement = document.createElement('p');
    dateElement.className = 'timestamp';
    dateElement.textContent = new Date(post.timestamp).toLocaleString();

    postElement.appendChild(titleElement);
    postElement.appendChild(authorElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(dateElement);

    mainElement.appendChild(postElement);
}
// Create a function that handles the case where there are no blog posts to display
function displayNoPostsMessage() {
    const messageElement = document.createElement('p');
    messageElement.textContent = 'No blog posts available. Please create a new post.';
    mainElement.appendChild(messageElement);
}
// Create a function that reads from local storage and returns the data
function getPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}
// Call the function to render the list of blog posts
function renderPosts() {
    const posts = getPostsFromLocalStorage();
    if (posts.length === 0) {
        displayNoPostsMessage();
    } else {
        posts.forEach(createPostElement);
    }
}

renderPosts();

// function loadPosts() {
//     let posts = JSON.parse(localStorage.getItem('posts')) || [];

//     // Debugging logs
//     console.log('Loaded posts:', posts);

//     const postsContainer = document.getElementById('posts');
//     postsContainer.innerHTML = '';

//     posts.forEach(post => {
//         const postContainer = document.createElement('div');
//         postContainer.className = 'post';

//         const postTitle = document.createElement('h3');
//         postTitle.innerText = post.title;
//         postContainer.appendChild(postTitle);

//         const postContent = document.createElement('p');
//         postContent.innerText = post.content;
//         postContainer.appendChild(postContent);

//         const postUsername = document.createElement('p');
//         postUsername.className = 'username';
//         postUsername.innerText = `Posted by: ${post.username} on ${new Date(post.timestamp).toLocaleString()}`;
//         postContainer.appendChild(postUsername);

//         postsContainer.appendChild(postContainer);
//     });
// }

// window.onload = loadPosts;