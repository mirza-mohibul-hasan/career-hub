import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h2 className='my-8 font-bold text-5xl text-[#7E90FE] text-center'>ReactJS Blog</h2>
            <div className='mt-10 mx-3 md:mx-56 grid lg:grid-cols-2 gap-5'>
                <div className='single-blog p-2'>
                    <h1 className='my-5 font-bold text-2xl'>Question: When should you use context API?</h1>
                    <p className='my-5 font-bold text-2xl'>Answer:</p>
                    <p className='my-3 text-xl'>The Context API is a feature of React that allows you to share data between components without having to pass it explicitly through props. It provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
                    <p className='my-3 text-xl'>When you have data that needs to be accessed by multiple components, you can use Context API to make that data available to all of them. This can be useful in situations where you have a global theme or user preferences that need to be accessed by many components.</p>
                </div>
                <div className='single-blog p-2 '>
                    <h1 className='my-5 font-bold text-2xl'>Question: What is custom hook?</h1>
                    <p className='my-5 font-bold text-2xl'>Answer:</p>
                    <p className='my-3 text-xl'>A custom hook is a JavaScript function that uses one or more of the built-in React hooks (such as useState, useEffect, useContext, etc.) to provide some reusable functionality. Custom hooks allow you to extract and reuse stateful logic from your components.</p>
                    <p className='my-3 text-xl'>Custom hooks are similar to regular functions in that they can take arguments and return values. The difference is that they can use the built-in hooks to manage state and lifecycle events within the function. This can be useful when you have logic that needs to be reused across multiple components, or when you want to keep your components lean and focused on rendering.</p>
                </div>
                <div className='single-blog p-2 '>
                    <h1 className='my-5 font-bold text-2xl'>Question: What is useRef in ReactJS?</h1>
                    <p className='my-5 font-bold text-2xl'>Answer:</p>
                    <p className='my-3 text-xl'>The useRef hook is a built-in hook in React that provides a way to create a mutable reference to an element or value that persists across re-renders of a component. It is similar to the createRef method in class components, but can also be used to store any mutable value.</p>
                    <p className='my-3 text-xl'>The useRef hook returns an object with a single current property, which can be set and read to store and access a value. The current property can be used to hold a reference to a DOM element or any other mutable value.</p>
                </div>
                <div className='single-blog p-2'>
                    <h1 className='my-5 font-bold text-2xl'>Question: What is useMemo?</h1>
                    <p className='my-5 font-bold text-2xl'>Answer:</p>
                    <p className='my-3 text-xl'>The useMemo hook is a built-in hook in React that provides a way to memoize a value or function and avoid unnecessary re-computation on re-renders. It is similar to React.memo but works for values and functions instead of components.</p>
                    <p className='my-3 text-xl'>When a value or function is memoized with useMemo, it is only re-computed when one of its dependencies changes. This can be useful when you have a computationally expensive operation, such as a complex calculation or API call, that doesn't need to be re-computed every time a component re-renders.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;