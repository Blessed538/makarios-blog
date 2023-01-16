import Features from "../components/features/Features";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default HomePage;
