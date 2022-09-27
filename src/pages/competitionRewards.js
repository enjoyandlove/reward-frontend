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
import Smlogin from './../assets/sm.jpg'



export default class CompetitionRewards extends PureComponent {
    render() {
        return (
            <>
                <Container>
                    <BreadCrumbs>
                        <BreadLinks>Main page</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks>Competition rewards</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks>PDO finance</BreadLinks>
                    </BreadCrumbs>
                    <StepSec>
                        <div className="">
                            <div className='font-play text-white-main text-9 md:text-1 text-center'>social engagement </div>
                            <div className='text-center font-montserrat mt-2'>
                                <p className='text-white-2 text-8 mt-7 leading-8'>Engaging with Qonetum Foundation social posts needs to be consistent in order to achieve long-term organic growth. Therefore, each day, users are eligible for extra lottery entries for retweets and likes. Each Twitter like equals three extra entries and retweets equal 5 per day. An extra 10 entries goes to the best reply of the day and is determined by likes. </p>
                            </div>
                            <IFrameCol>
                                <img src={iframe2}></img>                                
                            </IFrameCol>
                        
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

