<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="frontend/src/assets/logo.svg" alt="Logo" width="106" height="98">
  </a>

<h3 align="center">Alumania</h3>

  <p align="center">
    Saint Louis University Alumni Social Media Platform
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

Alumania is a Social Media platform for Saint Louis University Baguio's alumnis and graduating students. It allows its users to be up to date with events and other university updates. This repository contains the source code for the Alumni Application.




### Built With

[![Express][Express.js]][Express-url] [![React][React.js]][React-url] [![Tailwind][Tailwind.icon]][Tailwind-url] [![MySQL][MYSQL.logo]][MYSQL-url]




<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

You must have [node](https://nodejs.org/dist/v22.11.0/node-v22.11.0-x64.msi) installed.
* Check if installed properly
  ```sh
  node -v # should print a version number
  npm -v # should print a version number
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yukiroow/alumania.git
   ```
2. Install NPM packages for both modules
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

### How to run the application

1. Validate the .env file for your MySQL's user credentials and port

2. Run the backend module
  ```sh
  cd backend
  npm run dev
  ```

3. Run the frontend module
  ```sh
  cd frontend
  npm run dev
  ```

4. Open the website: https://localhost:5173/


<!-- MARKDOWN LINKS & IMAGES -->
[Express.js]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind.icon]: https://img.shields.io/badge/TailwindCSS-563D7C?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[MYSQL.logo]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MYSQL-url]: https://www.mysql.com/
