import React from 'react';
import withPosts from './components/WrappedComponent';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostProps {
    post: Post;
}

const PostItem = ({ post }: PostProps) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

interface PostListProps {
    posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
    return (
        <div>
            <h1>Listado de posts</h1>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

const PostListWithPosts = withPosts(PostList);

const App = () => {
    return (
        <div>
            <PostListWithPosts />
        </div>
    );
};

export default App;
