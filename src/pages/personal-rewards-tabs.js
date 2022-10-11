import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import AppBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


// Images
import project1 from './../assets/rewards/project1.png'
import project2 from './../assets/rewards/project2.png'
import project3 from './../assets/rewards/project3.png'
import project4 from './../assets/rewards/project4.png'
import project5 from './../assets/rewards/project5.png'
import project6 from './../assets/rewards/project6.png'
import project7 from './../assets/rewards/project7.png'
import project8 from './../assets/rewards/project8.png'
import project9 from './../assets/rewards/project9.png'
import project10 from './../assets/rewards/project10.png'
import project11 from './../assets/rewards/project11.png'
import project12 from './../assets/rewards/project12.png'
import project13 from './../assets/rewards/project13.png'
import project14 from './../assets/rewards/project14.png'
import project15 from './../assets/rewards/project15.png'
import project16 from './../assets/rewards/project16.png'
import project17 from './../assets/rewards/project17.png'
import project18 from './../assets/rewards/project18.png'
import project19 from './../assets/rewards/project19.png'

import iframe1 from './../assets/iframe1.jpg'
import iframe2 from './../assets/iframe2.jpg'
import iframe3 from './../assets/iframe3.jpg'
import iframe4 from './../assets/iframe4.jpg'
import Smlogin from './../assets/sm.jpg'



export default class PersonalRewards extends PureComponent {
    state = {
		shown: true,
	};
    render() {
        return (
            <>
                <Container>
                    <BreadCrumbs>
                        <BreadLinks>Main page</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks href="/rewards/">Personal rewards</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks>PDO finance</BreadLinks>
                    </BreadCrumbs>
                    <Tabs>
                        <StepNav >
                            <TabList className="mt--10">
                                <Tab className='wow flipInY'><span>Simple one time tasks</span></Tab>
                                <Tab className='wow flipInY'><span>Multiple task</span></Tab>
                                <Tab className='wow flipInY'><span>Loyalty bonus</span></Tab>
                                <Tab className='wow flipInY'><span>Daily check out</span></Tab>
                                <Tab className='wow flipInY'><span>Individual testing</span></Tab>
                                <Tab className='wow flipInY'><span>Issue finding</span></Tab>
                                <Tab className='wow flipInY'><span>Learn and earn</span></Tab>
                                <Tab className='wow flipInY'><span>Affiliate program</span></Tab>
                            </TabList>
                        </StepNav>
                        
                        <TabPanel>
                            <StepSec className="wow fadeInUp" data-wow-delay="0s">
                                <div>
                                    <div className="flex items-center">
                                        <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">1</span>
                                        <h2 className="font-play text-white-main text-[24px] md:text-3xl	 md:ml-8 ml-4 leading-tight	">Simple one time tasks</h2>
                                    </div>
                                    <p  className="text-white-2 text-8 mt-7 leading-8">Personal rewards encourage completing certain simple tasks like following a specific social channel. Every earned dVoucher automatically creates a Lottery entry.  </p>
                                </div>
                                <IFrameCol><img src={iframe1}></img>
                                    <button className="btn-golden shadow-lg w-full px-3 py-4 md:w-[660px] md:h-[80px] mt-6 bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-xl uppercase">
                                    <FontAwesomeIcon icon={faLock} className='mr-2' /> Unlock 3 More Entries
                                    <span className="text-xs block normal-case	">Complete the above entries to unlock the rest!</span>
                                    </button>
                                </IFrameCol>
                                
                                
                            </StepSec>
                        </TabPanel>
                        <TabPanel>
                        <StepSec className="wow fadeInUp" data-wow-delay="0s">
                            <div className="">
                            <div className="flex items-center">
                                <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">2</span>
                                <h2 className="font-play text-white-main text-[24px] md:text-3xl	 md:ml-8 ml-4 leading-tight	">Multiple tasks</h2>
                            </div>
                            <p  className="text-white-2 text-8 mt-7 leading-8">Engaging with Qonetum Foundation social posts needs to be consistent in order to achieve long-term organic growth. Therefore, users are eligible for dVoucher by engaging consistently with Qonetum. </p>
                            <IFrameCol>
                                <img src={iframe2}></img>
                            </IFrameCol>
                            </div>
                        </StepSec>
                        </TabPanel>
                        <TabPanel>
                        <StepSec className="wow fadeInUp" data-wow-delay="0s">
                            <div className="">
                            <div className="flex items-center">
                                <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">3</span>
                                <h2 className="font-play text-white-main text-[24px] md:text-3xl	 md:ml-8 ml-4 leading-tight	">Loyalty Bonus</h2>
                            </div>
                            <p  className="text-white-2 text-8 mt-7 leading-8">The loyalty bonus program incentivizes users to engage with all the Qonetum finance projects</p>
                            <IFrameCol>
                                <img src={iframe3}></img>
                            </IFrameCol>
                            </div>
                        </StepSec>
                        </TabPanel>

                        <TabPanel>
                            <StepSec className="wow fadeInUp" data-wow-delay="0s">
                                <div className="">
                                    <div className="flex items-center">
                                        <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">4</span>
                                        <h2 className="font-play text-white-main text-[24px] md:text-3xl md:ml-8 ml-4 leading-tight">Daily usage</h2>
                                    </div>
                                    <p  className="text-white-2 text-8 mt-7 leading-8">Visit and view Qonetum sites daily to check out new functionalities </p>
                                    <IFrameCol>
                                        <img src={iframe4}></img>
                                    </IFrameCol>
                                </div>
                            </StepSec>
                        </TabPanel>
                        <TabPanel>
                            <StepSec className="wow fadeInUp" data-wow-delay="0s">
                                <div className="">
                                    <div className="flex items-center">
                                        <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">5</span>
                                        <h2 className="font-play text-white-main text-[24px] md:text-3xl md:ml-8 ml-4 leading-tight">Individual testing</h2>
                                    </div>
                                    <p  className="text-white-2 text-8 mt-7 leading-8">From time to time, Qonetum Foundation will need a group of users to perform a specific dApp request. The tests may require execution at a certain time or require certain technology stacks to execute. Think of this as a focus group for DeFi. Every time you do a task and question, earn a reward. </p>
                                    <p className="text-white-2 text-8 mt-7 leading-8">Community stress tests are healthy for product development and in encouraging engagement from users in the community. The more aligned users are with the project's success, the more organic growth the project may experience. </p>
                                    <p className="text-white-2 text-8 mt-7 leading-8"><b>Rewards</b></p>
                                    <ul className="list-disc pl-5">
                                        <li className="text-white-2 text-8 leading-8">Each individual test carries a specific dVoucher value</li>
                                        <li className="text-white-2 text-8 leading-8">For earning a dVoucher, users receive an entry into the monthly lottery</li>
                                    </ul>
                                </div>
                            </StepSec>
                        </TabPanel>
                        <TabPanel>
                            <StepSec className="wow fadeInUp" data-wow-delay="0s">
                                <div className="">
                                    <div className="flex items-center">
                                        <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">6</span>
                                        <h2 className="font-play text-white-main text-[24px] md:text-3xl md:ml-8 ml-4 leading-tight">Issue finding </h2>
                                    </div>
                                    <p  className="text-white-2 text-8 mt-7 leading-8">Issues are displayed in Discord to make sure duplicate issues are not reported. Any duplicate issues reported do not qualify for vouchers. </p>
                                    
                                    <p className="text-white-2 text-8 mt-7 leading-8"><b>Examples of Issues</b></p>
                                    <ul className="list-disc mt-2 pl-5 text-white-2 text-8 leading-8">
                                        <li className="">UI malfunctions</li>
                                        <li className="">Typos in design</li>
                                        <li className="">Broken links</li>
                                        <li className="">More determined on an ongoing basis</li>
                                    </ul>

                                    <p className="text-white-2 text-8 mt-7 leading-8"><b>Rewards</b></p>
                                    <ul className="list-disc mt-2 mb-14 pl-5 text-white-2 text-8 leading-8">
                                        <li className="">Each individual issue carries a specific dVoucher value</li>
                                        <li className="">For earning a dVoucher, users receive an entry into the monthly lottery</li>
                                    </ul>

                                    <MsgBox >
                                        <div className="flex items-center justify-center mb-7">
                                            <span className="mr-5">Login with</span><img src={Smlogin}></img></div>
                                        <p className="text-base mb-4">Simple question about individual testing</p>
                                        <textarea className="w-full h-[84px] bg-transparent border-2 border-white-3"></textarea>
                                        <div className="flex items-center justify-center mt-2">
                                            <button className="btn-teal w-[110px] h-[40px] border-solid text-white font-bold text-5 font-montserrat">Continue</button>
                                            <a className="border-solid text-red-800 px-4 py-3 font-bold text-5 font-montserrat" href="#">Cancel</a>
                                        </div>
                                    </MsgBox>
                                </div>
                            </StepSec>
                        </TabPanel>

                        <TabPanel>
                            <StepSec className="wow fadeInUp" data-wow-delay="0s">
                                <div className="">
                                    <div className="flex items-center">
                                        <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">7</span>
                                        <h2 className="font-play text-white-main text-[24px] md:text-3xl md:ml-8 ml-4 leading-tight">Learn and earn </h2>
                                    </div>
                                    <p  className="text-white-2 text-8 mt-7 mb-14 leading-8">Knowledge of complex processes within the DeFi space boosts the industry's mass adoption timeline. Therefore, learn and earn program allows users to increase knowledge on cryptocurrency projects and DeFi protocols to earn rewards through quizzes. Projects can create their own quizzes and provide rewards with any tokens they select. Qonetum Finance quizzes reward users for correct answers in dVoucher. </p>

                                    <MsgBox >
                                        <div className="flex items-center justify-center mb-7">
                                            <span className="mr-5">Login with</span><img src={Smlogin}></img></div>
                                        <p className="text-base mb-4">Simple question about individual testing</p>
                                        <textarea className="w-full h-[84px] bg-transparent border-2 border-white-3"></textarea>
                                        <div className="flex items-center justify-center mt-2">
                                            <button className="btn-teal w-[110px] h-[40px] border-solid text-white font-bold text-5 font-montserrat">Continue</button>
                                            <a className="border-solid text-red-800 px-4 py-3 font-bold text-5 font-montserrat" href="#">Cancel</a>
                                        </div>
                                    </MsgBox>
                                </div>
                            </StepSec>
                        </TabPanel>
                        <TabPanel>
                            <StepSec className="wow fadeInUp" data-wow-delay="0s">
                                <div className="">
                                    <div className="flex items-center">
                                        <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">8</span>
                                        <h2 className="font-play text-white-main text-[24px] md:text-3xl md:ml-8 ml-4 leading-tight">affiliate program</h2>
                                    </div>
                                    <p  className="text-white-2 text-8 mt-7 mb-2 leading-8">Users that connect a wallet, generate unique URLs that monitor how many projects utilize Qonetum Finance solutions.  </p>
                                    <p  className="text-white-2 text-8 mb-14 leading-8">Invite projects to create a [PDO] and earn 5 gold dVouchers for each PDO that launches and completely sells out their inventory using your URL link.</p>
                                    
                                    <div className="flex mx-auto center flex-col items-center ">
                                        <div className={`flex w-full md:w-auto flex-col ${this.state.shown ? 'hidden' : ''}`}>
                                            <input type="text" name="" className="px-6 w-full px-3 py-4 md:w-[660px] md:h-[80px] bg-transparent border-2 border-white-3 text-xl" placeholder="pdo.finance/123n21n2382aAG39"></input>
                                            <button className="btn-golden shadow-lg w-full px-3 py-4 md:w-[660px] md:h-[80px] mt-6 bg-yellow-main border-2 border-solid bg-opacity-0 text-slate-50 font-bold text-xl uppercase mb-1">Copy</button>
                                        </div>
                                        <button className={`btn-golden shadow-lg w-full px-3 py-4 md:w-[660px] md:h-[80px] mt-6 bg-yellow-main border-2 border-solid bg-opacity-0 text-slate-50 font-bold text-xl uppercase mb-1 ${this.state.shown ? '' : 'hidden'}`} onClick={() => this.setState({ shown: !this.state.shown })}>CONNECT YOUR WALLET TO BECOME AN AFFILIATE</button>
                                        <p className="text-white-2 text-xs leading-8">Gain $100 for each new launch PDO <sup className="help-circle">
                                            <i className="fas fa-question-circle protip"
                                                data-pt-position="top"
                                                data-pt-title="The slippage option finds the best price in the market with a slippage limit option under your trade options"
                                                aria-hidden="true"
                                            ></i></sup>
                                        </p>
                                    </div>
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
    ul {display: flex;
        @media screen and (max-width: 1000px) {
            flex-flow: wrap;
        }
        @media screen and (max-width: 600px) {
            flex-flow: column; width: 100%;
        }
    }
    li {list-style: none; padding: 0; margin: 0; display: flex; color: #989898; font-weight: bold;
    /* &:before {content: "|"; padding: 0 10px; color: #2a2a2a; font-weight: bold; pointer-events: none;} */
        border-left: 1px solid #2a2a2a; padding: 0 10px; line-height: 1;
        &:first-child {/* display: none; */ border-left: 0 solid #2a2a2a;}
        &:focus {outline: none;}
        &:hover, &.react-tabs__tab--selected {color: #fff; 
            span {&:after {opacity: 1;}}
        }
        span {position: relative;  white-space: nowrap; 
            &:after {content: ""; height: 1px; background: #e9a134; width: 100%; display: block; opacity: 0; margin: 4px 0 0;}  
        }
        @media screen and (max-width: 1000px) {
            margin-bottom: 10px;
        }
        @media screen and (max-width: 600px) {
            border: 0; margin-bottom: 8px; padding: 5px 10px;
            span {
                width: 100%; font-size: 18px;
                &:after {background: #e9a134; opacity: 0.5; margin-top: 8px;}
            }
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
    @media screen and (max-width: 600px) {
        max-width: 100%; padding: 22px 0 33px;
    }
    .btn-teal {background-color: #4edd9e;}
`

