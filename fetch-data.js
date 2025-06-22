
// Step 1: Define async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data from the API
        const response = await fetch(apiUrl);

        // Step 5: Convert the response to JSON
        const users = await response.json();

        // Step 6: Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Step 7: Create a <ul> to hold the user names
        const userList = document.createElement('ul');

        // Step 8: Loop through the users and create <li> for each
        users.forEach(function(user) {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 9: Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 10: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 11: Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
