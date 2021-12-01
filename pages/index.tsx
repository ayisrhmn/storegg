import React from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/navbar';
import MainBanner from '../components/organisms/main-banner';
import TransactionStep from '../components/organisms/transaction-step';
import FeaturedGame from '../components/organisms/featured-game';
import Reached from '../components/organisms/reached';
import Story from '../components/organisms/story';
import Footer from '../components/organisms/footer';

const Home = () => {
  React.useEffect(() => {
    AOS.init();

    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
