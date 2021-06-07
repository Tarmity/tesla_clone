import React from 'react'
import styled from 'styled-components';

function Section() {
    return (
        <Container bgImage={""}>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delvery</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>Custom Order</LeftButton>
                <RightButton>Existing Invertory</RightButton>
            </ButtonGroup>
            <DownArrow src = "./images/down-arrow.svg" />
        </Container>
    )
}

export default Section;

const Container = styled.div`
    background-color: blue;
    width: 100%;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
`
const ButtonGroup =styled.div`
    display: flex;
    margin-bottom: 30px;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
   background-color: white;
   color: black;
   opacity: 0.65;
`

const DownArrow = styled.img`
    height: 40px;
    
`