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

# Conditional Rendering
## React Router Library:
It third party library to solve our redirection problem between multiple pages.
And achieve to single page web page rather than if you are using multiple page in your webapp.
To install:
``` bash
npm install react-router-dom
```
App component as a child to BrowserRouter.
In App component hierarchy, enable the capability of BrowserRouter hierarchy.
``` JavaScript
<BrowserRouter>
    <App />
</BrowserRouter>
```
* Routes
* Route
* Link
* useNavigate() hook: useNavigate is a hook that returns a navigate function and help to <u>condination rendering</u>
* etc...

## Given Task
* problem type: data transfer from one page to another
* Enter data in Input form, Task is to display that data on Screen after submit the data
  ![alt text](./Images/image2.png)
* Solutions:

  ![alt text](./Images/image3.png)
  ``` JavaScript
  // Query Params
  // From
  const navigate = useNavigate();
  navigate(`/play?text=${value}`);
  // To
  const [ searchParams ] = useSearchParams();
  console.log(searchParams.get("text"));
  ```
  ``` JavaScript
  // path params
  // From
  navigate(`/play/${value}`);
  // To
  const { text } = useParams();
  return (<h1>PlayGame {text}</h1>);
  // In App Component, can give multiple path params
  <Route path="/play/:text/:id" element={<PlayGame />} />
  ```
  Both above <u>query params</u> and <u>path params</u> solutions are not good for 2 player game because input will be show to other player in url.

* Third Solution is better than both above given by react-router.
  ``` JavaScript
  // From
  navigate(`/play`, { state: { wordSelected: value } });
  // To
  // using useLocation() hook function given by react-router
  const { state } = useLocation();
  ```

## Rendering List

 ![alt text](./Images/image4.png)
* Solution:
  ```JavaScript
  function Rendered() {
    const arr = ['Hello', 'World'];
    return (
      <>
         { arr.map((element, idx) => <b key={idx}>{element}</b>) }
      </>
    );
  }
  ```