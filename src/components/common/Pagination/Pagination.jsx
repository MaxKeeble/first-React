import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Pagination.module.css";

export const Pagination = function ({ pagesNumber = 0, pagesNumberToShow = 5, currentPageNumber = 1, isDisabled = false }) {
  pagesNumber = +pagesNumber;
  pagesNumberToShow = +pagesNumberToShow;
  currentPageNumber = +currentPageNumber;

  if (currentPageNumber < 1 || currentPageNumber > pagesNumber) throw new Error("bad input " + pagesNumber + ' ' + pagesNumberToShow + ' ' + currentPageNumber);
  if (pagesNumber < pagesNumberToShow) pagesNumberToShow = pagesNumber;

  let left = 0;
  let right = 0;
  left = right = Math.floor(pagesNumberToShow / 2);
  if (pagesNumberToShow % 2 === 0) left--;

  // Проверка на упирание в край
  if (currentPageNumber - 1 < left) {
    let difference = left - currentPageNumber + 1;
    left -= difference;
    right += difference;
  } else if (pagesNumber - currentPageNumber < right) {
    let difference = right - pagesNumber + currentPageNumber;
    left += difference;
    right -= difference;
  }

  const numbersMas = [];
  for (let i = currentPageNumber - left; i <= currentPageNumber + right; i++) {
    numbersMas.push(i);
  }

  const paginationItems = numbersMas.map((number) => {
    return <li key={number}>
      {(number) === +currentPageNumber
        ? (<NavLink className={classNames(styles.link, styles.active)} to={`/users/${number}`} >{number}</NavLink>)
        : (<NavLink className={styles.link} to={`/users/${number}`} >{number}</NavLink>)}
    </li>;
  });


  const isDisabledToTheLeft = currentPageNumber === 1;
  const isDisabledToTheRight = currentPageNumber === pagesNumber;

  const leftBtnClasses = classNames(styles.pagination__btn, { [styles.disabled]: isDisabledToTheLeft });
  const rightBtnClasses = classNames(styles.pagination__btn, { [styles.disabled]: isDisabledToTheRight });
  // const rightBtnClasses = styles.pagination__btn + (isDisabledToTheRight ? (' ' + styles.disabled) : '');

  const disabledClickHandler = event => event.preventDefault();

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationInner}>
        {isDisabledToTheLeft
          ? <>
            <NavLink className={leftBtnClasses} to={`/users/1`} onClick={disabledClickHandler}>First</NavLink>
            <NavLink className={leftBtnClasses} to={`/users/${currentPageNumber - 1}`} onClick={disabledClickHandler}>Prev</NavLink>
          </>
          : <>
            <NavLink className={leftBtnClasses} to={`/users/1`}>First</NavLink>
            <NavLink className={leftBtnClasses} to={`/users/${currentPageNumber - 1}`}>Prev</NavLink>
          </>}

        <ul className={styles.list}>
          {paginationItems}
        </ul>

        {isDisabledToTheRight
          ? <>
            <NavLink className={rightBtnClasses} to={`/users/${currentPageNumber + 1}`} onClick={disabledClickHandler}>Next</NavLink>
            <NavLink className={rightBtnClasses} to={`/users/${pagesNumber}`} onClick={disabledClickHandler}>Last</NavLink>
          </>
          : <>
            <NavLink className={rightBtnClasses} to={`/users/${currentPageNumber + 1}`}>Next</NavLink>
            <NavLink className={rightBtnClasses} to={`/users/${pagesNumber}`}>Last</NavLink>
          </>
        }

        {isDisabled ? <div className={styles.blockingModal}></div> : null}
      </div>
    </div>
  );
};