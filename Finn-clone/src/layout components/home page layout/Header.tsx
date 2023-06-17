import { Link } from 'react-router-dom';
import { SmallFinnLogo } from '../../assets/header/SmallFinnLogo';
import { NotificationBell } from '../../assets/header/NotificationBell';
import { AddNewAdIcon } from '../../assets/header/AddNewAdIcon';
import { MessagesIcon } from '../../assets/header/MessagesIcon';
import { ProfileLoginIcon } from '../../assets/header/ProfileLoginIcon';


const Header = () => {

    return(
            <header>
                <nav style={{height: '45px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottom: '1px solid #ccc'}}>
                    <Link to='/'>
                        <SmallFinnLogo/>
                    </Link>
                    <Link to='notifications'>
                        <NotificationBell/>
                    </Link>
                    <Link to='add-new-ad'>
                        <AddNewAdIcon/>
                    </Link>
                    <Link to='messages'>
                        <MessagesIcon/>
                    </Link>
                    <Link to='my-finn'>
                        <ProfileLoginIcon/>
                    </Link>
                </nav>
            </header>
    )
}

export default Header;