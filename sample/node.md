 NPM 
    * Node Package Manager.
    * It is used to install various packages and resolving their various dependencies.
    * It is install with node.js .It contains the javascript libraries and dependencies.It is open source software,that manages the version.

       ** npm install -g npm **

 NPM -g 

         ** -g means global **
   
    Used to save the names and version of th packages that installed.
    used in testing.

Save-dev
    npm install [package-name] –save-dev
     *When –save-dev is used with npm install, it signifies that the package is a development dependency. A development dependency is any package that absence will not affect the work of the application.

Yarn
    * Yarn is a package manager for Node.js that focuses on speed, security, and consistency. It was originally created to address some issues with the popular NPM package manager.
    * It was developed by facebook,google,twitter....
    * It was fast while comparing to NPM ,but it takes more space.
    * It is enchanced in security and better in stability.we can used in offline mode .

        **yarn --version**     


 Upgrade new express js

    * Express 5.0 is still in the beta release stage, but here is a preview of the changes that  will be in the release and how to migrate your Express 4 app to Express 5.

    * To install the latest beta and to preview Express 5, enter the following command in your application root directory:

    ** npm install express@>=5.0.0-beta.1 --save **

Using express js

    * Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Installing Express

        ** npm install express --save **

Hello world program :

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log("Express runs on 3000");
});
    















