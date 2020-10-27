import React from "react";

const CommentsList = ({commentList}) => {
    return (
        <div className="container">
            <h2>评论列表</h2>
            <ul>
                {commentList.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}
export default CommentsList