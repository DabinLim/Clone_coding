import React from 'react';
import styled from 'styled-components';
import {Grid, Text, Image} from '../elements';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const Post = (props) => {

    return (
        <React.Fragment>
            <Grid flex_column>
                    <DetailContainer>
                    <UserInfo>
                        <Grid flex_row>
                        <Image shape='circle' size='36'></Image>
                    <Text bold> Dabin </Text>
                        </Grid>
                        <Grid width='auto' padding='0px 10px' margin='auto' flex_row flex_detail='justify-contents:center;'>
                            <MoreHorizIcon/>
                        </Grid>

                    </UserInfo>
                    <Grid>
                        <Image shape='rectangle'></Image>
                        <Grid flex_row flex_detail='align-items:center;' padding='4px' height='60px' border>
                            <Grid width='auto' height='auto' margin='0px 8px'>
                            <FavoriteBorderIcon fontSize='large'/>
                            </Grid>
                            <Grid width='auto' height='auto' margin='0px 8px'>
                            <ChatBubbleOutlineIcon fontSize='large'/>
                            </Grid>
                        </Grid>
                        <Grid flex_row flex_detail='align-items:center;' padding='20px' height='60px' border>
                            <Grid flex_column width='80px' height='50px' margin='auto'>
                            <Text NotP bold>Dabin</Text>
                            <Text NotP size='6px'>10분전</Text>
                            </Grid>
                            <Grid height='auto'>
                                <Text>#항해스타그램</Text>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    </DetailContainer>
                </Grid>
        </React.Fragment>
    )
}


const DetailContainer = styled.div`
    padding: 30px 0px;
`;

const UserInfo = styled.div`
    display:flex;
    flex-direction:row;
    border: 1px solid black;
    padding: 15px;
`;

export default Post;