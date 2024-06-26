// TODO: Create a variable that selects the main element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts


function loadPosts() {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postContainer = document.createElement('div');
        postContainer.className = 'post';

        const postTitle = document.createElement('h3');
        postTitle.innerText = post.title;
        postContainer.appendChild(postTitle);

        const postContent = document.createElement('p');
        postContent.innerText = post.content;
        postContainer.appendChild(postContent);

        const postUsername = document.createElement('p');
        postUsername.className = 'username';
        postUsername.innerText = `Posted by: ${post.username} on ${new Date(post.timestamp).toLocaleString()}`;
        postContainer.appendChild(postUsername);

        postsContainer.appendChild(postContainer);
    });
}

window.onload = loadPosts;