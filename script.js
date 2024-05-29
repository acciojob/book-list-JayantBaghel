document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');

    bookForm.addEventListener('submit', addBook);

    function addBook(event) {
        event.preventDefault();

        // Get form values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        // Create new row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Clear</button></td>
        `;

        // Append row to table
        bookList.appendChild(row);

        // Clear form fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    // Event delegation for delete button
    bookList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.parentElement.remove();
        }
    });
});
