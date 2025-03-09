import styles from '../css/Character.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Character({ id, name, thumbnail }) {
  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={id} />
      <h2>
        <Link to={`/character/${id}`}>{name}</Link>
      </h2>
    </div>
  );
}

Character.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Character;
