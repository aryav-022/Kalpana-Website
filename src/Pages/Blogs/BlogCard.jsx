import React from 'react'
import styles from "./Blogs.module.css";
import { Link } from 'react-router-dom';

export default function BlogCard(props) {
  return (
    <Link to={`/blogs/${props.blog.id}`} data-heading={props.blog.heading} data-date={props.blog.date}>
      <div className={styles.blogCard}>
        <div className={styles.verticalContainer}>
          <div className={styles.cardHeading}>{props.blog.heading}</div>
          <div className={styles.cardContent}>
            {
              props.blog.content.length > 99 ? props.blog.content.substring(0, 99) + "..." : props.blog.content
            }
          </div>
        </div>
        <img src={props.blog.image} alt="" className={styles.cardImage} />
      </div>
    </Link>
  )
}
