import React from 'react';
import styles from "./Blogs.module.css";
import Blogs from "./Blogs.json";
import BlogCard from './BlogCard';

export default function BlogsContainer() {
  return (
    <>
    <div className={styles.heading}>BROWSE ALL BLOGS</div>
    <section className={styles.blogsContainer}>
        {
            Blogs.map(blog => {
                return (
                    <BlogCard blog={blog} />
                )
            })
        }
    </section>
    </>
  )
}
