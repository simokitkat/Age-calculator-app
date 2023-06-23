# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus (to be done in the next release of the app)**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./src/assets/design/desktop-design.jpg)

### Links

- Solution URL: [Github Repository](https://github.com/simokitkat/Age-calculator-app)
- Live Site URL: [Frontend Mentor | Age calculator app](https://age-calculator-app-frontend-mentor.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- [React](https://reactjs.org/) - JS library
- useState, useEffect, useContext, useRef, useReducer hooks as well as custom hooks.
- SCSS

### What I learned

This is the first application where I use hooks like useRef, useReducer and useContext to manage my state values. It was an awesome practice. I also used custom hooks after I was finished with the app to refactor my code in the App component to make it more readable and maintainable.

## Author

- [Frontend Mentor](https://www.frontendmentor.io/profile/simokitkat)
- [Linkedin](https://www.linkedin.com/in/islamsoliman92)
