# Products Bazaar Concept

This is a simple React and Adobe XD project. In this project we have implemented the thinking in React principles.
The design of the site is similar to the search bar example provided in the [React documentation](https://reactjs.org/docs/thinking-in-react.html) but runs as a full site
and the design has been done by hand.

For the design files please see designPlan folder in the project structure hierarchy.

## Design Of The Site
![Design](https://github.com/samniem/products-bazaar-concept/blob/main/designPlan/Products%20Bazaar%203.png)
[]()

## Hierarchy Breakdown
![HierarchyBreakdown](https://github.com/samniem/products-bazaar-concept/blob/main/designPlan/Hierarchy.jpg)

- 1. Header: Contains Site Header
- 2. SearchBar: Contains all of the input from user
- 3. ProductsGridContainer: Grid contanining all of the product tables
  - 4. ProductsHeader: Header for what information product rows contain
  - 5. ProductsTable: A table for a specific produt category
    - 6. ProductsTableHeader: Header for the product category
    - 7. ProductsTableRow: Contains one product belonging to a specific product category
  
## Static implementation
![StaticImplementation](https://github.com/samniem/products-bazaar-concept/blob/main/implementation/Static%20Site%20Implementation.png)

## Minimal state

Since we have two types of inputs from the user, the minimal state representation has two stateful variables.
The first is the `searchTerm` state, where the user can input text as a search term.
The second is the `onlyInStockProducts` state where the user sets the UI to render only the items that are in-stock.

As a note if we had a backend service that was returning the JSON data for products, then we would need a third state.
In this case the product information would be variable but right now we have a constant set of products so we do not need to use a state for the products. 

## Determine where the state should live

We start by mapping out every component that will render something based on the state of the application. 

![CommonStateComponent](https://github.com/samniem/products-bazaar-concept/blob/main/implementation/CommonStateComponent.jpg)

Then for choosing the commmon component for the state [React documentation](https://reactjs.org/docs/thinking-in-react.html) offers the following criteria for selecting the common state component:


>Identify every component that renders something based on that state.
>Find a common owner component (a single component above all the components that need the state in the hierarchy).
>Either the common owner or another component higher up in the hierarchy should own the state.
>If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

Based on the mapping we drew above and React documentation instructions we should place the state in the div component inside App.js where the other components are housed. 

![CommonStateComponent2](https://github.com/samniem/products-bazaar-concept/blob/main/implementation/CommonStateComponent2.jpg)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
