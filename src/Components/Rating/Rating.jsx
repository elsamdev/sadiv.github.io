/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Add, Get } from "../../Functions/FBhandler";
import styles from "./Rating.module.css";
import { GetLC, SetLC } from "../../Functions/LocalStorage";

const name = "Rating";

export function Rating({id}) {
    /*Add(id, {like: 1, dislike: 3}, name).then(r => {
        console.log(r)
    })*/
    const [ratings, setRatings] = useState(null);
    const lc = GetLC(`${id}_ra`);

    useEffect(() => {
    const Init = async () => {
        const Ra = await Get(id, name);
        if(!GetLC(`${id}_ra`)) {
            SetLC(`${id}_ra`, { ds: false, lk: false });
        }
        setRatings(Ra)
    }
    Init()
    }, [id]);

    const handleLike = () => {
        if (ratings) {
          const newLikes = lc.lk ? ratings.like - 1 : ratings.like + 1;
          const newDislikes = lc.ds ? ratings.dislike - 1 : ratings.dislike;
          const updatedRatings = { ...ratings, like: newLikes, dislike: newDislikes };
          setRatings(updatedRatings);
          console.log(ratings)
          Add(id, updatedRatings, name).catch((err) => {
            throw err;
          })
          SetLC(`${id}_ra`, { ds: false, lk: !lc.lk });
        }
      };
      
      const handleDislike = () => {
        if (ratings) {
          const newDislikes = lc.ds ? ratings.dislike - 1 : ratings.dislike + 1;
          const newLikes = lc.lk ? ratings.like - 1 : ratings.like;
          const updatedRatings = { ...ratings, like: newLikes, dislike: newDislikes };
          setRatings(updatedRatings);
          console.log(ratings)
          Add(id, updatedRatings, name).catch((err) => {
            throw err;
          })
          SetLC(`${id}_ra`, { ds: !lc.ds, lk: false });
        }
      };
    
    return (
        <div className={styles.rating_container}>
            <div className={styles.btn_rating}>
                <svg active-lk={lc ? (lc.lk ? 'true' : 'false') : ''} onClick={handleLike} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"/></svg>
                <span className={styles.rating_num}>{
                    (ratings? ratings.like : 0)
                }</span>
            </div>
            <div className={styles.btn_rating}>
                <svg active-lk={lc ? (lc.ds ? 'true' : 'false') : ''} onClick={handleDislike} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2"/></svg>
                <span className={styles.rating_num}>{
                    (ratings? ratings.dislike : 0)
                }</span>            
            </div>
         </div>
    );
}