import React, { createRef } from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import "./../styles/App.css";

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>Postov net</h1>;
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => {
                    const nodeRef = createRef(null);
                    return (
                        <CSSTransition
                            key={post.id}
                            nodeRef={nodeRef}
                            timeout={500}
                            classNames="item"
                        >
                            <div ref={nodeRef}>
                                <PostItem
                                    remove={remove}
                                    number={index + 1}
                                    post={post}
                                />
                            </div>
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
