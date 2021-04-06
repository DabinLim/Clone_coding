import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const {flex_row, flex_column, width, height,min_height,max_height,min_width,max_width, margin, padding, bg_color, children, center, flex_detail, border, _onClick} = props;

    const styles = {
        flex_row,
        flex_column,
        width,
        height,
        min_height,
        max_height,
        min_width,
        max_width,
        margin,
        padding,
        bg_color,
        center,
        flex_detail,
        border


    }

    return(
    <React.Fragment>
        <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </React.Fragment>
    )
}

Grid.defaultProps = {
    width:'100%',
    height:'100%',
    max_width:false,
    min_width:false,
    max_height:false,
    min_height:false,
    padding: false,
    margin: false,
    bg_color: false,
    flex_row: false,
    flex_column: false,
    center: false,
    flex_detail: false,
    border: false,
    _onClick:()=>{},
    
}

const GridBox = styled.div`
    width:${(props) => props.width};
    max-width:${(props) => props.max_width};
    min-width:${(props) => props.min_width};
    height: ${(props) => props.height};
    max-height: ${(props) => props.max_height};
    min-height: ${(props) => props.min_height};
    box-sizing:border-box;
    ${(props) => props.border? `border: 1px solid #dbdbdb`: ''};
    ${(props) => props.padding? `padding:${props.padding}` : ''};
    ${(props) => props.margin? `margin:${props.margin}` : ''};
    ${(props) => props.bg_color? `background-color:${props.bg_color}` : ''};
    ${(props) => props.flex_row? `display:flex; flex-direction:row; ${props.flex_detail}`: ''};
    ${(props) => props.flex_column? `display:flex; flex-direction:column; ${props.flex_detail}`: ''};
    ${(props) => props.center? `text-align: center;`: ''};
`;

export default Grid;