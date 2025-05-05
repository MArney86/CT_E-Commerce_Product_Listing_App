# E-commerce Product Listing App for Coding Temple Software Engineering Course

## Assignment App requirements

This project I will begin building a simple E-commerce product listing site using React. 
It will help with organizing code using React components, managing state using the useState hook, and passing and managing data through props between components. 
Frameworks like Bootstrap will not be used, focusing on custom styling instead.

The App Component:
- Create a state that holds the list of products
- Pass the list of Products to ProductList Component
- Style the main structure of the App with CSS

The ProductList Component
- Create a Component that recieves the Products list as a prop and map through it
- For each product, render a ProductItem Component
- Apply custom CSS

The ProductItem Component
- Display the objects name, price, description, and an image for the item (bonus)
- Style each item using custom CSS to distinguish each product
- Use props to pass down product details to this component

## How to use the App

Download and extract the repository, or clone the repository to your desired location.

Open your preferred terminal and navigate to where you extracted/cloned the repository then enter the ecom-product-app folder and run `npm install` to download all dependencies needed to run the app.

At this point, you can use either the command `npm run dev` to run the app in developer mode. Or, you can build the app for deployment using the command `npm run build` and them using `npm run preview` to preview the build and ensure proper functioning.

The app should show information about 6 products with differing stylings in a responsive container that shows differing numbers of products per row based on the size of the viewscreen.