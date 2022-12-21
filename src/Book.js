import React from 'react'

//  BOOK COMPONENTS
const Book = (props) => {
     // console.log(props);
     const clickHandler = () => {
        alert("you clicked me!")
     }

     const {img, title, author} = props
    return (
    <article className="book">
        <img className="image" src={img}  alt="book image" />
        <h1>{title}</h1>
        <a href="#">{author}</a>
        <button  type="button" onClick={clickHandler}>EXAMPLE</button>
    </article>
    );
};


export default Book

