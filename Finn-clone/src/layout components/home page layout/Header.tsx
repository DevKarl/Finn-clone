import { Link } from 'react-router-dom';
import { SmallFinnLogo } from '../../assets/header/SmallFinnLogo';
import { NotificationBell } from '../../assets/header/NotificationBell';
import { AddNewAdIcon } from '../../assets/header/AddNewAdIcon';
import { MessagesIcon } from '../../assets/header/MessagesIcon';
import { ProfileLoginIcon } from '../../assets/header/ProfileLoginIcon';
import { CSSProperties } from 'styled-components';


const Header = () => {

    const navBarStyle: CSSProperties = {
        height: '45px', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid #ccc',
    }


    return(
            <header>
                <nav style={navBarStyle}>
                    <Link to='/' style={{marginLeft: '10px'}}>
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
                    <Link to='my-finn' style={{marginRight: '30px'}}>
                        <ProfileLoginIcon/>
                    </Link>
                </nav>
            </header>
    )
}

export default Header;