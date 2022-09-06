import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { useParams } from 'react-router';

import './BlogBody.css';
import EmptyList from '../../components/EmptyList';

const BlogBody = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const { blog } = await request(
                'https://api-ap-south-1.hygraph.com/v2/cl7nuwbbm2svg01t7gauu7edn/master',
                `  
            query FetchBlogQuery($slug: String!) {
                blog (where : { slug : $slug}) {
                  id
                  title
                  description {
                    raw
                  }
                  date
                  slug
                  blogHeader {
                    url
                    fileName
                  }
                }
              }   
        `,
                {
                    slug: id
                });
            setBlog(blog);
        };

        fetchBlog();

        window.scrollTo(0, 0)
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {blog ? (
                <div className="blog-wrap_container">
                    <div className='blog-wrap'>
                        <img className='blogBody-blog_img' src={blog.blogHeader.url} alt='Deal With It - cover' />

                        <div className="blog-headerbar">
                            {/* header part of the blog */}
                            <header>
                                <h1 className='blog-title text-3xl font-medium'>
                                    {blog.title}
                                </h1>
                            </header>

                            {/* author details of the blog */}
                            <p className='text-md font-normal mt-1'>{blog.date}</p>
                        </div>

                        {/* Blog description */}
                        <div className='blog-desc'>
                            <div className="blogsBody-subpara">
                                <RichText
                                    content={blog.description.raw}
                                    renderers={{
                                        h1: ({ children }) => <h1 className='blogsBody-blog_heading'> {children} </h1>,
                                        img: ({ src, altText }) => <img className='blogsBody-blog_img' src={src} alt={altText}></img>,
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <EmptyList />
            )}
        </>
    );
};

export default BlogBody;
