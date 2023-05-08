import { Link } from "react-router-dom";

import styles from './NotFound.module.css';

const NotFound = () => {

  return (
    <div className={`${styles.notFound} container`}>
      <h2>Oh, No! This page<br /> does not exist.</h2>
      <button type="button">
        <Link to='/'>
          Go back Homepage
        </Link>
      </button>
    </div>
  )
}

export default NotFound;