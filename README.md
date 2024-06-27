# Server-MehmetUysal-Dev
 
This applicaiton controls the my own raspberry pi server with this [UI Project](https://github.com/uys2000-website/server-mehmetuysal-dev-ui).  
  
These 2 projects comunicate with each other via [Firebase Firestore](https://firebase.google.com/).

## Supported Features

- Runs scripts on startup
- Run scripts from UI
- Updates Projects
- Logs to UI and Terminal

## Setup

To run the project on startup raspberry pi, you should modify `.bashrc` file. For my server I added this lines at the end of the `.bashrc` file.

```bash
cd ~/Codes/server-mehmetuysal-dev
git fetch
git pull origin master 
npm ci
node src/index.mjs
```

## Environment Variables

This project does not use .env file but it requires firebase service account file. You should add it to `src/keys/key.mjs`

Example `key.mjs` File:
```javascript
export default {
  type: "",
  project_id: "",
  private_key_id: "",
  private_key: "",
  client_email: "",
  client_id: "",
  auth_uri: "",
  token_uri: "",
  auth_provider_x509_cert_url: "",
  client_x509_cert_url: "",
  universe_domain: "",
};
```
