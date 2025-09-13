// Add event listener to login form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // TO DO: implement login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  });