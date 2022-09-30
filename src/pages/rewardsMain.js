import React, { PureComponent } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from './../components/AppBar/AppBar2';
import Footer02 from './../components/Footer/Footer02';
import NavBullets from './../components/NavBullets';

import PersonalRewards from './personal-rewards';
import PersonalRewardsTabs from './personal-rewards-tabs';
import GroupRewards from './group-rewards';
import CompetitionRewardsTabs from './competitionRewardsTabs';
import ReferralProgram from './referralProgram';
import CompetitionRewards from './competitionRewards';
import TradingRewards from './tradingRewards';
import StakingRewards from './stakingRewards';
import DeadTokenRecovery from './deadTokenRecovery';

import MainBg from './../assets/main-bg.jpg'


export default class RewardsMain extends PureComponent {
<<<<<<< HEAD
  render() {
    return (
      <>
        <div className='background'>
          <AppBar />
          <MainContainer>
            <NavBullets />
            <Routes>
              <Route path='/' element={<PersonalRewards />} />
              <Route path='/personalRewards01' element={<PersonalRewards01 />}></Route>
              <Route path='/group-rewards' element={<GroupRewards />}></Route>
              <Route path='/competition-rewards' element={<CompetitionRewards />}></Route>
              <Route path='/competition-rewards-tabs' element={<CompetitionRewardsTabs />}></Route>
              <Route path='/referralProgram' element={<ReferralProgram />}></Route>
              <Route path='/trading-rewards' element={<TradingRewards />}></Route>
              <Route path='/staking-rewards' element={<StakingRewards />}></Route>
              <Route path='/dead-token-recovery' element={<DeadTokenRecovery />}></Route>
            </Routes>
            {/* <PersonalRewards/>
                        <PersonalRewards01/> */}
            {/* <GroupRewards/> */}
            {/* <CompetitionRewardsTabs/> */}
            {/* <ReferralProgram/> */}
            {/* <CompetitionRewards/> */}
          </MainContainer>
          <Footer02 />
        </div>
      </>
    );
  }
=======
    render() {
        return (
        <>
            <div className='background'>
                <AppBar />
                    <MainContainer>
                        <NavBullets/>
                        <Routes>
                            <Route path='/' element={<PersonalRewards/>} />
                            <Route path='/personal-rewards-tabs' element={<PersonalRewardsTabs />}></Route>
                            <Route path='/group-rewards' element={<GroupRewards />}></Route>
                            <Route path='/competition-rewards' element={<CompetitionRewards />}></Route>
                            <Route path='/competition-rewards-tabs' element={<CompetitionRewardsTabs />}></Route>
                            <Route path='/referralProgram' element={<ReferralProgram />}></Route>
                            <Route path='/trading-rewards' element={<TradingRewards />}></Route>
                            <Route path='/staking-rewards' element={<StakingRewards />}></Route>
                            <Route path='/dead-token-recovery' element={<DeadTokenRecovery />}></Route>
                        </Routes>
                    </MainContainer>
                <Footer02 />
            </div>
        </>
        );
    }
>>>>>>> origin/reward_UI
}

const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;
const MainContainer = styled.div`
    background: url(${MainBg}) center 250px no-repeat; padding-bottom: 80px; min-height: calc(100vh - 200px)
`

