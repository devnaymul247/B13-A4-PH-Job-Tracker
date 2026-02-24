## Answers 

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> getElementById finds one element by id. it's fastesh method.

getElementsByClassName finds elements by class name.
it provides htmlcollection. we cannot use map and filter method in DOM. 

querySelector Finds the first matching CSS selector. we need to mention isit class or id or tag.

querySelectorAll Finds all matching CSS selectors.
provides Nodelist. it support forEach.

### 2. How do you create and insert a new element into the DOM?
=> first we need to create an element, add content by innertext or class by classlist. then finally insert by appendChild() method;

### 3. What is Event Bubbling? And how does it work?
=> Event Bubbling is the way of browser events travel in the DOM. when user click an element,it first happens on the clicked element, and then moves upward via its current one by one. to execute this we generally use addEventListener("click", (e) => e.target )

### 4. What is Event Delegation in JavaScript? Why is it useful?
=> Event Delegation is a technique where you attach one event listener to a parent element instead of adding listeners to many child elements.
Because of event bubbling, the parent can detect which child was clicked using event.target. it provides cleaner and shorter code and works dynamically.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
=> preventDefault()
Stops the browser’s default behavior of an element.

stopPropagation()
Stops the event from moving up to parent elements (stops bubbling).

