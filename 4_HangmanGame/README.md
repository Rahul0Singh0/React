## props
props is a object, which used to access properties that are given from another component during calling the function in current component
## JSX Curly 
Curly brackets are used to access the properties of the props object
It helps to evaluate the expression by JSX curly
``` JavaScript
// Inline CSS
<button style={{'backgroundColor': 'blue', 'color': 'white'}}>
</button>
```

## JSX Fragments
You can't return multiple parent element. You can return only one single parent element.
And if you wrap up all element in single div element, you can do it but there is a problem
Problem is there is introduce extra DOM node. That extra node is irrelevant.
And every components having extra one node and in term of large scale project, this will big problem(unnecessary load). By mistake applied styling.
So, React introduce Fragments.
Help to multiple element wrapped into single
It will not create extra node
Fragment doesn't render as an element, So you can't apply styling.
``` JavaScript
<> 
</>
```

## React Principle
To help to achieve UI Components reusability 
1. Single Responsibility principle: A component should have only one reason to change or should have only one responsibility/Function
2. Presenter Container Pattern: 
![alt text](./Images/image.png)

## Component: Memory-Manage
![alt text](./Images/image-1.png)

* Every Components having its memory to track data.
* But it is not possible with normal variabel or local variable
* Here react introduce, state variable to check changes on component and update during run time on where required(globally)
* This will done using useState() special function or called React hooks.

## React Hooks:
React Hooks are special functions that let you "hook into" React state and lifecycle methods from function components.
It will perform designated task.