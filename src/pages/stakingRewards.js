import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import AppBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


// Images




export default class StakingRewards extends PureComponent {
    render() {
        return (
            <>
                <Container>
                    <BreadCrumbs>
                        <BreadLinks>Main page</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks>Staking rewards</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks>PDO finance</BreadLinks>
                    </BreadCrumbs>
                    <div className='mt-14  wow zoomIn' data-wow-delay="0.1s">
                        <div className='font-play text-white-main text-9 md:text-1 text-center '>staking rewards</div>
                        <div className='text-center font-montserrat mt-2' >
                            <p className='text-white-2 text-8 mt-7 leading-8'>The trading reward is an individual unlimited dVoucher program, allowing users to earn by utilizing the technology often. As a trader you will earn $10 dVoucher for $100 value trading volume. Also, each dVoucher earned qualifies as an entry into the monthly lottery jackpot. </p>
                        </div>
                    </div>
                    <div className='font-play text-white-main mt-8 text-9 md:text-1 text-center wow fadeInUp' data-wow-delay="0.4s">153.16% APY</div>
                    <CounterMain>
                        <div className="wow fadeInLeft md:border-r mb-6 md:mb-0 border-solid border-zinc-800" data-wow-delay="0.6s">
                            <p className="text-white-main text-center text-2xl font-bold leading-8">Your last month staking</p>
                            <Rvoucher className="silver">
                                <span>$</span>  
                                <span>1</span>  
                                <span>4</span> 
                                <span>5</span>,    
                                <span>4</span>    
                                <span>5</span>    
                                <span>5</span>. 
                                <span>6</span>    
                                <span>3</span>
                            </Rvoucher>
                        </div>
                        <div className="wow fadeInRight relative" data-wow-delay="0.6s">
                            <p className="text-white-main text-center text-2xl font-bold leading-8">Your current month staking </p>
                            <Rvoucher>
                                <span>$</span>  
                                <span>1</span>  
                                <span>7</span>
                                <span>5</span>,   
                                <span>6</span>    
                                <span>8</span>   
                                <span>9</span>.    
                                <span>8</span>
                                <span>6</span>
                            </Rvoucher>
                            
                        </div>
                    </CounterMain>
                </Container>
            </>
        );
    }
}

const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;
const Container = styled.div`
    width:1360px; margin: 0px auto;  max-width:100%; padding: 0 20px;
`
const BreadCrumbs = styled.div`
    color: #989898; margin-bottom: 50px;
    svg {margin-right: 11px;}
`
const BreadLinks = styled.a`
    margin-right: 11px; color: #989898;
    &:after {content:"";}
    &:last-child {color: #e9a134;}
`

const CounterMain = styled.div`
    display: flex; align-items: center; justify-content: center; margin-top: 30px;
    @media screen and (max-width: 1000px) {
        flex-flow: column;
    }
    @media screen and (max-width: 600px) {
        overflow: hidden; zoom: 90%;
    }
`
const Rvoucher = styled(FlexDiv) `
    font-size:38px; font-weight:400; font-family: "Mandatory Plaything"; color: #fff; line-height: 62px; margin: 19px 0 0 0; padding: 0 52px; flex-flow: row;
    span{ display: inline-block; position: relative; z-index: 2; border:2px solid #e9a134; width:52px; height: 62px; text-align:center; margin:0 4px; background: linear-gradient(180deg, #121212, #444444, #121212); box-shadow: inset 0 0 10px rgba(0,0,0,0.47), 0 0 15px rgba(233,161,52,0.40); position: relative; 
    &:after {content: ""; position: absolute; z-index: -1; top: 50%; left: 0; right: 0; border: 1px solid #1f1f1f; box-shadow: 0 1px 0 #585858;}}

    &.silver {
        color: #989898;
        span {border:2px solid #989898; box-shadow: inset 0 0 10px rgba(0,0,0,0.47), 0 0 15px rgba(152,152,152,0.40); color: #989898;}
    }
    @media screen and (max-width: 800px) {
        font-size: 20px;
        span {
            width: 35px; height: 46px; line-height: 46px;
        }
    }
    @media screen and (max-width: 480px) {
        zoom: 90%; padding: 0 0px;
    }
`
const Rtimer = styled.div `
    color: #989898; text-align: center; font-size: 12px; position: absolute; top: 100%; right: 0; left: 0; padding: 15px 0 0; 
    b {color: #ffffff;}
`