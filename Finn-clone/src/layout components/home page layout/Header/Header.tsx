import { SmallFinnLogo } from '../../../assets/header/SmallFinnLogo';
import { BigFinnLogo } from '../../../assets/header/BigFinnLogo'
import { NotificationBell } from '../../../assets/header/NotificationBell';
import { AddNewAdIcon } from '../../../assets/header/AddNewAdIcon';
import { MessagesIcon } from '../../../assets/header/MessagesIcon';
import { ProfileLoginIcon } from '../../../assets/header/ProfileLoginIcon';
import { 
    StyledNavBar, 
    StyledHeader, 
    StyledLink, 
    StyledDesktopHeaderText, 
    StyledDesktopLinkWrapper,
} from './Header.styles';
import { useMediaQuery } from 'react-responsive';


const Header = () => {

    const isBiggerThanMobile = useMediaQuery({query: '(min-width: 600px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 786px)'});

    return(
        <>
            {!isDesktop ?

                <StyledHeader>
                    <StyledNavBar>
                        <StyledLink to='/'>
                            {!isBiggerThanMobile ? <SmallFinnLogo/> : <BigFinnLogo/>}
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

                :

                <StyledHeader>
                    <StyledNavBar>
                            <div>
                                <StyledLink to='/'>
                                    {!isBiggerThanMobile ? <SmallFinnLogo/> : <BigFinnLogo/>}
                                    {isDesktop && <StyledDesktopHeaderText>Mulighetenes marked</StyledDesktopHeaderText>}
                                </StyledLink>
                            </div>
                            <StyledDesktopLinkWrapper>
                                <StyledLink to='notifications'>
                                    <NotificationBell/>
                                    {isDesktop && <StyledDesktopHeaderText>Varslinger</StyledDesktopHeaderText>}
                                </StyledLink>
                                <StyledLink to='add-new-ad'>
                                    <AddNewAdIcon/>
                                    {isDesktop && <StyledDesktopHeaderText>Ny annonse</StyledDesktopHeaderText>}
                                </StyledLink>
                                <StyledLink to='messages'>
                                    <MessagesIcon/>
                                    {isDesktop && <StyledDesktopHeaderText>Meldinger</StyledDesktopHeaderText>}
                                </StyledLink>
                                <StyledLink to='my-finn'>
                                    <ProfileLoginIcon/>
                                    {isDesktop && <StyledDesktopHeaderText>Min FINN</StyledDesktopHeaderText>}
                                </StyledLink>
                            </StyledDesktopLinkWrapper>
                    </StyledNavBar>
            </StyledHeader>
            }
        </>
    )
}

export default Header;