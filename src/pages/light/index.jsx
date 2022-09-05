import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { request } from 'graphql-request';
import { isAuthenticated } from '../../essentials/auth';
import Card from './card';
import Poem from './poem';
import ResourceLink from './resource-link';
import Resources from './resources';
import BlogList from '../../components/BlogList/BlogList';
import EmptyList from '../../components/EmptyList';

const Light = () => {
    const [blogs, setBlogs] = useState(null);

    function logout() {
        window.location = '/';
        localStorage.removeItem('username');
        localStorage.removeItem('pass');
    }

    useEffect(() => {
        if (!isAuthenticated()) {
            window.location = '/';
        }

        const fetchBlogs = async () => {
            const { blogs } = await request(
                'https://api-ap-south-1.hygraph.com/v2/cl7nuwbbm2svg01t7gauu7edn/master',
                `  
                  query FetchBlogQuery {
                      blogs(orderBy: date_DESC) {
                        id
                        blogHeader {
                          url
                          fileName
                        }
                        title
                        date
                        previewDescription
                        slug
                      }
                    }   
              `);

            setBlogs(blogs);
        };

        fetchBlogs();
    }, [])

    return (
        <>
            <Poem />
            <Card />
            <Resources>
                <ResourceLink link={"https://psychcentral.com/anxiety/how-to-reduce-anxiety-quickly#how-to-calm-down-now"} id={1}>
                    Tips to reduce anxiety
                </ResourceLink>
                <ResourceLink link={"https://anxietycontrolcenter.com/consultation/"} id={2}>
                    Consultation with a specialist
                </ResourceLink>
                <ResourceLink link={"https://declutterthemind.com/blog/anxiety-relief-games/"} id={3}>
                    Games to declutter the mind
                </ResourceLink>
            </Resources>
            <button onClick={logout} className='cursor-default bg-gradient-to-b from-blue-600 to-blue-500  text-2xl text-white w-12 h-12 rounded-full flex justify-center items-center fixed bottom-20 right-7 z-10'>
                <FontAwesomeIcon icon="arrow-right-from-bracket" />
            </button>

            <div className="blogs-container w-10/12 mx-auto mt-16 mb-40">
                <span className="text-2xl font-bold mb-4 block">Blogs</span>
                {(!blogs || blogs.length === 0) ?
                    <EmptyList />
                    :
                    <BlogList blogs={blogs} />
                }
            </div>

        </>
    )
};

export default Light;