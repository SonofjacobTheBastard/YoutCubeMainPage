import './MiniSideGuide.css';
import { Placard } from '../../Elements/Placard/Placard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookmark, fas, faVial, faWindowRestore}      from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, faHouse,faBookmark, faWindowRestore,faVial, faBook)


export const MiniSideGuide = (props) => {
    return (
        <div className="MiniSideGuide">
            
      <Placard>
      <FontAwesomeIcon icon="fa-solid fa-house" />
      <p>Home</p>
        </Placard>
      <Placard>
      <FontAwesomeIcon icon="fa-solid fa-window-restore" />
      <p>Explore</p>
        </Placard>
      <Placard>
      <FontAwesomeIcon icon="fa-solid fa-vial" />
      <p>Shorts</p>
        </Placard>
      <Placard>
      <FontAwesomeIcon icon="fa-solid fa-book" />
      <p>Subscriptions</p>
        </Placard>
      <Placard>
      <FontAwesomeIcon icon="fa-solid fa-bookmark" />
      <p>Library</p>
        </Placard>
        </div>
    )
}