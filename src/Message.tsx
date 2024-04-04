
// a TypeScript file

// React components can be created using JavaScript classes or functions. Function-based components are more popular
// Function-based components are more concise and easier to write

//PascalCasing vs camelCasing

// React components use PascalCasing

function Message() {
    const name = 'Jaira';
    return <h1> {name} </h1>; // this is JSX: JavaScript XML, NOT HTML!!!
}

export default Message;

// wherever we use the Message component, if will render an h1 element that says "Hello World"
// GO TO THE APP.tsx file and use the component

