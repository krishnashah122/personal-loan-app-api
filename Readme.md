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
- [Screenshots](#screenshots)

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
    personal-loan-app-api/
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

## Screenshots

### 1. Approve Application During Signup
- When user enters valid data.
![Screenshot 1](https://github.com/user-attachments/assets/a874d0d2-2381-4756-9b14-76a30787b7a9)
![Screenshot 2](https://github.com/user-attachments/assets/63a621e4-1f47-426e-a7b4-bf7640102d26)

- When user age is under 20.
![Screenshot 3](https://github.com/user-attachments/assets/0f7e7e43-b1c6-48c6-a9e5-9c872d1fc7ac)

- When user salary is less than 25k.
![Screenshot 4](https://github.com/user-attachments/assets/85e72cdc-0c3a-4942-865d-fa67b02cfd3a)

- When user age is under 20 and salary is less than 25k.
![Screenshot 5](https://github.com/user-attachments/assets/ac54bb77-c86d-406d-9bd2-9675b76a467b)

### 2. Login API
- When user enters correct login credentials.
![Screenshot 1](https://github.com/user-attachments/assets/c71737bf-0b61-4cf1-89a3-8725b420aa3f)

- When user enters wrong email address.
![Screenshot 2](https://github.com/user-attachments/assets/1ab2e471-bc1f-4c60-a88b-3cb0911e8631)

- When user enters wrong password.
![Screenshot 3](https://github.com/user-attachments/assets/18a6ef59-8467-4dd7-a2cd-dc5dd304fb5c)

### 3. Show User Data
- When user is logged in and try to access his/her details.
![Screenshot 1](https://github.com/user-attachments/assets/eaeb52b8-742d-4271-aeb8-4c9e5ad9c848)

- When user is not logged in and try to access his/her details.
![Screenshot 2](https://github.com/user-attachments/assets/439fbd6c-ac37-4a8d-bd74-8173704f8642)

### 4. Borrow Money API
- When user has enough purchasing power to borrow money.
![Screenshot 1](https://github.com/user-attachments/assets/a22e3f71-874d-480e-9538-cb4abd9385d8)
![Screenshot 2](https://github.com/user-attachments/assets/7f0642e7-bce5-48ff-bb36-1bf1dbd12f02)

- When user don't have enough purchasing power to borrow money.
![Screenshot 3](https://github.com/user-attachments/assets/4a3feb18-e597-4e19-b18d-54c896f1bb85)

---

Feel free to contribute to this repository by making pull requests or opening issues for any bugs or feature requests.
