import HomeIcon from '@mui/icons-material/Home';
import { iconsSidebarLeft } from '../../helpers/iconsSiderbarLeft';
import NavLink from './siderbarLeftComponents/NavLink';
import TwitterIcon from '@mui/icons-material/Twitter';

const SidebarLeft = ({icon}) => {
  return (
    <div>
      <TwitterIcon />
      <NavLink icon={iconsSidebarLeft[0]}/>
      

    </div>
  )
}

export default SidebarLeft;