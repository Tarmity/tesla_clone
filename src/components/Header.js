import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" />
            </a>
            <MenuGroup>
                <div>Model S</div>
                <div>Model X</div>
                <div>Model Y</div>
            </MenuGroup>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <MenuIcon>
                     
                </MenuIcon>
            </RightMenu>
        </Container>
    )
}

export default Header;


const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`

const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div {
        font-weight: 600;
        padding: 0 10px;
        cursor: pointer;
    }
`

const RightMenu = styled.div`
    display: flex;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;
    }
`