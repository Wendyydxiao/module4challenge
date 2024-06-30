// Create a variable that selects the main element
document.addEventListener('DOMContentLoaded', function() {
   const mainContent = document.getElementById('main-content');

// Create a function that builds an element and appends it to the DOM

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post-card');

    const postTitle = document.createElement('h3');
    postTitle.textContent = post.title;
    postElement.appendChild(postTitle);

    const postContent = document.createElement('p');
    postContent.textContent = post.content;
    postElement.appendChild(postContent);

    const postAuthor = document.createElement('span');
    postAuthor.textContent = `Posted by: ${post.username}`;
    postElement.appendChild(postAuthor);

    const postTimestamp = document.createElement('span');
    postTimestamp.classList.add('timestamp');
    postTimestamp.textContent = post.timestamp;
    postElement.appendChild(postTimestamp);

    return postElement;
}
// Create a function that handles the case where there are no blog posts to display
function handleNoPosts() {
    const noPostsMessage = document.createElement('p');
    noPostsMessage.textContent = 'No posts available, please hit BACK button to create a new post.';
    mainContent.appendChild(noPostsMessage);
}
// Create a function that reads from local storage and returns the data
function getPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}
// Call the function to render the list of blog posts
function renderPosts() {
    const posts = getPostsFromLocalStorage();

    if (posts.length === 0) {
        handleNoPosts();
        return;
    }

    posts.forEach(post => {
        const postElement = createPostElement(post);
        mainContent.appendChild(postElement);
    });
}

renderPosts();

});