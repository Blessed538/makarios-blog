import { useState } from "react";

type Props = {
  menu: {
    title: string;
    items: string[];
    id: string;
  };
};

const Dropdown = ({ menu: { title, id, items } }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const openDropdown = () => setOpenMenu(true);
  return (
    <div className="dropdown">
      <button onClick={() => openDropdown()}>
        <span>{title}</span>
        <span className="icon">V</span>
      </button>
      {openMenu && (
        <ul className="dropdown-menu">
          <div className="dropdown-menu-wrapper">
            {items.map((item, index) => (
              <>
                <li>
                  <a
                    href="https://on.substack.com/p/start-a-substack-newsletter"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="underline">{item}</span>
                  </a>
                </li>
              </>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
