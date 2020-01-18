# Headless WordPress in Docker

This is a WordPress instance running in Docker with MySQL, WordPress and phpMyAdmin. There is also a React front-end.

## Docker

* `docker-compose up` or `dc up` (if you have an alias setup)
* `dc down`


### Local

* Visit `http://localhost:8080` for WordPress front-end
* Visit `http://localhost:8081` for phpMyAdmin


### React Client

* From /client folder: `npm start`
* Visits: `http://localhost:3000`


### REST API

* GET `http://localhost/wp-json`
* GET /posts `http://localhost:8080/wp-json/wp/v2/posts`
* JWT Token POST `http://localhost:8080/wp-json/jwt-auth/v1/token`
