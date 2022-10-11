import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";

const NavBullets = () => {
    const num = [1, 1, 2, 4, 5, 6, 3, 4, 3, 4];
    return (
        <>
            <Bullets>
                <NavLink to="/rewards/personal-rewards-tabs"><span>Personal rewards</span></NavLink>
                <NavLink to="/rewards/group-rewards"><span>Group rewards</span></NavLink>
                <NavLink to="/rewards/competition-rewards"><span>Competition rewards</span></NavLink>
                <NavLink to="/rewards/trading-rewards"><span>Trading rewards</span></NavLink>
                <NavLink to="/rewards/staking-rewards"><span>Staking rewards</span></NavLink>
                <NavLink to="/rewards/referralProgram"><span>Referral Program</span></NavLink>
                <NavLink to="/rewards/dead-token-recovery"><span>Dead token recovery</span></NavLink>
                <NavLink to="/rewards/someting5"><span>Personal rewards</span></NavLink>
            </Bullets>
        </>
    )
}

const Bullets = styled.div `
display: flex; flex-flow: column; position: fixed; left: 50px; top: 50%; transform: translateY(-50%);
    @media screen and (max-width: 600px) {
        /* display: none; */
        left: 0;
        top: auto;
        bottom: 0;
        transform: translate(0);
        flex-direction: row;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(2px);
        right: 0;
        justify-content: center;
        z-index: 10;
    }
    a {
        height: 10px; width: 10px; border-radius: 15px; background: #989898; margin: 10px 0; position: relative;
        span {position: absolute; opacity: 0; top: 50%; padding-left: 24px; transform: translateX(50px) translateY(-50%); color: #e9a134; font-size: 12px; transition: all 0.3s ease-in-out 0s; width: 200px; visibility: hidden; font-weight: bold;}
        
        &:hover, &.active {
            background: #e9a134;
            span {transform: translateX(0%) translateY(-50%); opacity: 1; visibility: visible;}
        }
        @media screen and (max-width: 600px) {
            margin: 30px 10px 10px;
            span {transform: translateX(-50%) translateY(0);}
            &:hover, &.active {
                span {transform: translateX(-50%) translateY(0); margin-top: -24px; padding: 0; text-align: center; top: 0;}
            }
        }
    }
`
export default NavBullets;