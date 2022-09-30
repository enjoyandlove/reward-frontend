import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import AppBar from './../components/AppBar/AppBar2';
import Footer02 from './../components/Footer/Footer02';

// Images
import MainBg from './../assets/main-bg.jpg';


// Images
import Reward1 from './../assets/1reward.png'
import Reward2 from './../assets/2reward.png'
import Reward3 from './../assets/3reward.png'



export default class StakingRewards extends PureComponent {
    render() {
        return (
            <>
                <div className='background'>
                    <AppBar />
                    <MainContainer>
                        <Container className="pt-10">
                            <div className='mt-14'>
                                <div className='font-play text-white-main text-9 md:text-1 text-center'>Last month winner</div>
                                <div className='text-white-main text-center text-2xl font-bold leading-8 mt-4'>Winning entries</div>
                                <div className="max-w-2xl mt-[80px] mx-auto">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <Thd className="w-[10%]"></Thd>
                                                <Thd className="text-left">Wallet address</Thd>
                                                <Thd className="text-right">dVoucher</Thd>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <Tcell className="text-center"><img src={Reward1}></img></Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">+1000</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell className="text-center"><img src={Reward2}></img></Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">+2000</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell className="text-center"><img src={Reward3}></img></Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">+2000</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell className="text-center">4</Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">+2000</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell className="text-center">5</Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">+2000</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell className="text-center">6</Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">+2000</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell className="text-center">7</Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">+2000</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell className="text-center">8</Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">+2000</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell className="text-center">9</Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">50,000</Tcell>
                                            </tr>
                                            <tr>
                                                <Tcell className="text-center">10</Tcell>
                                                <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                                <Tcell className="txt-yellow">+2000</Tcell>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Tfooter>
                                        <div>Page 
                                            <SelectCustom>
                                                <select>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </SelectCustom>
                                            result 1-10 of 300</div>   
                                    </Tfooter>
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
    width:1360px; margin: 0px auto;
    .border-zinc-900 {border-color: #363636;}
`
const Table = styled.table `
    width: 100%;
    tr:hover { background: #191a22;}
`
const Thd = styled.th `
    font-size: 14px; color: #989898; padding: 12px 18px; border-top: 2px solid #262626; border-bottom: 2px solid #262626; font-weight: 700; max-width: 25%; background-color: #080808; 
    & + th {
        border-left: 1px solid #262626
    }
`
const Tcell = styled.td `
    font-size: 14px; color: #fff; max-width: 25%; padding: 12px 18px; border-bottom: 1px solid #262626; position: relative;
    & + td {
        border-left: 1px solid #262626
    }
    &.txt-blue {color: #4557ff;}
    &.txt-yellow {color: #e9a134; font-weight: bold; text-align: right;}
`

const Tfooter = styled.div `
    display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: #aaaaaa; padding: 16px 0 0;
    
    p {color: #3b3e4b;}
    a {color: #aaa; margin: 0 10px;}
    a:hover {color: #91dc27;}
`
const SelectCustom = styled.div `
    display: inline-block; position: relative; margin: 0 10px;
    select {background: #262626; min-width: 65px; color: #fff; font-size: 14px; border: 0; height: 30px;  border-radius: 0; padding: 0 10px;   appearance: none;}
    &:after {
        content: "\f0d7"; font-family: "Font Awesome 5 Free"; color: #aaa; font-weight: 900; position: absolute; right: 5px; top: 8px;
    }
`