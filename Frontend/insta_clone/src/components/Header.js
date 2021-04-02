import React from 'react';
import styled from 'styled-components';
import {Grid, Text} from '../elements/index';

const Header = (props) => {

    return (
        <React.Fragment>
            <Grid center>
            <Text bold>
            여기는 헤더입니다.
            </Text>
            </Grid>
        </React.Fragment>
    )
}

export default Header;