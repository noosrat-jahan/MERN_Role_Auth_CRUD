# Project Name: MERN_ROLE_AUTH_CRUD


# Project Overview

This website is MERN role based authencicated application with CRUD implementation. In this application admin can create or register user, can view and edit user data. This website contain very simple and minimalistic UI and functionality based on five different user role. User except admin will login the website using credentials provided by the admin that were used during registration.


# Key Features

* user having any of the provided role can login the website
* Admin can login, view all user, register user and edit user info.
* Login with jwt token generation with 2 minutes of token expiration and when logout user, token will be removed from local storage.
* Role based dashboard access.


# Technologies: 
* React
* React Router
* Tailwind CSS
* Express
* MongoDB
* Node.js
* Firebase


# Used Packages
* React-Hook-Form
* sweetalert
* react-icon


# Dependencies

*  axios: ^1.8.4
*  firebase: ^11.6.0
*  react: ^18.3.1
*  react-dom: ^18.3.1
*  react-hook-form: ^7.55.0
*  react-icons: ^5.4.0
*  sweetalert2: ^11.19.1




# Dev Dependencies

* @eslint/js: ^9.15.0
* @types/react: ^18.3.12
* @types/react-dom: ^18.3.1
* @vitejs/plugin-react: ^4.3.4
* autoprefixer: ^10.4.20
* daisyui: ^4.12.14
* eslint: ^9.15.0
* eslint-plugin-react: ^7.37.2
* eslint-plugin-react-hooks: ^5.0.0
* eslint-plugin-react-refresh: ^0.4.14
* globals: ^15.12.0
* postcss: ^8.4.49
* tailwindcss: ^3.4.15
* vite: ^6.0.1


# Guideline to Run Project in Local Machine:

## Installation

Run `npm install` to install project dependencies.

## Environment setup
Create a .env file and put your environment variable there. Save the following variable:
VITE_apiKey,
VITE_authDomain,
VITE_projectId,
VITE_storageBucket,
VITE_messagingSenderId,
VITE_appId

## Usage
Run `npm run dev` to run the project locally.

# Admin Credentials

Email: noosrat@gmail.com
Password: noo6789srat

# Links: 

* Api Link : https://mern-role-auth-crud-server.vercel.app/
* Live Link: https://mern-role-auth-crud.web.app/