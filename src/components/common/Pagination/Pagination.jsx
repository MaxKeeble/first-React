import { NavLink } from "react-router-dom";
import styles from "./Pagination.module.css";

export const Pagination = function ({ pagesNumber, currentPageNumber }) {

  let paginationItems = new Array(pagesNumber).fill(0).map((_, index) => {
    return <li key={index}>
      {(index + 1) === +currentPageNumber
        ? (<NavLink className={styles.link + ' ' + styles.active} to={`/users/${index + 1}`} key={index}>{index + 1}</NavLink>)
        : (<NavLink className={styles.link} to={`/users/${index + 1}`} key={index} >{index + 1}</NavLink>)}
    </li>;
  });

  return (
    <>
      <ul className={styles.list}>
        {paginationItems}
      </ul>
    </>
  );
};