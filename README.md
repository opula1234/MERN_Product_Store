# Product Store

A simple React application to manage products. Users can view, create, update, and delete products with a light/dark theme toggle.

## Features

- View a list of products
- Add new products
- Update existing products
- Delete products
- Light/Dark mode toggle
- Responsive design with Chakra UI

## Technologies Used

- React
- Zustand (for state management)
- Chakra UI (for styling)
- React Router (for routing)
- Fetch API (for backend requests)
- Vite (for fast development build tool)

## Installation

### Using Vite

1. Clone the repository:
git clone [<repository-url>](https://github.com/opula1234/MERN_Product_Store.git)

2. Navigate to the project directory:

    Front-End - mern_product_store\MERN_Product_Store\frontend
    Back-End - mern_product_store\MERN_Product_Store\backend


3. Install dependencies:
    * vite installation command - npm create vite@latest
    * npm install


4. Run the Vite development server:

    * npm run dev (for both front_end and back_end)

5. Open your browser and visit the URL shown in the terminal, usually `http://localhost:5173`


## API

The app expects a backend API at `/api/products` with endpoints for fetching, creating, updating, and deleting products.

## Folder Structure (simplified)

src/
├── components/ # Reusable UI components like ProductCard
├── pages/ # Page components like HomePage, CreatePage, Navbar
├── store/ # Zustand store for product state
├── App.js # Main app component and routing


## Usage

- Navigate to the home page to view products.
- Use the "Create" button on the navbar to add a new product.
- Products are displayed as cards with image, name, and price.
- Click on products for options to edit or delete.

## License

This project is open source and available under the MIT License.
