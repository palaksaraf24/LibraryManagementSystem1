const API_URL = "http://127.0.0.1:5000";

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    fetch(`${API_URL}/add-book`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, author })
    })
    .then(response => response.json())
    .then(() => {
        fetchBooks();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
    });
}

function fetchBooks() {
    fetch(`${API_URL}/books`)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("bookList");
            list.innerHTML = "";
            data.forEach(book => {
                const li = document.createElement("li");
                li.textContent = `${book.title} by ${book.author}`;
                list.appendChild(li);
            });
        });
}

fetchBooks();
