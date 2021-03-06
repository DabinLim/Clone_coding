import React from 'react';
import styled from 'styled-components';
import {Grid, Text, Image} from '../elements/index';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Header = (props) => {

    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderContents>
                    <BannerContainer>
                <Banner></Banner>
                    </BannerContainer>
                <TextContainer><Text bold> 여기는 헤더입니다.</Text></TextContainer>
                <IconContainer>
                    <HomeIcon fontSize='large'/>
                    <ExploreIcon fontSize='large'/>
                    <FavoriteBorderIcon fontSize='large'/>
                    <Image shape='circle' size='24'/>
                </IconContainer>
                </HeaderContents>
            </HeaderContainer>
        </React.Fragment>
    )
}

const HeaderContainer = styled.div`
    border:1px solid black;
    width:100%;
    height:55px;
    position:fixed;
    z-index:1;
    background-color:white;
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

const HeaderContents = styled.div`
    max-width:1000px;
    width:100%;
    margin-left:20px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

const BannerContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: flex_start;
`;

const Banner = styled.div`
    background-image:url('https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/instagram.png?alt=media&token=a53527c4-07df-4c3f-ae18-ca30c3e0aa2b');
    min-width:150px;
    min-height:50px;
    background-size:contain;
    background-repeat:no-repeat;
    
`;

const TextContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
`;

const IconContainer = styled.div`
    margin-right:20px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`;


export default Header;