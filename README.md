Nairobi Urban Green – Frontend 🌱

Nairobi Urban Green is a community-driven platform focused on promoting urban farming, sustainability, and education within Nairobi.

This repository contains the frontend application, built with React and Vite, designed to be fast, responsive, and easy to integrate with a Rails backend API.

✨ Features

Beautiful and responsive UI across all pages

Blog listing page

Single blog article page

Donate page with pledge form

About Us and Contact pages

Gallery showcasing farm and community activities

Mobile navigation menu with sticky navbar

Clean, component-based architecture

Seamless integration with a Rails backend API

🛠 Tech Stack

React

Vite

React Router

CSS (Global CSS / Modules)

Axios for API communication

📁 Folder Structure
src/
├── assets/        # Images, logos, static files
├── components/    # Reusable UI components
│   ├── Navbar/
│   ├── Footer/
│   └── BlogCard/
├── pages/         # Application pages
│   ├── Home/
│   ├── Blog/
│   ├── BlogDetails/
│   ├── Donate/
│   ├── Gallery/
│   ├── About/
│   └── Contact/
├── services/      # API service files
├── App.jsx        # Main routing file
└── main.jsx       # Vite entry point

🚀 Installation & Setup
Clone the repository
git clone https://github.com/kazungu01/Nairobi-Urban-Green-Frontend.git
cd Nairobi-Urban-Green-Frontend

Install dependencies
npm install

Start the development server
npm run dev


The app will run at:

http://localhost:5173

🔌 Connecting to the Backend (Rails API)

This frontend is designed to work with a Rails backend API.

Set your backend URL in an environment file:

VITE_API_URL=http://localhost:3000

📄 Available Pages
Home

Overview of Nairobi Urban Green and featured sections.

Blog

Displays all blog posts.

Blog Details

Shows a full blog article including images.

Donate

Donation pledge form with a clean, responsive layout.

Gallery

Visual showcase of farm work and community activities.

About Us

Mission, vision, and organization story.

Contact

Contact form and organization contact details.

📦 Production Build

To create a production build:

npm run build


Output files will be generated in the dist/ folder.

To preview the production build:

npm run preview

🤝 Contributing

Contributions are welcome.

Fork the repository

Create a feature branch

Commit your changes

Submit a pull request

📜 License

The source code is licensed under the MIT License.

All images, text content, and branding related to Nairobi Urban Green are © Nairobi Urban Green and may not be reused without permission.