import React from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.css';

const BlogItem = ({
    blog: {
        id,
        title,
        previewDescription,
        slug,
        blogHeader
    },
}) => {
    return (
        <div className='blogItem-wrap'>
            <Link className='blogItem-link' to={`/blogs/${slug}`}>
                <div className="blogItem-cover">
                    <img className='blogItem-cover_img' src={blogHeader.url} alt='blog cover' />
                </div>
            </Link>

            <h3 className='text-2xl'>{title}</h3>
            <div className='blogItem-desc text-lg'>
                {previewDescription}
            </div>
        </div>
    );
};

export default BlogItem;