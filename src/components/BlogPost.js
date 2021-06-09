import React from 'react';

export default function BlogPost() {

    const currDate = new Date(Date.now());

    const handleKeyPress = e => {
        e.preventDefault();
        if (e.key === "Enter") {
            console.log("Comment submitted!\nNow, gotta learn how to persist dat sheeit...");
        }
    }

    return (
        <div>
            <h1>Here Is The Title Of My Blog Post!</h1>
            <h2>Here is a subheader with a preview</h2>
            <h3>By Jack Overby</h3>
            <h3>Published {currDate.toDateString()}</h3>
            <br/>
            <p>Here is what a sample article might look like.</p>
            <p>Not great, but better than nothing, right?</p>
            <form>
                <input placeholder="Leave a comment!"></input>
                <input onKeyPress={handleKeyPress}></input>
            </form>
        </div>
    );
}