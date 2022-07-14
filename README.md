# Nasa Assets Listing

## Pages List

1. Search / Homepage
Basic Search Page that only lists images using search query string, start and end year.
    '/'

2. Show specific item page
Basically this a show post by id page. Uses Nasa Ids to search for collection and show first result.
    '/post/:id'

3. Counter Example from CRA
This is just an example counter that gets created when you use create-react-app with redux template.
    '/counter'

4. V2 Search Example
This example includes all media types and a list of filters you can use.
    '/search'

4. V2 Single Asset View Example
A page to view a single asset...image/audio/video.
    '/asset/:nasa_id'

# Short Info

- Well I've obviously used CRA with Redux template.  
- Did not bother much with actual CSS so it's a mess that works haha :D
- Added few tests to show Redux store slice settings change. Not actually fetching any data in tests yet.
- Created V2 of Search that incudes additional parameters:
  - Media Type - Image/Audio/Video
  - Title
  - Description
  - Location

___

# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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
