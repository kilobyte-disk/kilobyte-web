# kilobyte-web

This is my [neocities](https://neocities.org) website.<br/>

You can find it here: [nc.kilobytedisk.net](https://nc.kilobytedisk.net)<br/>

Just leaving the source out here to make it easier for people to check it out.<br/>

# Supported platforms
Currently, this is being developed for desktop usage, e.g 16:9 or 4:3 aspect ratio standard definition displays.
Eventually, mobile will be supported, but it most likely won't happen until I get all the main features I want completed.

# Development
*I'm not accepting pull requests on this repo, but if you wanted to run this locally,
just follow the steps below.*

Development dependencies:<br/>
- docker<br/>
- docker-compose<br/>
- ruby (for neocities cli)<br/>

Run an apache server with docker to test it over localhost.

```
docker-compose up --build
```

And then, open up ```http://localhost:8080/``` in your favourite web browser!
