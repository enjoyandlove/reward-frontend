import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import AppBar from './../components/AppBar/AppBar2';
import Footer02 from './../components/Footer/Footer02';

// Images
import MainBg from './../assets/main-bg.jpg';



export default class StakingRewards extends PureComponent {
    render() {
        return (
            <>
                <div className='background'>
                    <AppBar />
                    <MainContainer className="flex items-center">
                        <Container className="pt-10">
                            <div className='mt-14'>
                                <div className='font-play text-white-main text-9 md:text-1 text-center wow fadeInUp' data-wow-delay="0.1s">apply for sponsorship</div>
                                <div className='text-center font-montserrat mt-2'>
                                    <p className='text-white-2 text-8 mt-7 leading-8 wow fadeInUp' data-wow-delay="0.1s">Running event and need a sponsorship to increase awareness and participants? Apply for dVocuher awards</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3">
                                            <TextBlock className='wow bounceIn' data-wow-delay="0.4s">
                                            <p>Up to <span>$10,000</span></p>
                                            <p>Small events like AMAs</p> 
                                        </TextBlock>
                                            <TextBlock className='wow bounceIn' data-wow-delay="0.6s">
                                            <p>Up to <span>$50,000</span></p>
                                            <p>Medium events like virtual community meetup</p> 
                                        </TextBlock>
                                            <TextBlock className='wow bounceIn' data-wow-delay="0.8s">
                                            <p>Up to <span>$100,000</span></p>
                                            <p>Big events like conference & expo summits 
                                            in person </p> 
                                        </TextBlock>
                                    </div>
                                    <button class="btn-golden shadow-lg mt-10 w-full py-4 md:w-[660px] md:h-[80px] bg-yellow-main border-2 border-solid bg-opacity-0 text-slate-50 font-bold text-xl uppercase  wow fadeInUp" data-wow-delay="0.9s">APPLY FOR SPONSORSHIP</button>
                                </div>
                            </div>
                        </Container>
                    </MainContainer>
                    <Footer02 />
                </div>
            </>
        );
    }
}

const MainContainer = styled.div`
    background: url(${MainBg}) center 250px no-repeat; padding-bottom: 80px; min-height: calc(100vh - 200px)
`
const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;
const Container = styled.div`
    width:1360px; margin: 0px auto;  max-width:100%; padding: 0 20px;
    .border-zinc-900 {border-color: #363636;}
`   
const Table = styled.table `
    width: 100%;
    tr:hover { background: #191a22;}
`
const Thd = styled.th `
    font-size: 14px; color: #989898; padding: 6px 18px; border-top: 2px solid #262626; border-bottom: 2px solid #262626; font-weight: 700; max-width: 25%; background-color: #080808; text-align: left;
    & + th {
        border-left: 1px solid #262626
    }
    img {display: inline-block; vertical-align: middle; margin-right: 10px}
`
const Tcell = styled.td `
    font-size: 14px; color: #fff; max-width: 25%; padding: 12px 18px; border-bottom: 1px solid #262626; position: relative;
    & + td {
        border-left: 1px solid #262626
    }
    &.txt-blue {color: #4557ff;}
    &.color-bronze {color: #dea695;}
    &.color-silver { color: #989898;}
    &.color-gold { color: #e9a134; }
    &.color-platinum {color: #c9c9c9;}
    &.color-offwhite {color: #fefefe;}
`

const Form = styled.form `
    margin-bottom: 70px;
    p {font-size: 12px; color: #989898; margin-top: 5px; display: table;
        a {color: #e9a134;}
        span {color: #fff;}
    }
`
const TextBlock = styled.div `
    padding: 70px 20px 50px;
    @media screen and (max-width: 600px) {
        padding: 50px 20px 0px;
    }
    p {color: #989898; font-size: 18px; margin-bottom: 10px;}
    span {font-size: 30px; color: #fff; font-weight: 800;}
`