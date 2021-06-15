# Recipe-Fusion
 web based app that determines your optimal ingredients for a recipe
 
## Application Demo
## User Stories
1.	As the father of a family of four, I want to know plenty of recipes I can cook for my family so that they won’t get bored of the same stuff.
2.	My name is Mary, I want to know the cheapest options that I have available when it comes to making diner.
3.	I am John, and when I want to eat something, I’ll do anything to have it for diner. The app helps me make a shopping list.
4.	As a student, which means I have to spend as little money as possible on food so that I can also afford cigarettes. I couldn’t do it without the app.
5.	As a restaurant owner, I want to know whether a certain recipe will be economically viable before I add it to my menu.
6.	As the CEO of a multi-billion chain wholesale supermarket company, I enjoy spending my pastime monitoring the price margins of my competitors so I can undermine their profits at every step.
7.	I’m Andrew and I use the app to find new healthy recipes with the available homegrown produce.
8.	As someone who can never decide on anything, I need an app to tell me what to cook with minimal input from my part.
9.	As a guy who likes to cook, I try to challenge myself to cook with new and interesting ingredients every day.
10. I’m really hungry and I need to quickly decide on what to eat. The fastest way would surely be to look online.
## Application Demo
https://www.youtube.com/watch?v=UEVsqq3f7to
## Design. UML
![alt-text](https://github.com/AnitaTudor/Recipe-Fusion/blob/main/images_barem/recipe-fusion_uml.png) 
## Backlog Creation
![alt-text](https://github.com/AnitaTudor/Recipe-Fusion/blob/main/images_barem/backlog.png)
## Source Control
### Branches : https://github.com/AnitaTudor/Recipe-Fusion/branches
  - main branch - main branch for the web app.
  - dev-tudor branch - branch for tudor commits, merging with main via pull requests.
  - dev-luca branch - branch for luca commits, merging with main via pull requests.
  - dev-orzata branch - branch for andrei commits, merging with main via pull requests.

### Commits: https://github.com/AnitaTudor/Recipe-Fusion/commits

## Bug Reporting
Bug reporting was handled by opening an issue by the current dev, and linking to the issue a pull request with the fix that was approved and merged with the main project. 
![alt-text](https://github.com/AnitaTudor/Recipe-Fusion/blob/main/images_barem/bug-reporting1.png)
![alt-text](https://github.com/AnitaTudor/Recipe-Fusion/blob/main/images_barem/bug-reporting2.png)
## Our Build Tool
The build tool used was npm, which is a packet manager for JavaScript and it's very convinient to work with alongside Node Js, because it has dedicated packages for the framework that are easly used in a Web- Development environment.
![alt-text](https://github.com/AnitaTudor/Recipe-Fusion/blob/main/images_barem/npm_install.png)
![alt-text](https://github.com/AnitaTudor/Recipe-Fusion/blob/main/images_barem/npm_packages.png)
## Desing Patterns
Design pattern used: Creational,Builder. The application allows for the construction of a complex object with the form of "Recipe_Location", with its actual construction being
separate from its representation, allowing the app to work for multiple recipe_locations combinations via localStorage. Resource aquisition: By having local storage act as a pseudo cookie, the refresh of static html pages wont affect the functionality of the app, as in the previous selected recipe_location combo will remain the same until a new selection is made by the user. That means that the app doesnt have to re-calculate the user section each time the generate_recipe page is refreshed.

![alt-text](https://github.com/AnitaTudor/Recipe-Fusion/blob/main/images_barem/local_storage.png)
 			
