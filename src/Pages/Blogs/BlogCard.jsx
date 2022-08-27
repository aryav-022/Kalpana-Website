import React from 'react'
import styles from "./Blogs.module.css";
import { Link } from 'react-router-dom';

export default function BlogCard({blog}) {
  return (
    <Link to={`/blogs/${blog.id}`}>
      <div className={styles.blogCard} key={blog.id}>
        <div className={styles.verticalContainer}>
          <div className={styles.cardHeading}>{blog.heading}</div>
          <div className={styles.cardContent}>{blog.content}</div>
        </div>
        <img src={blog.image} alt="" className={styles.cardImage} />
      </div>
    </Link>
  )
}
