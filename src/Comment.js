import React from 'react';
const Comment = props => (
    <div className="container">
        <a href="/" className="comment">
            <img alt="SmartPost" />
        </a>

        <div className="content">
            <a href="/" className="author">
                {props.name}
            </a>
            <div className="metadata">
                <span className="Date"> {props.timeAgo}</span>
            </div><div>{props.statement}</div>
        </div>
    </div>
);
export default Comment;