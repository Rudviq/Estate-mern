## Real Estate Project using MERN Stack


### Steps used to create the project

1. Install React JS and Tailwind CSS
    1.1 Create Project folder and run 'npm create vite@latest <folder_name>'; Select REACT as framework; Select JS+SWC as a variant ; Run the next command displayed on terminal
    1.2 Install Tailwind CSS; Follow the further steps to install Tailwind with vite on Tailwind CSS site
2. Create Pages and Route
    2.1 Create pages folder inside src and create jsx files
    2.2 Install react router dom using 'npm i react-router-dom'
         (React Router DOM enables navigation within a single-page application without the need to reload the entire page. It allows for dynamic rendering of components based on the URL, creating a smoother user experience similar to a multi-page application.)
3. Create Header Component
4. Create and Run the server
    4.1 Go to root folder and run commend 'npm init -y' in the terminal
    4.2 Create folder api nad file in the same named 'index.js'; Install express to create APIs and Backend
    4.3 Add "type":"module" in package.json
    4.4 Install nodemon  to start the server and run automatically after every change; Add "dev": "nodemon api/index.js" & "start":"node api/  index.js" in scripts of package.json 
5. Connect to database
    5.1 Install mongoose and connect it in index.js
    5.2 Create .env file and paste the connection link in it by assigning to a variable
    5.3 Fetch the same variable in index.js
6. Create user Model
    6.1 Create model folder in api and create a file for models
    6.2 Create schema for every models

7. Create a test API route
    7.1 Create a folder 'route' in api folder
    7.2 Create folder 'controller' in api to store the content

8. Create Sign Up    API route
    8.1 