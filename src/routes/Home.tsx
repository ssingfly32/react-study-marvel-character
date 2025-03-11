import { useState, useEffect } from 'react';
import Character from '@/components/Character';
import styles from '@css/Home.module.css';
import Loading from '@components/Loading';
import { RawData } from '@/types/types';

function Home() {
  const [data, setData] = useState<RawData[]>([]);
  const getData = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setData(json.data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.cards}>
      {data.length ? (
        data.map((character) => {
          return (
            <Character
              key={character.id}
              id={character.id}
              name={character.name}
              thumbnail = {`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home;
