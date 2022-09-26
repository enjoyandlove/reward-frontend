import React, { PureComponent } from "react";
import styled from 'styled-components';
import AppBar from './../components/AppBar/AppBar';
import Footer02 from './../components/Footer/Footer02';
import NavBullets from './../components/NavBullets';

import PersonalRewards from './personal-rewards';
import PersonalRewards01 from './personal-rewards01';
import GroupRewards from './group-rewards';
import CompetitionRewardsTabs from './competitionRewardsTabs';
import MainBg from './../assets/main-bg.jpg'


export default class RewardsMain extends PureComponent {
    render() {
        return (
        <>
            <div className='background'>
                <AppBar />
                    <MainContainer>
                        <NavBullets/>
                        {/* <PersonalRewards/>
                        <PersonalRewards01/> */}
                        {/* <GroupRewards/> */}
                        <CompetitionRewardsTabs/>
                    </MainContainer>
                <Footer02 />
            </div>
        </>
        );
    }
}

const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;
const MainContainer = styled.div`
    background: url(${MainBg}) center 250px no-repeat; padding-bottom: 80px; min-height: calc(100vh - 200px)
`

