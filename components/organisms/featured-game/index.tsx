import React from 'react';
import GameItem from '../../molecules/game-item';
import {getFeaturedGame} from '../../../services/player';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeaturedGame = () => {
  const [gameList, setGameList] = React.useState([]) as any;

  React.useEffect(() => {
    getData();

    return () => {};
  }, []);

  const getData = async () => {
    await getFeaturedGame().then((res) => {
      if (res.error) {
        toast.error(res.message);
      } else {
        setGameList(res.data);
      }
    });
  };

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up">
          {gameList.map((item: any, i: number) => (
            <GameItem
              key={i}
              id={item._id}
              thumbnail={item.thumbnail}
              title={item.gameName}
              platform={item.category.name}
            />
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default FeaturedGame;
