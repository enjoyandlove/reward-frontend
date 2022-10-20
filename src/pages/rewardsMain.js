import React, { PureComponent } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from './../components/AppBar/AppBar';
import Footer02 from './../components/Footer/Footer02';
import NavBullets from './../components/NavBullets';

import PersonalRewards from './personal-rewards';
import PersonalRewardsTabs from './personal-rewards-tabs';
import GroupRewards from './group-rewards';
import GroupRewardsPdo from "./group-rewards-pdo";
import CompetitionRewardsTabs from './competitionRewardsTabs';
import CompetitionRewards from './competitionRewards';
import ReferralProgram from './referralProgram';
import ReferralProgramPdo from "./referralProgramPdo";
import TradingRewards from './tradingRewards';
import TradingRewardsPdo from "./tradingRewardsPdo";
import StakingRewards from './stakingRewards';
import StakingRewardsPdo from "./stakingRewardsPdo";
import DeadTokenRecovery from './deadTokenRecovery';
import DeadTokenRecoveryPdo from "./deadTokenRecoveryPdo";
import SocialEngagementPdo from "./socialEngagementPdo";
import SocialEngagement from "./socialEngagement";
import MainBg from './../assets/main-bg.jpg'



const RewardsMain = () => {

  return (
    <>
      <div className='background'>
        <AppBar />
        <MainContainer>
          <NavBullets />
          <Routes>
            <Route path='/personal-rewards' element={<PersonalRewards />} />
            <Route path='/personal-rewards-tabs' element={<PersonalRewardsTabs />}></Route>
            <Route path='/group-rewards' element={<GroupRewards />}></Route>
            <Route path='/group-rewards-pdo' element={<GroupRewardsPdo />}></Route>
            <Route path='/competition-rewards' element={<CompetitionRewards />}></Route>
            <Route path='/competition-rewards-tabs' element={<CompetitionRewardsTabs />}></Route>
            <Route path='/referral-program' element={<ReferralProgram />}></Route>
            <Route path='/referral-program-pdo' element={<ReferralProgramPdo />}></Route>
            <Route path='/trading-rewards' element={<TradingRewards />}></Route>
            <Route path='/trading-rewards-pdo' element={<TradingRewardsPdo />}></Route>
            <Route path='/staking-rewards' element={<StakingRewards />}></Route>
            <Route path='/staking-rewards-pdo' element={<StakingRewardsPdo />}></Route>
            <Route path='/dead-token-recovery' element={<DeadTokenRecovery />}></Route>
            <Route path='/dead-token-recovery-pdo' element={<DeadTokenRecoveryPdo />}></Route>
            <Route path='/social-engagement' element={<SocialEngagement />}></Route>
            <Route path='/social-engagement-pdo' element={<SocialEngagementPdo />}></Route>
          </Routes>
        </MainContainer>
        <Footer02 />
      </div>
    </>
  );
}

export default RewardsMain

const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;
const MainContainer = styled.div`
    background: url(${MainBg}) center 250px no-repeat; padding-bottom: 80px; min-height: calc(100vh - 200px)
`

