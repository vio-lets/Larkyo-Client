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
Components     		 | UpperCamelCase|ContactUs|
models				 | UpperCamelCase|DestinationDetail|model
Functions      		 | lowerCamelCase|saveValidation()|
Event Functions		 |'on'+'component'+'event'|onLoginBtnClick()
Query Functions| 'get/post'+ lowerCamelCase|loadDestinationListQuery()|services
Fields| lowerCamelCase| userName|



Directory structure
-------------

```
.
├── /src/				 # Application source code
│   ├── /common/
│   │   └── common class if need
│   ├── /components/			 # main feature components
│   │   ├── /about-us/
│   │   │   └── AboutUs.js	         
│   │   ├── /home/
│   │   │   └── Home.js
│   │   └── /login/
│   │       ├── SignIn.js
│   │       ├── SignUpForm.js
│   │       └── SignInForm.js
│   ├── /models/			 # model classes
│   │   └── Users.js
│   ├── /service/			 # serivce classes for calling API 
│   │   ├── AuthenticationService.js
│   │   ├── UserService.js
│   │   └── index.js
│   ├── /shared/			 # all shared components
│   │   ├── /components/		 # shared layout components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── SideMenu.js
│   │   ├── App.js			 # app starter
│   │   └── Routes.js			 # router control
│   ├── /styles/			 # Application-wide styles
│   │   ├── variables.scss
│   │   ├── app.scss
│   │   ├── home.scss
│   │   └── login.scss			 
│   ├── /images/			 # Application-wide images
│   ├── index.tpl.html		         # Main HTML page container for app
│   └── main.js			         # Application entry point
├── config				 # Project and build configurations
├── dist				 # Output files
└── test				 # Unit tests
```

Commit
-------------
-For development mode, source code should commit to **dev** branch

-For production mode, source code should commit to **prod** branch (//TODO create _prod_ branch)

-For testing mode, source code should commit to **test** branch (//TODO create _test_ branch)


Usage
-------------
To build the code, follow these steps.

Ensure that NodeJS is installed. This provides the platform on which the build tooling runs.
From the project folder, execute the following command:
```
npm install
```
To start the code, you can now run:
```
npm start
```

