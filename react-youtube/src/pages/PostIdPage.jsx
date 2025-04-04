import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFetching } from "../hooks/useFetching";
import { useParams } from "react-router-dom";
import Loader from "./../components/UI/loader/Loader";
import PostService from "../API/PostService";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading ? <Loader /> : <div>{post.title}</div>}
            <h1>КОММЕНТАРИИ</h1>
            {isComLoading ? (
                <Loader />
            ) : (
                <div>
                    {comments.map((comm, index) => (
                        <div key={index} style={{ marginTop: 15 }}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostIdPage;
