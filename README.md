# AAP
An audio player DEMO

# Folder Structure

```
aap                     // app root
 +-- client             // frontend code
 +-- config             // config module to load config from json files
 +-- public             // public accessable folder
 +-- server             // backend code
      +-- controllers   // controller logics
      +-- helpers       // helper functions, such as response template
      +-- models        // data models
      +-- routes        // routing logics
 +-- test               // unit tests
```
# BACKEND: NodeJs + Express + MongoDB

#### MongoDB is required to run the app, please update the config.json accordingly
#### Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
node app.js
```

3. Run Test

```bash
npm test
```

### GET a list of asset, with default page limit
> /asset

### GET a specific page with given page limit
> /asset?limit=10&lastId=5d60bccd7e0b43397e171ce5

## Improvements due

* Struct an authentication layer, support SSO. I would avoid in-house authentication.
* Struct an authorization layer, with OAuth2 standard. It's best to use an existing reliable library.
* Containerize the app for easy setup/deploy.
* Use cloud storage to store static music files, secure the files with authorization mechanism.

# FRONTEND: TBD