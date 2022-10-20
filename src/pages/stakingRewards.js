import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import AppBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useNavigate } from "react-router-dom";


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




const StakingRewards = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <BreadCrumbs>
          <BreadLinks href="/">Main page</BreadLinks>
          <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
          <BreadLinks href="/rewards/staking-rewards">Staking rewards</BreadLinks>
        </BreadCrumbs>
        <div class="font-play text-white-main text-9 md:text-1 text-center" data-wow-delay="0.1s">choose a project for staking reward</div>
        <ChooseProject>
          <ProjectItems onClick={() => { navigate('/rewards/staking-rewards-pdo') }} className="wow zoomIn"><img src={project1}></img></ProjectItems>
          <ProjectItems className="wow zoomIn"><img src={project2}></img></ProjectItems>
          <ProjectItems className="wow zoomIn"><img src={project3}></img></ProjectItems>
          <ProjectItems className="wow zoomIn"><img src={project4}></img></ProjectItems>
          <ProjectItems className="wow zoomIn"><img src={project5}></img></ProjectItems>
          <ProjectItems className="wow zoomIn"><img src={project6}></img></ProjectItems>
          <ProjectItems className="wow zoomIn"><img src={project7}></img></ProjectItems>
          <ProjectItems className="wow zoomIn"><img src={project8}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project9}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project10}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project11}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project12}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project13}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project14}></img></ProjectItems>
          <ProjectItems className="wow zoomIn"><span>Connect Wallet</span></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project15}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project16}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project17}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project18}></img></ProjectItems>
          <ProjectItems className="disable wow zoomIn"><img src={project19}></img></ProjectItems>
        </ChooseProject>
        <Newsletter className="wow fadeInUp" data-wow-delay="0.6s">
          <label for="">Let me know when new project become available</label>
          <input className="email text-white-main h-[40px] w-[280px] bg-transparent border-2 border-solid" type="email" placeholder="Email address"></input>
          <button className="btn-golden w-[120px] h-[40px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-5 font-montserrat">SUBMIT</button>
        </Newsletter>
      </Container>
    </>
  );
}
export default StakingRewards

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

const ChooseProject = styled.div`
  display: grid; grid-template-columns: repeat(5, 1fr); grid-column-gap: 20px; grid-row-gap: 20px; margin: 40px 0 0;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    img {max-width: 90%;}
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const ProjectItems = styled(FlexDiv)`
  height: 120px; border: 1px solid #252525; position: relative; cursor: pointer;
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
const Newsletter = styled.div`
  display: flex; padding: 80px 0; align-items: center; justify-content: center; 
  label {color: #989898; font-size: 12px; margin: 0; margin-right: 20px; }
  .email {margin-right: 10px; border-color: #252525; padding: 0 14px;}
  @media screen and (max-width: 600px) {
    flex-flow: column;
    label {margin-right: 0;}
    .email {margin: 10px 0;}
  }
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
const StepSec = styled.section`
  margin-top: 88px;
`
const IFrameCol = styled(FlexDiv)`
  margin: 60px 0; flex-flow: column;
`
