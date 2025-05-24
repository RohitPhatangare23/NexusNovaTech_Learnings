const API_URL = 'https://dummyjson.com/users/';  // API endpoint

// Function to fetch and display user data
async function fetchUserData() {
    const tableBody = document.getElementById('tableRows');

    // Show loading indicator
    tableBody.innerHTML = `<tr><td colspan="4" class="text-center">Loading...</td></tr>`;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        let row='';
        // Clear the table before appending rows
        tableBody.innerHTML = '';

        data.forEach((users) => {
            row =`
            <tr class="text-center">
                    <td>${users.firstName} ${users.lastName}</td>
                    <td>${users.age}</td>
                    <td>${users.email}</td>
                    <td>${users.phone}</td>
                </tr>`;
                tableBody.innerHTML += row;
        });

        // data.users.forEach(user => {
        //     const row = `
        //         <tr class="text-center">
        //             <td>${user.firstName} ${user.lastName}</td>
        //             <td>${user.age}</td>
        //             <td>${user.email}</td>
        //             <td>${user.phone}</td>
        //         </tr>
        //     `;
        //     tableBody.innerHTML += row;
        // });

    } catch (error) {
        tableBody.innerHTML = `<tr><td colspan="4" class="text-center text-danger">Error: ${error.message}</td></tr>`;
    }
}

// Automatically fetch data on page load
window.onload = fetchUserData;
const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);