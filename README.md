**Nairobi Urban Green – Frontend**
Nairobi Urban Green is a community driven platform focused on promoting urban farming, sustainability, and education within Nairobi.
This frontend is built using React, designed to be fast, responsive, and easy to integrate with a Rails backend API.

**Features**

Beautiful, responsive UI for all pages

Blog listing page

Single blog article page

Donate page with pledge form

About Us and Contact pages

Mobile navigation menu with sticky navbar

Clean component-based structure

Connects seamlessly to the Rails backend API

**Tech Stack**
React

Vite

React Router

CSS Modules / Global CSS

Axios (for communicating with the backend API)

**Folder Structure**
src/
 ├── assets/                # Images, logos, static files
 ├── components/            # Reusable UI components
 │     ├── Navbar/
 │     ├── Footer/
 │     └── BlogCard/
 ├── pages/                 # Each frontend page
 │     ├── Home/
 │     ├── Blog/
 │     ├── BlogDetails/
 │     ├── Donate/
 │     ├── About/
 │     └── Contact/
 ├── App.jsx                # Main routing file
 └── main.jsx               # Vite entry point

**Installation and Setup**
1. Clone the repository
git clone https://github.com/kazungu01/Nairobi-Urban-Green-Frontend.git
cd Nairobi-Urban-Green-Frontend

2. Install dependencies
npm install

3. Start the development server
npm run dev


The app will run on:

http://localhost:5173

Connecting to the Backend (Rails API)

This project interacts with the Nairobi Urban Green backend built using Rails.

Set your backend URL inside an environment file.

**Available Pages**
Home

Overview of Nairobi Urban Green and featured sections.

Blog

Displays all blog posts from the backend.

Blog Details

Shows a full blog article including images.

Donate

Contains a pledge form styled with a clean layout.

Gallery

Displays farm images and community activities.

About Us

Mission, vision, and org story.

Contact

Contact form and contact details.

**Running a Production Build**
npm run build


Output files will be created in the dist/ folder.

To preview production build:

npm run preview

**Contributing**

Pull requests are welcome.
If you want to contribute:

Fork the repo

Create a feature branch

Submit a pull request

**License**

This project is licensed under the MIT License.