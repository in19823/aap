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

### GET a list of asset, with default page limit
> /asset

### GET a specific page with given page limit
> /asset?limit=10&lastId=5d60bccd7e0b43397e171ce5

I would add a test folder to add unit and end-to-end testing, current implemention only support a paginated list query.

I would also further wrap all environment variables, such as port number, into the JSON config file.


# FRONTEND: TBD