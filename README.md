React Typescript Component Starter
=

Starter project for creating your own React component with TypeScript.

##Edit
* Edit `src/index.tsx` and `src/style.css`

## Build
* `npm i` to install all dependencies.
* `npm run build` to build your component
* `npm link` to create a symbolic link from the global folder to your component

## Test
* Create a new React app using for example `create-react-app`. This app will be used for testing your component.
* Import your react component
* `npm link <your-component>` to link `node_modules/<your-component>` in your application to the global folder. So when importing your component it will call on the built version in the component project.
* `npm start` in your component folder. You will see that every time you change something it will automatically rebuild.
* Run your application. If using `create-react-app`, run it with `npm start`.
* Do some changes in the component and see that the application gets updated.

##Publish
* Edit `package.json` by adding the correct information like `name` and `author`.
* Create a NPM account
* `npm login` with your account information
* `npm publish` to publish your component so other can enjoy its existence.

##Links

[React](https://reactjs.org/)

[TypeScript](https://www.typescriptlang.org/)

[Webpack](https://webpack.js.org/)

Inspired by Broda Noels [blog](https://medium.com/BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce).



