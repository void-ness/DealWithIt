import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import './BlogList.css';

const BlogList = ({ blogs }) => {
    return (
        <div className='blogList-wrap w-full'>
            {blogs.map((blog, i) => (
                <BlogItem blog={blog} key={i} />
            ))}
        </div>
    );
};

export default BlogList;
