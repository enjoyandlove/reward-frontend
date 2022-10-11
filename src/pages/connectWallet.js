import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import AppBar from './../components/AppBar/AppBar2';
import Footer02 from './../components/Footer/Footer02';


// Images
import MainBg from './../assets/main-bg.jpg'
import platinum from './../assets/platinum.png'
import silver from './../assets/silver.png'
import bronze from './../assets/bronze.png'
import gold from './../assets/gold.png'
import megalottery from './../assets/megalottery.png'



export default class StakingRewards extends PureComponent {
    state = {
		shown: true,
	};
    render() {
        return (
            <>
                <div className='background'>
                    <AppBar />
                    <MainContainer className="flex items-center">
                        <Container className="py-[10%] ">
                            <div className='mt-14'>
                                <div className='font-play text-white-main text-9 md:text-1 text-center wow fadeInDown' delay="0.1s">check your lottery rewardS</div>
                                <button className={`btn-silver shadow-lg table px-3 py-4 w-full md:w-[660px] md:h-[80px] mx-auto mt-12 bg-yellow-main border-2 border-solid bg-opacity-0 text-slate-50 font-bold text-xl uppercase mb-8 wow fadeInUp ${this.state.shown ? '' : 'hidden'}`}  delay="0.1s" onClick={() => this.setState({ shown: !this.state.shown })}>CONNECT YOUR WALLET</button>
                                <ScrolableTable className="mt-12">
                                    <Table className={`${this.state.shown ? 'hidden' : ''}`}>
                                        <thead>
                                            <tr>
                                                <Thd className="w-[16.66%]"></Thd>
                                                <Thd className="w-[16.66%]"><img src={bronze}></img>Bronze</Thd>
                                                <Thd className="w-[16.66%]"><img src={silver}></img>Silver</Thd>
                                                <Thd className="w-[16.66%]"><img src={gold}></img>Gold</Thd>
                                                <Thd className="w-[16.66%]"><img src={platinum}></img>Platinum</Thd>
                                                <Thd className="w-[16.66%]"><img src={megalottery}></img>Mega Lottery</Thd>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <Tcell>Your lottery tickets</Tcell>
                                                <Tcell className="color-bronze">5 dVouchers</Tcell>
                                                <Tcell className="color-silver">2 dVouchers</Tcell>
                                                <Tcell className="color-gold">10 dVouchers</Tcell>
                                                <Tcell className="color-platinum">2 dVouchers</Tcell>
                                                <Tcell className="color-offwhite">19 dVouchers</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell>Your lottery winnings </Tcell>
                                                <Tcell className="color-bronze">$22 dVouchers</Tcell>
                                                <Tcell className="color-silver">$250 dVouchers</Tcell>
                                                <Tcell className="color-gold">$100 dVouchers</Tcell>
                                                <Tcell className="color-platinum">0 dVouchers</Tcell>
                                                <Tcell className="color-offwhite">$5,000 dVouchers</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell> </Tcell>
                                                <Tcell><a href="#" class="btn-bronze inline-flex items-center justify-center w-full h-[34px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-sm uppercase">Claim</a></Tcell>
                                                <Tcell> </Tcell>
                                                <Tcell><a href="#" class="btn-gold inline-flex items-center justify-center w-full h-[34px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-sm uppercase">Claim</a></Tcell>
                                                <Tcell> </Tcell>
                                                <Tcell><a href="#" class="btn-white inline-flex items-center justify-center w-full h-[34px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-sm uppercase">Claim</a></Tcell>
                                            </tr>
                                            
                                        </tbody>
                                    </Table>
                                </ScrolableTable>
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
    width:1360px; margin: 0px auto; max-width:100%; padding: 0 20px;
`   
const Table = styled.table `
    width: 100%;
    tr:hover { background: #191a22;}
`
const Thd = styled.th `
    font-size: 14px; color: #989898; padding: 6px 18px; border-top: 2px solid #262626; border-bottom: 2px solid #262626; font-weight: 700; max-width: 25%; background-color: #080808; text-align: left;
    & + th {
        border-left: 1px solid #262626;
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
const ScrolableTable = styled.div `
    overflow: auto; max-width: 100%;
    table {min-width: 1200px;}
`