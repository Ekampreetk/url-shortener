# URL Shortener

A backend service that converts long URLs into short, shareable links — with click tracking and redirect handling.

## Features

- Generate unique 7-character short codes for any URL (via `nanoid`)
- Redirect short links to their original destination
- Per-link click analytics (tracks number of times a short URL is visited)
- MongoDB-backed persistence with unique-index enforcement on short codes
- Centralized error handling with appropriate HTTP status codes

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **ID Generation:** nanoid

## API Endpoints

| Method | Endpoint          | Description                              |
|--------|-------------------|-------------------------------------------|
| POST   | `/shorten`         | Create a short URL from an original URL   |
| GET    | `/:code`           | Redirect to the original URL, increments click count |

### Example Request

```
POST /shorten
Content-Type: application/json

{
  "urlorg": "https://example.com/some/very/long/path"
}
```

### Example Response

```json
{
  "message": "short url created",
  "shorturl": "http://localhost:3000/aB3xY9z",
  "data": {
    "urlorg": "https://example.com/some/very/long/path",
    "urlnew": "aB3xY9z",
    "clicks": 0
  }
}
```

## Project Structure

```
src/
├── app.js                       # Express app setup
├── db/db.js                     # MongoDB connection
├── controllers/url.controller.js # Request handling logic
├── models/url.model.js          # Mongoose schema
└── routes/url.routes.js         # Route definitions
server.js                        # Entry point
```

## Running Locally

```bash
git clone https://github.com/Ekampreetk/url-shortener.git
cd url-shortener
npm install
```

Create a `.env` file in the root with:

```
MONGO_URI=your_mongodb_connection_string
```

Then start the server:

```bash
node server.js
```

Server runs on `http://localhost:3000`.
