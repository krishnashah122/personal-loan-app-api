# Personal Loan App APIs

This repository contains a set of APIs for personal loan application services like user signup, login, retrieving and showing user data, and borrowing money. These APIs are designed to handle user application approval based on age and salary, user authentication, user data retrieval, and borrowing functionality.

## Table of Contents
- [API Endpoints](#endpoints)
  - [POST /signup](#post-signup)
  - [POST /login](#post-login)
  - [GET /user](#get-user)
  - [POST /borrow](#post-borrow)
- [Validation Criteria](#validation-criteria)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## API Endpoints

### 1. Approve Application During Signup
**Endpoint:** `POST /signup`

**Functionality:**
- Approve or reject the application based on user age and monthly salary.
- Register the user after all verification.
- Maintain a status field to handle the user application status.

**User Signup Details:**
- Phone number
- Email
- Name
- Date of user registration
- Date of birth (DOB)
- Monthly salary

**Validation Criteria:**
- User should be above 20 years of age.
- Monthly salary should be 25k or more.

### 2. Login Endpoint
**Endpoint:** `POST /login`

**Functionality:**
- Allow user to login using email and password.
- Use JWT for authentication.

### 3. Show User Data
**Endpoint:** `GET /user`

**Functionality:**
- Show user data with the following fields:
  - Purchase Power amount
  - Phone number
  - Email
  - Date of user registration
  - DOB
  - Monthly salary

### 4. Borrow Money API
**Endpoint:** `POST /borrow`

**Functionality:**
- Allow the user to borrow money from the application.
- Update the Purchase Power amount.
- Calculate the tenure of repayments and the monthly repayments with an interest rate of 8%.
- Return the updated Purchase Power amount and the monthly repayment amount.

## Validation Criteria

- **Age:** User should be above 20 years of age.
- **Monthly Salary:** Monthly salary should be 25k or more.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/krishnashah122/personal-loan-app-api.git
    ```

2. Navigate to the project directory:
    ```bash
    cd personal-loan-app-api
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Setup Environment Variables
    1. Create a file named `.env` in your project's root directory.
    2. Add the following lines to the `.env` file, replacing the placeholders with your actual values:
    
        ```bash
        PORT=3000
        MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/
        JWT_SECRET=your_secret_key
        INTEREST_RATE=0.08
        ```

    * `PORT`: The port on which your application will listen for requests (default: 3000).
    * `MONGODB_URI`: The connection URI for your MongoDB database.
    * `JWT_SECRET`: A secret key used for generating JSON Web Tokens (JWTs).
    * `INTEREST_RATE`: The interest rate used in your application logic (default: 0.08).

### Running the Application

1. Start the server:
    ```bash
    npm start
    ```

2. The server will be running at `http://localhost:3000`.

## Folder Structure

- This project uses the following folder structure:

    ```bash
    financial-app-services-api/
    ├── config/
    │   ├── config.js
    │   └── db.js
    ├── controllers/
    │   ├── borrowController.js
    │   ├── loginController.js
    │   ├── signupController.js
    │   └── userController.js
    ├── middlewares/
    │   ├── authMiddleware.js
    │   └── validationMiddleware.js
    ├── models/
    │   └── userModel.js
    ├── node_modules/
    ├── routes/
    │   └── userRoutes.js
    ├── utils/
    │   ├── calculatePurchasingPower.js
    │   └── calculateRepayment.js
    ├── .env
    ├── .gitignore
    ├── index.js
    ├── package-lock.json
    ├── package.json
    └── README.md
    ```

## Technologies Used

- Node.js
- Express.js
- JSON Web Tokens (JWT) for authentication
- MongoDB

---

Feel free to contribute to this repository by making pull requests or opening issues for any bugs or feature requests.
