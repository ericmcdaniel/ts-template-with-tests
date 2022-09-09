# TypeScript Template (with Jest Unit Tests)

Starting a simple new, console-only TypeScript node application can be very time consuming if you want to install and configure it with all of the bells and whistles. There are many pre-configured projects out there for projects that expect a browser, which make sense since this is a web-based language. However none exist for console-only applications. This project intends to simplify that process by providing a starter template with everything provided so that you can just get to work right away.

### Features

- Nodemon for automated file watched upon every save
- Webpack which either bundles your project for development or production
- Jest with TypeScript support
- Preconfigured debugger
- Prettier support (mostly standard settings)

## To Use

If this is your first time viewing this repo and you want to just simple build and run without developing, type in `npm start`.

```
npm start // Invokes webpack to perform an optimized production build and starts the program immediately
```

Open one terminal and run `npm run start:dev` to trigger webpack to build the project. Keep that terminal open and open another terminal

```
npm run start:dev  // builds the project using webpack.
                   // keep this running during development
```

In your second terminal, type `npm run start:run` to run your project. The console will clear, making output easy to read if expected.

Optionally, open a third terminal (or open a split terminal if using VSCode). Use `npm run start:test` to execute the test runner via Jest.

```
npm run start:run   // runs the program in development mode
npm run start:test  // runs the unit tests
```

To make an optimized production bundle type `npm run build`. This will delete the `dist` directory and recompile from scratch.

```
npm run build  // clean builds this application for production
```
