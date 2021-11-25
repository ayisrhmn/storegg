import ReachedItem from './reached-item';

const Reached = () => {
  const reachData = [
    {
      value: '290M+',
      title: 'Players Top Up',
    },
    {
      value: '12.500',
      title: 'Games Available',
    },
    {
      value: '99,9%',
      title: 'Happy Players',
    },
    {
      value: '4.7',
      title: 'Rating Worldwide',
    },
  ];

  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          {reachData.map((item: any, i: number) => (
            <ReachedItem
              key={i}
              index={i}
              dataLength={reachData.length - 1}
              setMargin={i === 0 ? false : true}
              value={item.value}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reached;
