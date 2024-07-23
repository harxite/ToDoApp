
# To-Do List Application

This project is a simple web application that allows users to add, edit, and mark tasks as completed. Developed using modern web technologies, this application helps users manage their tasks efficiently.

## Technologies

- **TypeScript**: A statically typed superset of JavaScript that enhances code reliability and maintainability.
- **React**: A JavaScript library for building user interfaces, managing the component-based architecture of the application.
- **Node.js**: A platform for executing JavaScript on the server side, used to build the API server for this project.
- **Express**: A minimal and flexible Node.js web application framework, used to handle the RESTful API.

## Setup

To run this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/harxite/ToDoApp.git
   ```

2. **Install Dependencies:**

   Navigate to the project root directory and install the required packages for both the frontend and backend:

   ```bash
   cd todo-app
   cd clientSide
   npm install
   cd ../serverSide
   npm install
   ```

3. **Start the Backend Server:**

   ```bash
   cd serverSide
   npm start
   ```

   The server will run by default at [http://localhost:5000](http://localhost:5000).

4. **Start the Frontend Application:**

   Open a new terminal, navigate to the frontend directory, and start the application:

   ```bash
   cd clientSide
   npm start
   ```

   The frontend application will run by default at [http://localhost:3000](http://localhost:3000).

## Usage

- **Add Task**: Use the form at the top of the application to add new tasks.
- **Toggle Task Completion**: Use the "Toggle" button next to each task to change its completion status.
- **Delete Task**: Use the "Delete" button next to each task to remove it.

## API

The application uses a RESTful API to manage task data. The API includes the following endpoints:

- `GET /todos`: Retrieve all tasks.
- `POST /todos`: Add a new task.
- `PUT /todos/:id`: Toggle the completion status of a specific task.
- `DELETE /todos/:id`: Delete a specific task.

