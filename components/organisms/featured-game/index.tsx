import GameItem from '../../molecules/game-item';

const FeaturedGame = () => {
  const listGame = [
    {
      thumbnail: 'Thumbnail-1',
      title: 'Super Mechs',
      platform: 'Mobile',
    },
    {
      thumbnail: 'Thumbnail-2',
      title: 'Call of Duty: Modern',
      platform: 'Mobile',
    },
    {
      thumbnail: 'Thumbnail-3',
      title: 'Mobile Legends',
      platform: 'Mobile',
    },
    {
      thumbnail: 'Thumbnail-4',
      title: 'Clash of Clans',
      platform: 'Mobile',
    },
    {
      thumbnail: 'Thumbnail-5',
      title: 'Valorant',
      platform: 'Mobile',
    },
  ];

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
          {listGame.map((item: any, i: number) => (
            <GameItem
              key={i}
              thumbnail={item.thumbnail}
              title={item.title}
              platform={item.platform}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;
