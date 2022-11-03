import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>Blogs</h2>

            <h3>1. What is the purpose of React Router?</h3>
            <p>React Router is a JS library that helps creating Single Page Application or SPA that allow navigating without refreshing the the page.</p>

            <h3>2. How does Context API work?</h3>
            <p>This helps to make global variables which can be passed to any components directs without having to pass them manually in a linear way component by component.</p>

            <h3>3. How does useRef work?</h3>
            <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument, initialValue. The returned object will persist for the full lifetime of the component.</p>

        </div>
    );
};

export default Blogs;