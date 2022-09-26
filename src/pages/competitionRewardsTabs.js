import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


// Images
import iframe1 from './../assets/iframe1.jpg'
import iframe2 from './../assets/iframe2.jpg'
import iframe3 from './../assets/iframe3.jpg'
import Smlogin from './../assets/sm.jpg'



export default class CompetitionRewardsTabs extends PureComponent {
    render() {
        return (
            <>
                <Container>
                    <BreadCrumbs>
                        <BreadLinks>Main page</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks>Group rewards</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks>PDO finance</BreadLinks>
                    </BreadCrumbs>
                    
                    <Tabs>
                        <StepNav>
                            <TabList className="mt--10">
                                <Tab><span>Personal Trading competition</span></Tab>
                                <Tab><span>Personal Staking competition</span></Tab>
                                <Tab><span>Group trading competition</span></Tab>
                                <Tab><span>Group staking competition</span></Tab>
                            </TabList>
                        </StepNav>
                        
                        <TabPanel>
                            <StepSec>
                                <div className="">
                                    <div className='font-play text-white-main text-9 md:text-1 text-center'>Personal Trading competition</div>
                                    <div className='text-center font-montserrat mt-2'>
                                        <p className='text-white-2 text-8 mt-7 leading-8'>The personal trading reward is an unlimited dVoucher program, allowing users to earn by utilizing the technology often. As a trader you compete against yourself from the previous month. If you trade more than the previous month, the percentage increase determines your booster. For example, for a 50% increase you end up with 1.5%.</p>
                                        <p className='text-white-2 text-8 mt-7 leading-8'>Cap percentage is set at a 100% booster or 2%.</p>
                                    </div>
                                    <IFrameCol><img src={iframe1}></img>
                                        <button className="btn-golden w-[660px] h-[80px] mt-6 bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-xl uppercase">
                                        <FontAwesomeIcon icon={faLock} className='mr-2' /> Unlock 3 More Entries
                                        <span className="text-xs block normal-case	">Complete the above entries to unlock the rest!</span>
                                        </button>
                                    </IFrameCol>
                                </div>
                            </StepSec>
                        </TabPanel>
                        <TabPanel>
                        <StepSec>
                            <div className="">
                            <div className="flex items-center">
                                <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">2</span>
                                <h2 className="font-play text-white-main text-9 md:text-3xl ml-8">Multiple tasks</h2>
                            </div>
                            <p  className="text-white-2 text-8 mt-7 leading-8">Engaging with Qonetum Foundation social posts needs to be consistent in order to achieve long-term organic growth. Therefore, users are eligible for dVoucher by engaging consistently with Qonetum. </p>
                            <IFrameCol>
                                <img src={iframe2}></img>
                            </IFrameCol>
                            </div>
                        </StepSec>
                        </TabPanel>
                        <TabPanel>
                        <StepSec>
                            <div className="">
                            <div className="flex items-center">
                                <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">3</span>
                                <h2 className="font-play text-white-main text-9 md:text-3xl ml-8">Loyalty Bonus</h2>
                            </div>
                            <p  className="text-white-2 text-8 mt-7 leading-8">The loyalty bonus program incentivizes users to engage with all the Qonetum finance projects</p>
                            <IFrameCol>
                                <img src={iframe3}></img>
                            </IFrameCol>
                            </div>
                        </StepSec>
                        </TabPanel>

                        <TabPanel>
                            <StepSec>
                                <div className="">
                                    <div className="flex items-center">
                                        <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">4</span>
                                        <h2 className="font-play text-white-main text-9 md:text-3xl ml-8">Daily usage</h2>
                                    </div>
                                    <p  className="text-white-2 text-8 mt-7 leading-8">Visit and view Qonetum sites daily to check out new functionalities </p>
                                    <IFrameCol>
                                        <img src={iframe3}></img>
                                    </IFrameCol>
                                </div>
                            </StepSec>
                        </TabPanel>
                    </Tabs>
                </Container>
            </>
        );
    }
}

const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;
const Container = styled.div`
    width:1360px; margin: 0px auto;
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