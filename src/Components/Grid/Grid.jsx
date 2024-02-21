/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import styles from "./Grid.module.css";

export function Grid({items}) {
  return (
    <ul className={styles.gridItems}>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={`/item/${item.key}`}>
            <Card item={item} index={index}/>
          </Link>
        </li>
      ))}
    </ul>
  );
}