LBYCPG3_Project

This project is a web-based application that demonstrates various web technologies, including HTML, CSS, JavaScript, AJAX, and React.js. The project includes multiple pages with different functionalities, such as a login system, a protected page, and a React.js-based article page.
Table of Contents

    Installation
    Project Structure
    Features
    Usage
    License

Installation
Prerequisites

    Node.js and npm (for running the React component)
    A local server setup (e.g., using Python, Apache, or any other server)

Setup

    Clone the Repository

    bash

git clone https://github.com/jujuCodez/LBYCPG3_Project.git

Navigate to the Project Directory

bash

cd LBYCPG3_Project

Install Dependencies for React.js Component
Navigate to the article5 directory and install the necessary npm packages:

bash

cd article5
npm install

Run the React Component
To start the React component locally, run:

bash

npm start

Serve the Project Locally
Serve the project using a local server to test the login and other features. For example, using Python's built-in server:

bash

    python -m http.server

Project Structure

    css/ - Contains the CSS stylesheets used in the project.
    images/ - Contains image files used throughout the site.
    js/ - Contains JavaScript files, including AJAX and login handling scripts.
    article5/ - Contains the React.js component code and configuration.
        public/ - Public assets and the main HTML entry point for the React app.
        src/ - Source code for React components and styles.
    index.html - The main landing page of the site.
    profile.html - A profile page with static content.
    protected.html - A protected page accessible only after login.
    protectedBase.html - The login page implemented using AJAX.
    README.md - Documentation of the project.

Features

    Responsive Design: The project uses a combination of custom CSS and Bootstrap to ensure responsiveness across different devices.
    Login System: The login page uses AJAX to authenticate users via a JSON file containing account information.
    Protected Pages: Pages that are accessible only after a successful login.
    React.js Integration: An article page built using React.js, demonstrating modern JavaScript and component-based architecture.
    Interactive Components: The project includes interactive elements such as counters and flip cards, implemented in React.js.

Usage
Accessing the Project

    Home Page: Start by opening index.html in your browser.
    Login: Access the login page via the navigation bar and use credentials stored in accounts.json.
    Protected Pages: After logging in, navigate to protected pages using the links provided.
    React.js Article: Visit the React-based article page to see dynamic content and interaction.

Development

    Modify the HTML, CSS, or JS files in their respective directories.
    Update the React components by editing the files in article5/src/.