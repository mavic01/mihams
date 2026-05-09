## NestJS Assignment
### Library Book Management API
Objective

Build a simple REST API for managing books in a library using NestJS.

The goal of this assignment is to test your understanding of:

- NestJS project structure
- Controllers
- Services
- HTTP methods
- Request bodies
- Validation
- Error handling
- Arrays and object manipulation
- Scenario

A small digital library wants a backend system to manage books.

Your job is to build an API that allows users to:

- add books
- view books
- update books
- delete books

You are **NOT** expected to use a database yet.
All data should be stored temporarily in an array inside the service.

### Project Requirements
1. Create a NestJS project
```bash
Project name:

library-api
```

2. Create a Module

Create:

- controller
- service
- module

Suggested names:

books

3. Book Structure

Each book should look like this:
```bash
{
  id: number;
  bookName: string;
  author: string;
}

Example:

{
  id: 1,
  bookName: "Atomic Habits",
  author: "James Clear"
}
```

4. Endpoints to Implement
A. Add a Book
### Endpoint
POST /books
Request Body
```json
{
  "bookName": "Atomic Habits",
  "author": "James Clear"
}
```

### Rules

- bookName cannot be empty
- author cannot be empty
- Duplicate books are not allowed
- IDs should auto-increment

```json
Success Response

{
  "success": true,
  "message": "Book added successfully",
  "data": {
    "id": 1,
    "bookName": "Atomic Habits",
    "author": "James Clear"
  }
}

Error Response
{
  "success": false,
  "error": "Book already exists"
}
```

B. Get All Books
### Endpoint
GET /books
```json
Expected Response
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "bookName": "Atomic Habits",
      "author": "James Clear"
    },
    {
      "id": 2,
      "bookName": "Deep Work",
      "author": "Cal Newport"
    }
  ]
}
```

C. Get One Book
### Endpoint
GET /books/:id

Example:

GET /books/1
### Rules
> Return an error if the book does not exist

D. Update a Book
### Endpoint
PATCH /books/:id
Request Body

```json
{
  "bookName": "Deep Work",
  "author": "Cal Newport"
}
```

### Rules
- Book must exist before updating
- Empty values are not allowed

E. Delete a Book
### Endpoint
DELETE /books/:id

**Rules**
- Return an error if the book does not exist

5. Required Features

You MUST use:

- @Controller()
- @Get()
- @Post()
- @Patch()
- @Delete()
- @Body()
- @Param()
- Dependency Injection
- Service methods


6. Folder Structure

### Expected structure:
```
src/
 └── books/
      ├── books.controller.ts
      ├── books.service.ts
      ├── books.module.ts
      ├── dto/
      │    ├── create-book.dto.ts
      │    └── update-book.dto.ts
      └── interfaces/
           └── book.interface.ts
```
8. Submission Requirements

Create a pull request from your forcked repository to this mother repo.
Ensure clean and readable code
Proper commit messages

Example:

> git commit -m "implemented add book endpoint"


### Aim of assignment is to understand:

- How NestJS applications are structured
- How controllers communicate with services
- How REST APIs work
- How to handle request data
- How to structure backend logic cleanly
- Basic backend architecture principles