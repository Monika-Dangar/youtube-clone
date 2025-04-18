# 🎬 YouTube Clone

A full-stack YouTube clone built with:

- 🔥 Frontend: React + Tailwind CSS
- ⚙️ Backend: Node.js + Express + MongoDB
- 🔐 Auth: JWT-based authentication


### Github link
[GitHub Repository](https://github.com/Monika-Dangar/youtube-clone)

### 📌 API Endpoints

### 🔐 *Auth Routes* (`/api/auth`)

* **POST /api/auth/register**
  * *Description*: Registers a new user with encrypted password.
  * *Middleware*: `encryptPassword`
  * *Body*: `{ username, email, password }`
  * *Response*: New user data or success message.

* **POST /api/auth/login**
  * *Description*: Logs in an existing user with password check.
  * *Middleware*: `decryptPassword`
  * *Body*: `{ email, password }`
  * *Response*: JWT token and user info.

### 📺 *Channel Routes* (`/api/channels`)

* **POST /api/channels**
  * *Description*: Creates a new channel.
  * *Body*: `{ channelName, ownerId, description }`
  * *Response*: Newly created channel data.

* **GET /api/channels/:channelId**
  * *Description*: Retrieves channel information by ID.
  * *Response*: Channel details (name, owner, description, etc).

### 💬 *Comment Routes* (`/api/comments`)

* **GET /api/comments**
  * *Description*: Retrieves all comments for a given video.
  * *Query*: `?videoId=xyz`
  * *Response*: List of comments for the video.

* **POST /api/comments**
  * *Description*: Adds a new comment to a video.
  * *Body*: `{ videoId, userId, text }`
  * *Response*: Created comment data.

* **PUT /api/comments/:id**
  * *Description*: Edits a comment by its ID.
  * *Body*: `{ text }`
  * *Response*: Updated comment.

* **DELETE /api/comments/:id**
  * *Description*: Deletes a comment by its ID.
  * *Response*: Success message.

### 🎥 *Video Routes* (`/api/videos`)

* **GET /api/videos**
  * *Description*: Fetches all videos.
  * *Response*: Array of video objects.

* **GET /api/videos/search**
  * *Description*: Searches videos by title and/or category.
  * *Query*: `?title=react&category=web`
  * *Response*: Filtered list of videos.

* **GET /api/videos/:id**
  * *Description*: Retrieves a video by its ID.
  * *Response*: Video details including metadata.

## Setup Instructions

### Dependencies:
- **express**: For building the API server.
- **mongoose**: For interacting with MongoDB.
- **bcrypt**: For password hashing.
- **jsonwebtoken**: For JWT token-based authentication.
- **dotenv**: For environment variable management.
- **cors**: For enabling Cross-Origin Resource Sharing.

### MongoDB Setup:
- MongoDB is used as the database for storing USER and data. The connection to the database is established using Mongoose in Node.js. **MongoDB Compass** was used to monitor and verify the database state.

## How to Run the Application
- Clone the repository:

If you haven't already, clone the repository to your local machine:

```Copy
git clone https://github.com/Monika-Dangar/youtube-clone.git
```
- Install dependencies:

```Copy
npm install
```

- Start the development server:

```Copy
npm start
```
- This will run server on http://localhost:5000.
```
```
- Start the react server:

```Copy
npm run dev
```