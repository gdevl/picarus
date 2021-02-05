import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useFilterPostData(view, userId, follows) {
    const [status, setStatus] = useState('idle');

    const dispatch = useDispatch();
    const allposts = useSelector((state) => state.posts);

    return {
        posts,
    };
}
