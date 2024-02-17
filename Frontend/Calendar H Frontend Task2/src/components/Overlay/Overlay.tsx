import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStyles from "./styles";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUserInfo {
  username: string;
  email: string;
  id: string;
}

const Overlay = ({ onClose }: { onClose: () => void }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState<IUserInfo>({
    username: "",
    email: "",
    id: "",
  });

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("logedUser");
    if (storedUserInfo) {
      const { username, email, id } = JSON.parse(storedUserInfo);
      setUserinfo({
        username,
        email,
        id,
      });
    }
  }, []);

  const deleteUser = () => {
    const storedUsersInfo = localStorage.getItem("usersInfo");

    if (storedUsersInfo) {
      try {
        const users: IUserInfo[] = JSON.parse(storedUsersInfo as string);
        const usersInfo = users.map((user: any) => JSON.parse(user));
        const updatedUsers = usersInfo.filter(
          (user: any) => user.id !== userinfo.id
        );
        localStorage.setItem("usersInfo", JSON.stringify(updatedUsers));
      } catch {
        localStorage.removeItem("usersInfo");
      }
      localStorage.removeItem("logesUser");
      navigate("/login");
    }
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.overlayContent}>
        <div className={classes.usericonContainer}>
          <div className={classes.usericon}>
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
          <div className={classes.userinfo}>
            <span>{userinfo.username}</span>
            <span>{userinfo.email}</span>
          </div>
        </div>
        <div className={classes.overlayButtons}>
          <button
            className={`${classes.overlaybutton} ${classes.deleteButton}`}
            onClick={deleteUser}
          >
            Delete User
          </button>
          <button className={classes.overlaybutton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
