1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById Select One element based on unique id, getElementsByClassName select all element of specific class, querySelector select first element of specific class/id/attributes etc. , querySelectorAll select all elements of spefific class/attribute etc.



2. How do you create and insert a new element into the DOM?
Ans: I create a new element by CreateElement() . ex: new_element =  documnet.CreateElement("div").
                                                     new_element.innterHTML = `content`;
    then insert a new element by appendChild(). ex: parent.appendChild(new_element);


3. What is Event Bubbling? And how does it work?

Event Bubbling is a part of DOM where event start from target element and propagates upward.
when an Event occur(like click),the event trigger on the target element ,then it moves upward to parent element.that upward movement is called event Bubbling and that's how it works.



4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique where instead of adding eventListener in multiple child, attach only their common parent ,then handle event by Event Bubbling.

It is useful because It reduce memory by adding one listener in parent of all element instead of adding listener in all element. 

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() is used to stop default behaviour of browser , stopPropagation() is used to stop event bubbling