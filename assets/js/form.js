// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.


function submitPost() {
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (username && title && content) {
      const post = {
          username: username,
          title: title,
          content: content,
          timestamp: new Date().toISOString()
      };

      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(post);
      
      localStorage.setItem('posts', JSON.stringify(posts));

      // Clear the form
      document.getElementById('username').value = '';
      document.getElementById('title').value = '';
      document.getElementById('content').value = '';

      // Redirect to posts page
      let redirectURL = '';
      const redirectPage = function (url) {
       
        redirectURL = url;
       location.assign(url);
};
  } else {
      alert('Please fill out all fields');
  }
}


// Dark mode toggle

function toggleMode() {
  document.body.classList.toggle('dark');
}

// Event listeners
document.getElementById('submit-post').addEventListener('click', submitPost);

