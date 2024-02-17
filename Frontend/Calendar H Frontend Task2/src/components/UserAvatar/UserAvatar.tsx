import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { Overlay } from "components/Overlay";

const UserAvatar = () => {
  const classes = useStyles();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfile = () => {
    setIsOverlayVisible(true);
    setIsDropdownVisible(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <FontAwesomeIcon
        icon={faUser}
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        size="xl"
      />
      {isDropdownVisible && (
        <div className={classes.avatarsContainer}>
          <ul className={classes.settingsList}>
            <li className={classes.dropdownItem} onClick={handleProfile}>
              Profile
            </li>
            <li className={classes.dropdownItem}>Settings</li>
            <li
              className={classes.dropdownItem}
              onClick={() => {
                navigate("/login");
              }}
            >
              Log Out
            </li>
          </ul>
        </div>
      )}
      {isOverlayVisible && (
        <Overlay onClose={() => setIsOverlayVisible(false)} />
      )}
    </div>
  );
};

export default UserAvatar;
