import StepItem from '../../molecules/step-item';

const TransactionStep = () => {
  const contentStep = [
    {
      icon: '/icon/step-1.svg',
      title: '1. Start',
      desc1: 'Pilih salah satu game',
      desc2: 'yang ingin kamu top up',
    },
    {
      icon: '/icon/step-2.svg',
      title: '2. Fill Up',
      desc1: 'Top up sesuai dengan',
      desc2: 'nominal yang sudah tersedia',
    },
    {
      icon: '/icon/step-3.svg',
      title: '3. Be a Winner',
      desc1: 'Siap digunakan untuk',
      desc2: 'improve permainan kamu',
    },
  ];
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          {contentStep.map((item: any, i: number) => (
            <StepItem
              key={i}
              icon={item.icon}
              title={item.title}
              desc1={item.desc1}
              desc2={item.desc2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionStep;
