import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === 'circle'){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === 'rectangle'){
        return (
            <AspectOutter>
                <AspectInner {...styles}>

                </AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = {
    shape:'circle',
    src: 'https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.jpeg?alt=media&token=aa5058f2-2495-4ef3-acde-b30699096de9',
    size: 36,
}

const ImageDefault = styled.div `
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);

    background-image: url('${(props) => props.src}');
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url('${(props) => props.src}');
    background-size: cover;
    margin: 4px;
`;

const AspectOutter = styled.div`
    width: auto;
    min-width: 250px;

`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url('${(props) => props.src}');
    background-size:contain;
    background-repeat:no-repeat;
`;

export default Image;