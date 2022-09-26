import React from 'react';
import styled from 'styled-components';

const NavBullets = () => {
    const num = [1, 1, 2, 4, 5, 6, 3, 4, 3, 4];
    return (
        <>
            <Bullets>
                <a href="#"><span>Personal rewards</span></a>
                <a href="#"><span>Group rewards</span></a>
                <a href="#"><span>Personal rewards</span></a>
                <a href="#"><span>Personal rewards</span></a>
                <a href="#"><span>Personal rewards</span></a>
                <a href="#"><span>Personal rewards</span></a>
                <a href="#"><span>Personal rewards</span></a>
                <a href="#"><span>Personal rewards</span></a>
            </Bullets>
        </>
    )
}

const Bullets = styled.div `
display: flex; flex-flow: column; position: fixed; left: 50px; top: 50%; transform: translateY(-50%);
    a {
        height: 10px; width: 10px; border-radius: 15px; background: #989898; margin: 10px 0; position: relative;
        span {position: absolute; opacity: 0; top: 50%; padding-left: 24px; transform: translateX(50px) translateY(-50%); color: #e9a134; font-size: 12px; transition: all 0.3s ease-in-out 0s; width: 200px; visibility: hidden;}
        &:hover, &.active {
            background: #e9a134;
            span {transform: translateX(0%) translateY(-50%); opacity: 1; visibility: visible;}
        }
    }
`
export default NavBullets;