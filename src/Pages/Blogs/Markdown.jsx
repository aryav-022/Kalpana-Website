import React from 'react'
import styles from "./Blogs.module.css";

export default function Markdown(props) {
    /* 
        ***** Markdown Syntex *****
        Headings - #
        Bold - **  **
        Italics - *  *
        Image - !!!path!!!
        Underline - !__ !__
        Crossed - !--  !--
        New Line - \n
    */

    const headings = [styles.h1, styles.h2, styles.h3, styles.h4, styles.h5, styles.h6];

    const { content } = props;

    function markdownCompiler(line) {
        if (line[0] === '#') {
            const words = line.split(" ");
            const word = words[0];
            return (
                <div className={headings[word.length - 1]}>
                    {line.substring(word.length)}
                </div>
            )
        }
        else {
            const words = line.split("**");
            return words.map(word => {
                if (words.indexOf(word) % 2 === 0) {
                    const italicsWords = word.split("*");
                    return italicsWords.map(word => {
                        if (italicsWords.indexOf(word) % 2 === 0) {
                            const underlineWords = word.split("!__");
                            return underlineWords.map(word => {
                                if (underlineWords.indexOf(word) % 2 === 0) {
                                    const crossedWords = word.split("!--");
                                    return crossedWords.map(word => {
                                        if (crossedWords.indexOf(word) % 2 === 0) {
                                            const pathWords = word.split("!!!");
                                            return pathWords.map(word => {
                                                if (pathWords.indexOf(word) % 2 === 0) {
                                                    return (
                                                        <span>{word}</span>
                                                    )
                                                }
                                                else {
                                                    word = word.trim();
                                                    const par = word.split(",")
                                                    const path = par[0].trim();
                                                    return (
                                                        <img src={ require(`../../Assets/${path}`) } alt="" className={styles.articleImage} />
                                                    )
                                                }
                                            })
                                        }
                                        else {
                                            return (
                                                <><s>{word.trim()}</s><span> </span></>
                                            )
                                        }
                                    })
                                }
                                else {
                                    return (
                                        <><u>{word.trim()}</u><span> </span></>
                                    )
                                }
                            })
                        }
                        else {
                            return (
                                <i>{word}</i>
                            )
                        }
                    })
                }
                else {
                    return (
                        <strong>{word}</strong>
                    )
                }
            })
        }
    }

    function markdown(string) {
        const lines = string.split('\n');
        return lines.map(line => {
            return (
                <div className={styles.blogPara}>
                    { markdownCompiler(line) }
                </div>
            )
        });
    }

    return (
        <div className={styles.blogContent}>
            { markdown(content) }
        </div>
    )
}
