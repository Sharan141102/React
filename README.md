- npx => Executing a package

- npm init -y
- npm i parcel

- -D => Dev dependencies
- -S => Production dependencies

# Parcel => 
- Dev Build
- Local Server
- HMR (Hot module replacement, "Refresh immediately")
- File watching algorithm (built once again)
- Caching - Faster builds
- Image optimization
- Minification our files
- Bundling our files
- Compress our files
- Consistent Hashing
- Code splitting
- Differential bundling (supports older browser)
- Diagnostic
- Error Handling
- HTTPs
- Dev Server with zero config
- Tree shaking (removing unused code)
- Different bev and production bundles

# React Component =>
- const heading = React.createElement("h1", { id: "heading" }, "This is a heading tag");

- JSX (tranpiled before it reaches the JS Engine) - PARCEL - Babel
- JSX -> HTML like syntax is converted into React.createElement => Object => HTMLElement(render)
- JSX => is not HTML in JS and not JS in HTML, its a syntax extension
- React Functional Component => Return some piece of JSX Code

# React Functional Component => 
const Heading = () => {
    return <h1>This is heading</h1>
}

- Passing a prop to a function is like passing an argument to a function

# Food app

* Header
* - Logo
* - Nav Items
* Body
* - Search
* - Restaurant Container
*   - RestaurantCard
*      - Img
*      - Name of restaurent, star rating, cuisine, delivery time
*      - Img
* Footer
* - Copyright
* - Links
* - Contact
* - Address

# 2 types of Export/Import

# Export Default
- export default Component;
- export Component from file;

# Export Named
- export const Component;
- export { Component } from file;

- We use Load -> Render -> API call -> Re-render approach

- Dont create the useState inside the if else condition, for loop and functions

# 2 types of routing in web apps
- Client Side Routing (CSR) -> React
- Server Side Routing (SSR) -> Next JS