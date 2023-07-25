import React, { ComponentType, useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface WithPostsProps {
    posts: Post[];
}

const withPosts = <P extends object>(
    WrappedComponent: ComponentType<P & WithPostsProps>
) => {
    return (props: P) => {
        const [posts, setPosts] = useState<Post[]>([]);

        useEffect(() => {
            const fetchPosts = async () => {
                try {
                    const response = await axios.get(
                        'https://jsonplaceholder.typicode.com/posts'
                    );
                    setPosts(response.data);
                } catch (error) {
                    console.error('Error fetching posts:', error);
                }
            };
            fetchPosts();
        }, []);

        return <WrappedComponent {...props} posts={posts} />;
    };
};

export default withPosts;
