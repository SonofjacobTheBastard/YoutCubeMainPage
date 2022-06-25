import './TopBar.css'
import { Placard } from '../../Elements/Placard/Placard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import SearchBar from '../../Elements/SearchBar/SearchBar';
library.add(faBars);

export const TopBar = () =>{
    return (
        <div className="TopBar">
         <Placard>
         <FontAwesomeIcon icon="fa-solid fa-bars" />
         <img alt="Favicon" src='/home/omer/Documents/ReactProjects/yout_cube_main_page/public/wwwroot/images/icon.png'/>
      </Placard>
        <SearchBar/>
        <Placard>
        <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
        <FontAwesomeIcon icon="fa-solid fa-table-cells" />
        <FontAwesomeIcon icon="fa-solid fa-bell" />
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
        </Placard>
        </div>
    )
}