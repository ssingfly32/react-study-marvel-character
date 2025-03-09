import { Link } from 'react-router-dom';
import styles from '../css/Character.module.css';
import PropTypes from 'prop-types';

function CharacterDetail({ id, name, thumbnail, description, series }) {
  return (
    <div>
      <div className={styles.detail}>
        <div className={styles.overview}>
          <img src={thumbnail} alt={id} />
          <div className={styles.description}>
            <h1>{name}</h1>
            <h2>Description</h2>
            <div>{description ? description : 'No description'}</div>
          </div>
        </div>
        <h2>Series</h2>
        <ul>
          {series.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.back_link}>
        <Link to="/">go home</Link>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  series: PropTypes.string.isRequired,
};

export default CharacterDetail;
