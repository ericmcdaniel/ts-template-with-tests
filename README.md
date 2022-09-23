# TypeScript Template (with Jest Unit Tests)

## A console-only TypeScript boilerplate to get nasty configuration hell out of the way

Starting a simple new, console-only TypeScript node application can be very time consuming if you want to install and configure it with all of the bells and whistles. There are many pre-configured projects out there for projects that expect a browser, which make sense since this is a web-based language. However none exist for console-only applications. This project intends to simplify that process by providing a starter template with everything provided so that you can just get to work right away.

### Features

- Nodemon for automated file watched upon every save
- Webpack which either bundles your project for development or production
- Jest with TypeScript support
- Docker with VSCode Tasks configured
- Environment variables configured into webpack
- Preconfigured debugger
- Prettier support (mostly standard settings)

## To Use

## On the bare metal

If this is your first time viewing this repo and you want to just simple build and run without developing, type in `npm -s start`. Note that the -s flag removes the filler text that npm gives you, making your output cleaner.

```
npm -s start      // Invokes webpack to perform an optimized production
(or npm start)    // build and starts the program immediately
```

Open one terminal and run `npm run build` to trigger webpack to build the project. Keep that terminal open and open another terminal

```
npm run build     // builds the project using webpack.
                  // keep this running during development
```

In your second terminal, type `npm run dev` to run your project. The console will clear, making output easy to read if expected.

Optionally, open a third terminal (or open a split terminal if using VSCode). Use `npm run test` to execute the test runner via Jest.

```
npm run dev       // runs the program in development mode
npm run test      // runs the unit tests
```

To make an optimized production bundle type `npm run prestart`. This will delete the `dist` directory and recompile from scratch.

```
npm run prestart  // clean builds this application for production
```

## Using Docker

If you have the Docker engine installed on your machine, you can use the provided Dockerfile to match the Node runtime you want to replicate. Two VS Code tasks have been created and already configured.

If using VS Code, download the `Tasks` extension by 'actboy168' to maximize the power of Tasks. Two buttons will appear in the lowerhand left side of the (likely blue) toolbar of the text editor. Click the first button, which will build the Docker image for use. Be sure to edit the Dockerfile's node version if you desire. A terminal window will open, doing through all of the Docker build stages. (Or a second terminal window, if you already have one opened.) Wait until the window closes before continuing. When one, click the second button, which will start the container and start a bash session inside. There you can use any of the above npm start scripts to run the container.

If you don't want to download Tasks, here are the direct Docker commands

```
docker build -t ts-template-with-tests .                          // builds the docker image from this repository
docker run -it --rm --entrypoint /bin/bash ts-template-with-tests // starts the container with a running bash prompt
```
