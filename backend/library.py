from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory database
books = []

@app.route("/add-book", methods=["POST"])
def add_book():
    data = request.json
    book = {
        "title": data.get("title"),
        "author": data.get("author")
    }
    books.append(book)
    return jsonify({"message": "Book added successfully"}), 201

@app.route("/books", methods=["GET"])
def get_books():
    return jsonify(books), 200

if __name__ == "__main__":
    app.run(debug=True)
