

const Hero = () => {
  return (
    <div className="homepage-container-hero">
      <div className="homepage-container-hero-wrapper">
        <div className="homepage-container-hero-wrapper-hero-text-container">
          <h2>Do your best work, supported by your subscribers</h2>
          <div className="homepage-container-hero-wrapper-hero-text-container-substack">
            Substack lets independent writers and podcasters publish directly to
            their audience and get paid through subscriptions.
          </div>
          <div className="hero-btns">
            <button className="hero-btns-create">Create your Substack</button>
            <button className="hero-btns-read">Find Substacks to read</button>
          </div>
        </div>
      
        <img
          src="https://substackcdn.com/image/fetch/w_1166,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fhome_page%2Fhero_image.png"
          className="frontend-substack-MarketingHero"
          alt="homepage hero image"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
