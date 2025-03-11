import styles from '@css/Character.module.css';
import { Link } from 'react-router-dom';
import { CharacterType } from '@/types/types';

function Character({ id, name, thumbnail }: CharacterType) {
  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={`${id}`} />
      <h2>
        <Link to={`/character/${id}`}>{name}</Link>
      </h2>
    </div>
  );
}

export default Character;
