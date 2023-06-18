import { SmallFinnLogo } from '../../../assets/header/SmallFinnLogo';
import { NotificationBell } from '../../../assets/header/NotificationBell';
import { AddNewAdIcon } from '../../../assets/header/AddNewAdIcon';
import { MessagesIcon } from '../../../assets/header/MessagesIcon';
import { ProfileLoginIcon } from '../../../assets/header/ProfileLoginIcon';
import { StyledNavBar, StyledHeader, StyledLink } from './Header.styles';

const Header = () => {

    return(
        <>
            <StyledHeader>
                <StyledNavBar>
                    <StyledLink to='/'>
                        <SmallFinnLogo/>
                    </StyledLink>
                    <StyledLink to='notifications'>
                        <NotificationBell/>
                    </StyledLink>
                    <StyledLink to='add-new-ad'>
                        <AddNewAdIcon/>
                    </StyledLink>
                    <StyledLink to='messages'>
                        <MessagesIcon/>
                    </StyledLink>
                    <StyledLink to='my-finn'>
                        <ProfileLoginIcon/>
                    </StyledLink>
                </StyledNavBar>
            </StyledHeader>
        </>
    )
}

export default Header;