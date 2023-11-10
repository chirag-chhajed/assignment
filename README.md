# Assignment for BIGFINANCE TECHNOLOGIES for Backend Internship

## Ways to use the API in your local environment

### 1. Using Docker

- Install Docker in your local environment
- Clone the repository
- Navigate to the cloned repository
- Open the terminal and run the following commands

```sh
docker build -t assignment .
```

```sh
docker run --rm -p 3000:3000 assignment
```

- Open Postman or your preferred API platform and go to <http://localhost:3000>

### 2. Using Node

- Install Node (>18) in your local environment
- Clone the repository
- Navigate to the cloned repository
- Open the terminal and run the following commands

```sh
npm install
```

```sh
npm run build && npm start
```

- Open Postman or your preferred API platform and go to <http://localhost:3000>

## API Endpoints

### 1. POST /players

- This endpoint is used to add a new player to the inmemory database.
- The body should contain the following fields

```json
{
  "name": "string",
  "country": "string (2 letter country code)",
  "score": "number (integer)",
}
```

- The response will be the newly created player object

### 2. GET /players

- This endpoint is used to get all the players in descending order in the inmemory database.

### 3. GET /players/:id

- This endpoint is used to get a player with the given id in the inmemory database.

### 4. PUT /players/:id

- This endpoint is used to update a player with the given id in the inmemory database.

- The body should contain the following fields

```json
{
  "name": "string",
  "score": "number (integer)",
}
// Either name or score or both can be updated
```

### 5. DELETE /players/:id

- This endpoint is used to delete a player with the given id in the inmemory database.

### 6. GET /players/random

- This endpoint is used to get a random player in the inmemory database.

### 7. GET  /players/rank/:val

- This endpoint is used to get the players with the given score in the inmemory database.

| METHOD | ENDPOINT           | DESCRIPTION                                                                 | REQUEST BODY | RESPONSE BODY |
| ------ | ------------------ | --------------------------------------------------------------------------- | ------------ | ------------- |
| POST   | /players           | Add a new player to the inmemory database                                   | Player       | Player        |
| GET    | /players           | Get all the players in descending order in the inmemory database            | -            | Player[]      |
| GET    | /players/:id       | Get a player with the given id in the inmemory database                     | -            | Player        |
| PUT    | /players/:id       | Update a player with the given id in the inmemory database                  | Player       | Player        |
| DELETE | /players/:id       | Delete a player with the given id in the inmemory database                  | -            | -             |
| GET    | /players/random    | Get a random player in the inmemory database                                | -            | Player        |
| GET    | /players/rank/:val | Get the players with the given score in the inmemory database               | -            | Player[]      |

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/24462005-f2f8011a-7c60-4d44-8921-0a0e4e27ec0f?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D24462005-f2f8011a-7c60-4d44-8921-0a0e4e27ec0f%26entityType%3Dcollection%26workspaceId%3De36aa452-f11f-49fa-83c3-b00ae0bb8f52)
