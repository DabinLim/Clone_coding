import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {

    return(
    <React.Fragment>

    </React.Fragment>
    )
}

Grid.defaultProps = {
    width:'100%',
    height:'100%',
    padding: false,
    margin: false,
    bg_color: false,
    flex_row: false,
    flex_column: false,
}

const GridBox = styled.div`
    width:${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing:border-box;
    ${(props) => props.padding? `padding:${props.padding}` : ''};
    ${(props) => props.margin? `margin:${props.margin}` : ''};
    ${(props) => props.flex_row? `display:flex; flex-direction:row; align-itmes:center; justify-content:space-between;`: ''};
    ${(props) => props.flex_column? `display:flex; flex-direction:column; align-itmes:center; justify-content:space-between;`: ''};
    ${(props) => props.center? `text-align: center;`: ''};
`;

export default Grid