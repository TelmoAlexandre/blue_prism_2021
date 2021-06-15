# Schedules Page

The project consists in a page that lists Schedules and their logs.

You can run the project with these commands.

```
npm i
npm start
```

I built this project in React with Typescript. I used the framework Ant Design to build some of the layout (Logs Table as an example).
I used several other packages like:

- redux
- lodash
- json-server
- prettier
- fontawesome
- concurrently - To be able to run both the Json Server and my app simultaneously.
- redux-devtools-extension - To use the useful chrome extension - React DevTools.

The app is responsive to mobile. I chose to open the logs sections in a drawer when the browser window is small.
The general font color, opacity and background were all created by myself.

In terms of the more technical side of the app, I kept all components smaller than 100 lines of code.
The API requests are implemented in their own custom hooks.

Telmo Alexandre @ 2021
