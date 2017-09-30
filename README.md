<<<<<<< HEAD
Larkyo
===================

Larkyo client application. Please read this document before starting development.


----------


Name
-------------

Naming conventions The following table is shown the naming conventions for every element:

Element   			 | Naming style  |Example  |usage
-------------------- | --------------|---------| ---
Folder	       		 | lower-case|about-us |
Components     		 | UpperCamelCase+'View'|ContactUsView|view
modules				 | UpperCamelCase|DestinationDetail|model
Containers				 | UpperCamelCase+'Controller'|DestinationDetailController|controler
Functions      		 | lowerCamelCase|saveValidation()|
Event Functions		 |'on'+'component'+'event'|onLoginBtnClick()
Fetch Query Functions| 'load'+'Query'|loadDestinationListQuery()|services
Fields| lowerCamelCase| userName|



Directory structure
-------------

```
.
├── /src/				 # Application source code
│   ├── /common/
│   │   └── static class
│   ├── /components/			 # Global Reusable Presentational Components
│   │   ├── /home/
│   │   │   ├── /controllers/	         # Connect components to actions and store
│   │   │   │   └── HomeControllers.js
│   │   │   ├── /views/		 	 # Presentational React Components
│   │   │   │   └── HomeView.js
│   │   │   └── /modules/		 # Collections of reducers/constants/actions
│   │   │       └── Home.js
│   │   ├── /destination/
│   │   │   ├── /controllers/
│   │   │   ├── /views/
│   │   │   └── /modules/
│   │   └── /contact-us/
│   │       ├── /controllers/
│   │       ├── /views/
│   │       └── /modules/
│   ├── /layouts/			 # Components that dictate major page structure
│   │   ├── /default-layout/
│   │   ├── /header/
│   │   └── /footer/
│   ├── /containers/			 # Global Reusable Container Components
│   ├── /store/				 # Redux-specific pieces
│   │   ├── createStore.js		 # Create and instrument redux store
│   │   └── reducers.js			 # Reducer registry and injection
│   ├── /styles/			 # Application-wide styles
│   ├── /images/			 # Application-wide images
│   ├── index.html			 # Main HTML page container for app
│   └── main.js				 # Application bootstrap and rendering
├── bin					 # Build/Start scripts
├── config				 # Project and build configurations
├── public				 # Static public assets (not imported anywhere in source code)
├── dist				 # Output files
└── test				 # Unit tests
```

Commit
-------------
-For development mode, source code should commit to **dev** branch

-For production mode, source code should commit to **prod** branch (//TODO create _prod_ branch)

-For testing mode, source code should commit to **test** branch (//TODO create _test_ branch)

Commit message format:
[Your Name] - [main update]
```
For example:
    CS - login features update
    CS - bug#231 fixed
    CS - reset password done
```

=======
# planner-app
Front-end

You need to have npm installed to run this. If you don't have it, the easiest way to get it is by installing Node.js

Once you have npm installed, open terminal and navigate to the project folder.
Then run the following commands in order
- npm install
- npm run dev
- npm start

This should install the required modules and package the javascript required for the site to load.

The site should start automatically at the end of the last command. If it doesn't or if you happen to close it, you can navigate to http://localhost:8080/
>>>>>>> clyde/dev
