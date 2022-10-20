import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


// Images
import Reward1 from './../assets/1reward.png'
import Reward2 from './../assets/2reward.png'
import Reward3 from './../assets/3reward.png'



export default class ReferralProgramPdo extends PureComponent {
    render() {
        return (
            <>
                <Container>
                    <BreadCrumbs>
                        <BreadLinks href="/">Main page</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks href="/rewards/referral-program">Referral program</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks href="/rewards/referral-program-pdo">PDO finance</BreadLinks>
                    </BreadCrumbs>
                    
                    <StepSec>
                        <div className="">
                            <div className='font-play text-white-main text-9 md:text-1 text-center wow fadeInUp' data-wow-delay="0.1s">Referral program</div>
                            <div className='text-center font-montserrat mt-2 wow fadeInUp' data-wow-delay="0.3s">
                                <p className='text-white-2 text-8 mt-7 leading-8'>The referral program reward is an unlimited dVoucher program, encouraging sharing Qonetum Finance with friends. When new users access Qonetum Finance through a referral link they need to complete personal tasks for the reward to be distributed. Referrers are rewarded with an equal amount of dVouchers that the referral receives through completing all Personal Limited dVouchers Reward. So there is incentive to help referrals complete as many tasks as possible. </p>
                                <p className='text-white-2 text-8 mt-7 leading-8'>Referral program is limited to the Personal Limited dVouchers Reward program.</p>
                            </div>
                            <div className='max-w-2xl mt-14 mx-auto wow fadeInUp' data-wow-delay="0.5s">
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
                                            <Tcell><img src={Reward1}></img></Tcell>
                                            <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                            <Tcell className="txt-yellow">+1000</Tcell>
                                        </tr>
                                        <tr>
                                            <Tcell><img src={Reward2}></img></Tcell>
                                            <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                            <Tcell className="txt-yellow">+2000</Tcell>
                                        </tr>
                                        <tr>
                                            <Tcell><img src={Reward3}></img></Tcell>
                                            <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                            <Tcell className="txt-yellow">+2000</Tcell>
                                        </tr>
                                        <tr>
                                            <Tcell>4</Tcell>
                                            <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                            <Tcell className="txt-yellow">+2000</Tcell>
                                        </tr>
                                        <tr>
                                            <Tcell>5</Tcell>
                                            <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                            <Tcell className="txt-yellow">+2000</Tcell>
                                        </tr>
                                        <tr>
                                            <Tcell>6</Tcell>
                                            <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                            <Tcell className="txt-yellow">+2000</Tcell>
                                        </tr>
                                        <tr>
                                            <Tcell>7</Tcell>
                                            <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                            <Tcell className="txt-yellow">+2000</Tcell>
                                        </tr>
                                        <tr>
                                            <Tcell>8</Tcell>
                                            <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                            <Tcell className="txt-yellow">+2000</Tcell>
                                        </tr>
                                        <tr>
                                            <Tcell>9</Tcell>
                                            <Tcell className="txt-blue">0x084.....6a80</Tcell>
                                            <Tcell className="txt-yellow">50,000</Tcell>
                                        </tr>
                                        <tr>
                                            <Tcell>10</Tcell>
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
                    </StepSec>
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

const StepNav = styled(FlexDiv)`
  font-size: 14px; 
  ul {display: flex;}
  li {list-style: none; padding: 0; margin: 0; display: flex; color: #989898; font-weight: bold;
    /* &:before {content: "|"; padding: 0 10px; color: #2a2a2a; font-weight: bold; pointer-events: none;} */
    border-left: 1px solid #2a2a2a; padding: 0 10px; line-height: 1;
    &:first-child {/* display: none; */ border-left: 0 solid #2a2a2a;}
    &:focus {outline: none;}
    &:hover, &.react-tabs__tab--selected {color: #fff; 
      span {&:after {opacity: 1;}}
    }
    span {position: relative; 
      &:after {content: ""; height: 1px; background: #e9a134; width: 100%; display: block; opacity: 0; margin: 4px 0 0;}
    }
  }
`
const StepSec = styled.section `
  margin-top: 88px;
`
const IFrameCol = styled(FlexDiv) `
  margin: 60px 0 0; flex-flow: column;
`
const MsgBox = styled.section `
    background-color: #000; width: 664px; display: table; margin: 0px auto; color: #fff; font-weight: bold; font-size: 14px; padding: 22px 33px 33px;
    .btn-teal {background-color: #4edd9e;}
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