import { Contacts, ContactsInfo, CopyrightSection, HighlitedColon, Links, Number, Numbers, SocialLinks, StyledFooterContainer, TitlesOfContactInfo } from "./FooterStyles";
import facebook from '../assets/images/footer_icons/facebook_i.png'
import instagram from '../assets/images/footer_icons/instagram_i.png'
import telegram from '../assets/images/footer_icons/telegram_i.png'
import youtube from '../assets/images/footer_icons/youtube_i.png'
import twitter from '../assets/images/footer_icons/twitter_i.png'
import { ListGroup } from "react-bootstrap";

function Footer() {
    return(
        <>
        <StyledFooterContainer>
            <Contacts>
                <h2>Контакти</h2>
                <ContactsInfo>
                    <ListGroup.Item>
                        <TitlesOfContactInfo>
                        Email<HighlitedColon>:</HighlitedColon></TitlesOfContactInfo> logoacademy@gmail.com </ListGroup.Item>
                    
                    <Number>
                        <TitlesOfContactInfo>
                        Телефон<HighlitedColon>  :</HighlitedColon></TitlesOfContactInfo>
                       <Numbers>
                         <Number>+3 80500000005</Number>
                            <Number>+3 80980000005</Number>
                            <Number> +3 80630000005</Number>              
                       </Numbers>
                    </Number>

                    <ListGroup.Item>
                        <TitlesOfContactInfo> Адреса<HighlitedColon>:</HighlitedColon> </TitlesOfContactInfo>
                         м.Київ, вул.Хороброго 5  </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <TitlesOfContactInfo>
                             Соцмережі<HighlitedColon>:</HighlitedColon>
                        </TitlesOfContactInfo>
                       
                           <SocialLinks>
                            <Links><img src={instagram}/></Links>
                            <Links><img src={telegram}/></Links>
                            <Links><img src={youtube}/></Links>
                            <Links><img src={facebook}/></Links>
                            <Links><img src={twitter}/></Links>
                    </SocialLinks>
                      
                 
                    </ListGroup.Item>
                </ContactsInfo>
            </Contacts>
            <CopyrightSection><h4>LOGO</h4><TitlesOfContactInfo>© 
                2024 All rights reserved</TitlesOfContactInfo></CopyrightSection>
        </StyledFooterContainer>
        </>
    )
}

export default Footer;