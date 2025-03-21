import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '@/components/CharacterDetail';
import Loading from '@/components/Loading';
import { RawDetailData } from '@/types/types';

function Detail() {
  const [detail, setDetail] = useState<RawDetailData[]>([]);
  const { id } = useParams<{id: string}>();
  const getDetail = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setDetail(json.data.results);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      {detail.length ? (
        detail.map((data) => {
          return (
            <CharacterDetail
              id={data.id}
              key={data.id}
              name={data.name}
              thumbnail={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              description={data.description}
              series={data.series.items}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Detail;
