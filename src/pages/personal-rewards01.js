import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import AppBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
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



export default class PersonalRewards extends PureComponent {
  render() {
    return (
      <>
        <Container>
          <BreadCrumbs>
            <BreadLinks>Main page</BreadLinks>
            <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
            <BreadLinks>Personal rewards</BreadLinks>
            <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
            <BreadLinks>PDO finance</BreadLinks>
          </BreadCrumbs>
          <Tabs>
            <StepNav>
              <TabList className="mt--10">
                <Tab><span>Simple one time tasks</span></Tab>
                <Tab><span>Multiple task</span></Tab>
                <Tab><span>Loyalty bonus</span></Tab>
                <Tab><span>Daily check out</span></Tab>
                <Tab><span>Individual testing</span></Tab>
                <Tab><span>Issue finding</span></Tab>
                <Tab><span>Learn and earn</span></Tab>
                <Tab><span>Affiliate program</span></Tab>
              </TabList>
            </StepNav>
            
            <TabPanel>
              <StepSec>
                <div className="">
                  <div className="flex items-center">
                  {/* <button className="btn-golden w-[120px] h-[40px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-5 font-montserrat">SUBMIT</button> */}
                    <span className="font-play w-[56px] h-[56px] border-2 border-solid inline-flex text-white justify-center items-center text-3xl text-white-main">1</span>
                    <h2 className="font-play text-white-main text-9 md:text-3xl ml-8">Simple one time tasks</h2>
                  </div>
                  <p  className="text-white-2 text-8 mt-7 leading-8">Personal rewards encourage completing certain simple tasks like following a specific social channel. Every earned dVoucher automatically creates a Lottery entry.  </p>
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

const ChooseProject = styled.div`
  display: grid; grid-template-columns: repeat(5, 1fr); grid-column-gap: 20px; grid-row-gap: 20px; margin: 40px 0 0;
`
const ProjectItems = styled(FlexDiv)`
  height: 120px; border: 1px solid #252525; position: relative;
  /* img {filter: grayscale(100) brightness(100)} */
  &:not(.disable):hover, &.active {border: 1px solid #e9a134; box-shadow: 0 0 10px #e9a134;
    img {filter: grayscale(100) brightness(0) invert(1)}
    span {color: #e9a134;}
  }
  span {position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: bold; color: #989898;}
  &.disable {
    &:hover {
      &:after {content: "Coming Soon"; color: #ffffff; position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: bold;}
    }
    img {opacity: 0.4;}
  }
`
const Newsletter = styled.div `
  display: flex; padding: 80px 0; align-items: center; justify-content: center; 
  label {color: #989898; font-size: 12px; margin: 0; margin-right: 20px; }
  .email {margin-right: 10px; border-color: #252525; padding: 0 14px;}
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
  margin: 60px 0; flex-flow: column;
`
