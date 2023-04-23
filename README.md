# typescript-express-cognito

1. Add:

- Development dependencies

```
npm install nodemon typescript ts-node dotenv @types/node @types/express --save-dev
```
- Normal dependencies
```
npm install express body-parser express-validator
```
2. Add some scripts on package.json file:
```
"scripts": {
    "dev": "nodemon",
    "start": "ts-node src/server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
3. Create `tsconfig.json` file to configure TS compiler base on node 14. See [this](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more info.



# Directory

```
/
├─ src/
│  ├─ app.ts # Defines the class for the application
│  ├─ server.ts # Runs the server
├─ .env.example # Show description for .env file
├─ .gitignore # Ignore files config
├─ package.json # Proyect config
├─ package-lock.json
├─ README.md
├─ tsconfig.json # TS compiler config

```


