import Dropdown from "./Dropdown";
import HeaderInput from "./Input";

const Header = () => {
  return (
    <div className="transparent-nav">
      <div className="homepage-nav-container">
        <div className="homepage-nav-wrap">
          <div className="homepage-nav-wrap-left-menu">
            <button>
              <svg
                role="img"
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="#FF6719"
                stroke-width="1"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-logo-icon"
              >
                <g>
                  <title></title>
                  <path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"></path>
                  <path d="M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"></path>
                  <path d="M20.9991 0H0V2.83603H20.9991V0Z"></path>
                </g>
              </svg>
            </button>
            <>
              {LeftMenu.map((menu, index) => (
                <Dropdown menu={menu} key={index} />
              ))}
            </>
          </div>

          <div className="homepage-nav-wrap-right-menu">
            <HeaderInput />
            <button className="homepage-nav-wrap-right-menu-write-btn">
              Start Writing
            </button>
            <button className="homepage-nav-wrap-right-menu-sign-in">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const LeftMenu = [
  {
    title: "Resources",
    id: "1",
    items: [
      "How to Start a SubStack",
      "Going Pay Guide",
      "Resources Center",
      "Community & Programs",
      "Help Center",
    ],
  },
  {
    title: "Writers",
    id: "2",
    items: [
      "Switch to Substack",
      "Switch to Revue",
      "Switch from Bulletin",
      "Go paid",
      "For podcasts",
      "For bloggers",
      "For finance",
      "For comic writers",
      "For food writers",
    ],
  },
  {
    title: "Readers",
    id: "3",
    items: ["Discover", "Featured", "Substack Reader"],
  },
];
