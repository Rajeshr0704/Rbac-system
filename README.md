RBAC System (Role-Based Access Control)
This is project built using Node.js, Express.js, and MongoDB, implementing authentication, authorization, and role-based access control (RBAC). 
The project provides secure APIs for managing users, roles, and permissions with JWT-based authentication.

Features
User Registration and Login with JWT Authentication.
Role-Based Access Control for endpoints (e.g., ADMIN, USER roles).
Secure password hashing with bcrypt.
RESTful APIs for managing users and roles.
Middleware for token verification and role validation.
Database integration using Mongoose.

Technologies Used
Backend Framework: Node.js with Express.js
Database: MongoDB (via Mongoose)
Authentication: JWT (jsonwebtoken)
Password Hashing: bcrypt
Environment Variables: dotenv
API Testing: Thunder Client

RBAC-SYSTEM/
├── config/
│   ├── db.js                  // MongoDB connection
│   ├── roles.js               // Predefined roles and permissions
├── controllers/
│   ├── authController.js      // Authentication logic
│   ├── roleController.js      // Role management logic
├── middleware/
│   ├── authMiddleware.js      // JWT and role-based validation
├── models/
│   ├── user.js                // Mongoose schema for users
│   ├── role.js                // Mongoose schema for roles
├── routes/
│   ├── authRoutes.js          // Routes for authentication
│   ├── protectedRoutes.js     // Routes protected by roles
├── .env                       // Environment variables
├── package.json               // Node.js dependencies  
├── server.js                  // Main entry point


Setup Instructions
1. Clone the Repository
git clone https://github.com/Rajeshr0704/Rbac-system.git
cd rbac-system

2. Install Dependencies
npm install

3.Start the Server
Run the server using nodemon or node:
nodemon server.js
The server will start at http://localhost:5000.

API Testing
Use Postman or Thunder Client to test the endpoints.

Register a User:

POST /api/auth/register
Body:
json

{
  "username": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}
Login:

POST /api/auth/login
Body:
json

{
  "email": "john@example.com",
  "password": "password123"
}
Copy the token from the response.
