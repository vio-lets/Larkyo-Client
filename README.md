Larkyo
===================

Larkyo client application. Please read this document before starting development.


----------


Name
-------------

Naming conventions The following table is shown the naming conventions for every element:

Element   			 | Naming style  |Example  |usage
-------------------- | --------------|---------| ---
Folder	       		 | lowerCase|aboutus |
Files          		 | UpperCamelCase|ContactUs|
Components     		 | UpperCamelCase|ContactUs|
Functions      		 | lowerCamelCase|saveValidation()|
Event Functions		 |'on'+'component'+'event'|onLoginBtnClick()
Fetch Query Functions| 'load'+'Query'|loadDestinationListQuery()|services
Models				 | UpperCamelCase|DestinationDetail|model
Fields| lowerCamelCase| userName|



Directory structure
-------------

```
.
├── src
│   ├── common
│   │   └── static class
│   ├── components
│   │   ├── shared (shared components)
│   │   │   ├── header.js
│   │   │   └── footer.js
│   │   ├── home (components used in home)
│   │   │   ├── homeTopTenList.js
│   │   │   ├── homeTopTenListItem.js
│   │   │   └── homeSearch.js
│   │   ├── destination
│   │   │   ├── destinationDetail.js
│   │   │   ├── destinationDetailDesctiption.js
│   │   └── contactus
│   │       ├── contactUsForm.js
│   │       └── contactUsMap.js
│   ├── index.html
│   └── index.js
├── styles
├── dist
└── test
```