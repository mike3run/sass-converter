# Sass Converter
My first real attempt at making a full app using the MEAN Stack.

## The basic (development) idea:
The thing is to use Express mainly to handle some API routes while at the same time use it to serve some static files.

With gulp we do all of the front-end stuff basically I'm using a modified version of my ground-zero package.

So everything JS will be handled by Webpack for now but all encapsulated inside a gulp task.

## App
The server gets a `POST` request on `/api/sass2scss` or `/api/scss2sass` performs the task at hand and also returns the compiled CSS.
