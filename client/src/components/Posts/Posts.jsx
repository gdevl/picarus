// give Posts the set of data to display (following posts, my posts, public posts)
import React from 'react';
import useFetchPostData from './useFetchPostData';

const Posts = ({view}) => {
    const {
        posts,
        myposts,
        followingposts
    } = useFetchPostData(userId, view);

    return (
        <h1>Posts</h1>
    )

}

export default Posts;