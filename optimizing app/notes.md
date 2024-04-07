# React Custom Hooks and Utils Folder

This document provides answers to various questions related to React custom hooks, utils folders, and related concepts.

## 1. How to create a hook in React?

To create a custom hook in React, you define a function starting with the prefix "use". This function can use other React hooks like useState, useEffect, etc., and it encapsulates a specific piece of logic to be reused across components.

## 2. Why should we create our own hook?

Creating custom hooks promotes code reusability and helps in keeping components clean and focused. It allows you to encapsulate and share stateful logic across multiple components without duplicating code.

## 3. What is inside the `utils` folder?

The `utils` folder typically contains utility functions or helper functions that are shared across different parts of the application. These functions can perform common tasks such as data formatting, API calls, or other utility operations.

## 4. Why do we create the `utils` folder?

The `utils` folder is created to organize and store utility functions separately from components and other application logic. This separation helps in maintaining a clean project structure and makes it easier to manage and reuse utility functions.

## 5. What is modularity?

Modularity in software development refers to the concept of breaking down a program into separate, interchangeable modules. Each module focuses on a specific functionality or feature, promoting code reuse, maintainability, and scalability.

## 6. Why are hooks used?

Hooks are used in React to add state and lifecycle features to functional components. They enable functional components to manage local state, perform side effects, and access lifecycle methods without using class components.

## 7. What is named export and unnamed export?

In JavaScript modules, named exports allow you to export multiple functions, variables, or objects from a module using named identifiers. Unnamed exports (default exports) are used to export a single function, class, or object as the default export from a module.

## 8. Why do we use hooks?

Hooks are used in React to add stateful logic and lifecycle methods to functional components. They provide a way to reuse logic across multiple components, making it easier to manage and maintain complex application logic.

## 9. What does useState return?

The useState hook in React returns an array with two elements: the current state value and a function to update that value. For example:

```javascript
const [count, setCount] = useState(0);


## 10. How can we make the `useOnline` hook and why is it used?

To create the `useOnline` hook, we can utilize the `useState` and `useEffect` hooks in React. This hook is used to monitor the online/offline status of the browser. Here's how we can implement it:

```javascript
import { useState, useEffect } from 'react';

function useOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}


## 11. How do we clear the cache of the event listener and why do we need to clear the cache when we change the component?

To clear the cache of an event listener in React, we use the `useEffect` hook with a cleanup function. This ensures that event listeners associated with a component are removed when the component is unmounted or updated. Here's an example:

```javascript
useEffect(() => {
  const handleScroll = () => {
    // Handle scroll event
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
Clearing the cache of event listeners is essential to prevent memory leaks. If event listeners are not removed when the component is unmounted or updated, they can continue to consume memory and cause performance issues. By clearing the cache of event listeners, we ensure that resources are properly released when they are no longer needed.

12. What is on-demand loading?
On-demand loading, also known as lazy loading or deferred loading, is a technique used in web development to load resources only when they are needed, rather than loading them all upfront. This approach can improve the performance of web applications by reducing initial page load times and conserving bandwidth.

In the context of React, on-demand loading is often achieved through code splitting and dynamic imports. Components or resources are loaded asynchronously when they are required by the user interface, such as when a user navigates to a specific route or interacts with a certain feature. This allows web applications to load quickly and efficiently, providing a smoother user experience.