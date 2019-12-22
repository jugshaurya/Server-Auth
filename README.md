### GOAL

- we need to serve the json data to front end from back-end, that is it!

### client || server

give username, password || take username, password and returns token for subsequent request

### Token vs cookies

- Both brings the concept of state in stateless protocol like HTTP.

  - Manually set Token

    - need to attach to header to send with each request, using authorization: BEARER 'token here'
    - can be shared b/w domains, we can send tokens to any domain, client and server(s) can be at their respective domains.

  - cookies
    - automatically attached to every request- cookies: {}
    - can't be shared b/w domains, hence client and server should be available at the same domain

* Express
* Mongoose
* morgan

- mkdir -p /data/db
  sudo chown -R \$USER /data/db

```sh
https://stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux
kill process at specfic port
  - lsof -i:4040
  - kill $(lsof -t -i:4004)
```

- passport

  - a authetication middleware for Nodejs.
  - use to validate the incoming user, whether via jwt, or via emailandPassword, or through googleSignIn etc via their respective Strategies
  - **caveat :** - we would have written down our own middleware whihc validates those jwt, or emailandPassword and set req.user to the user after validating.

- passport-jwt
  - This module lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.
