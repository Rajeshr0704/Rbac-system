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
