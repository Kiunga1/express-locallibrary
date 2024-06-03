# Library Management System

## Overview

This project is a simple Library Management System built using Node.js, Express, MongoDB, and Pug. The application allows users to view information about books, authors, genres, and book instances. It includes pages for listing all items, as well as detailed views for each item. This project is based on the [MDN Web Docs Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs).

## Features

- **Home Page**: Displays counts of instances of each model (books, book instances, authors, genres).
- **List Pages**: List views for books, book instances, authors, and genres.
- **Detail Pages**: Detail views for each book, book instance, author, and genre.
- **Formatted Dates**: Improved date display format for better readability.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Pug**: Templating engine for rendering dynamic web pages.

## Key Concepts

### Controllers

Controllers manage the flow of data between the models and the views. They handle user requests, interact with the database using models, and render the appropriate views.

### Asynchronous Operations

The project handles asynchronous operations using Promises and `async/await` syntax to ensure smooth flow control and error handling.

### Views with Pug

Views are created using the Pug templating engine, which allows for creating dynamic and reusable HTML templates.

### Database Queries

The project uses Mongoose to define schemas and models for interacting with the MongoDB database. It performs various CRUD operations to fetch and display data on the site.

### Templates and Inheritance

The project leverages Pug's templating capabilities to create base templates and extend them for various pages, promoting code reuse and maintainability.

### Date Handling with Luxon

Dates are handled and formatted using the Luxon library to improve readability and consistency across the site.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system
