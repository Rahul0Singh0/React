# React Note

* React is the JS library to helps us to develop complex web application easily and provides dynamic web apps.
* It provides single page web app  just like mobile apps. It means, it doesn't reload all/whole page content after once fully loaded.
* Single HTML page web app achieve through virtual DOM
* React works on the logic of component driven architecture

## Component Driven Architecture

* Combination of multiple react elements create component.
* Component is the reusable UI element.
* React Element is an object that describes the properties of an actual DOM node which will be created by root.

Example of simple structure of React Element - 
``` JavaScript
{
    type: 'button',
    props: {
        className: 'btn',
    },
}
```

## React Core

Contains common functions of <b>React DOM</b> and <b>React Native</b>

#### React DOM

* React DOM is used for web apps.
* All those functions, which helps to render web page.

#### React Native

* React Native is used for mobile apps.
* All those functions relevants to develops mobile apps. 

### Framework

A <b>framework</b> provides a structured environment, enforcing certain design patterns and taking control of how the application is built. The framework calls the developer's code rather than the other way around.

### Library

A <b>library</b> is a collection of reusable functions or components that developers can call when needed. The developer has full control over the application's flow. 

## JSX (JavaScript XML)
<b>HTML : </b>write code in HTML is very easy but no interactivity provides.<br>
<b>JavaScript : </b>It provides interactivity but complexity<br>
<b>React : </b> Even in React, complexity in code but less than JS <br>

To solve this code complexity, we write code in <b>JSX</b>

#### JSX ---> JS
* To convert JSX to JS by transpilation process.
* Babel is most popular & used transpiler.

#### JSX
* It is html like syntax, compatible with JS.
* Adopted by many framework but initially develop JSX for React by Facebook.

NOTE : JSX is not understandable by browser. So, All jsx code covert into JS in your local machine So, you have to installed Node.JS & npm is your machine.