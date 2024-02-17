import { UserAvatar } from "components/UserAvatar";
import useStyles from "./styles"

const Header = () => {
    const clases = useStyles();
  return (
    <div className={clases.headerContainer}>
        <h2 className={clases.label}>Calendar H</h2>
        <UserAvatar />
    </div>
  )
}

export default Header