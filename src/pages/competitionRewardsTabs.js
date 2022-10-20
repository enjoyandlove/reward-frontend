import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


// Images
import Reward1 from './../assets/1reward.png'
import Reward2 from './../assets/2reward.png'
import Reward3 from './../assets/3reward.png'



const CompetitionRewardsTabs = () => {
  return (
    <>
      <Container>
        <BreadCrumbs>
          <BreadLinks href="/">Main page</BreadLinks>
          <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
          <BreadLinks href='/rewards/competition-rewards'>Competition rewards</BreadLinks>
          <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
          <BreadLinks href="/rewards/competition-rewards-tabs">PDO finance</BreadLinks>
        </BreadCrumbs>

        <Tabs>
          <StepNav>
            <TabList className="mt--10">
              <Tab className='wow flipInY'><span>LA Blockchain Summit Qonetum Finance dVoucher Awards</span></Tab>
              <Tab className='wow flipInY'><span>Daily Tasks</span></Tab>
              <Tab className='wow flipInY'><span>Qonetum dVoucher Single Use Biweekly Lottery</span></Tab>
              <Tab className='wow flipInY'><span>PDO Contest for Weld AMA / PDO</span></Tab>
            </TabList>
          </StepNav>

          <TabPanel>
            <StepSec className='wow fadeInUp'>
              <div className="">
                <div className='font-play text-white-main text-9 md:text-1 text-center'>Personal Trading competition</div>
                <div className='text-center font-montserrat mt-2'>
                  <p className='text-white-2 text-8 mt-7 leading-8'>The personal trading reward is an unlimited dVoucher program, allowing users to earn by utilizing the technology often. As a trader you compete against yourself from the previous month. If you trade more than the previous month, the percentage increase determines your booster. For example, for a 50% increase you end up with 1.5%.</p>
                  <p className='text-white-2 text-8 mt-7 leading-8'>Cap percentage is set at a 100% booster or 2%.</p>
                </div>
                <div className="max-w-4xl mt-14 mx-auto">
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <span className="text-2xl text-white-main font-bold">Top 100 Winners</span>
                    <a href="#" className="btn-golden inline-flex items-center justify-center w-[198px] h-[48px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-sm uppercase md:ml-auto md:mt-0 mt-3">Check if you won</a>
                  </div>
                  <ScrolableTable>
                    <Table>
                      <thead>
                        <tr>
                          <Thd className="w-[10%]"></Thd>
                          <Thd className="text-left">Wallet address</Thd>
                          <Thd className="text-left">dVoucher</Thd>
                          <Thd className="text-center w-[20%]">Claim</Thd>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <Tcell><img src={Reward1}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>1,000,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell><img src={Reward2}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>900,000</Tcell>
                          <Tcell><a href="#" className="btn-golden inline-flex items-center justify-center w-[246px] h-[34px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-md:bold text md:mt-0 mt-3-sm uppercase">Claim</a></Tcell>
                        </tr>
                        <tr>
                          <Tcell><img src={Reward3}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>800,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>4</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>700,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>5</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>600,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>6</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>500,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>7</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>400,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>8</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>300,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>9</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>200,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>10</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>100,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                      </tbody>
                    </Table>
                  </ScrolableTable>
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
          </TabPanel>
          <TabPanel>
            <StepSec className='wow fadeInUp'>
              <div className="">
                <div className='font-play text-white-main text-9 md:text-1 text-center'>Personal Staking competition</div>
                <div className='text-center font-montserrat mt-2'>
                  <p className='text-white-2 text-8 mt-7 leading-8'>The personal staking reward is an unlimited dVoucher program, allowing users to earn by utilizing the technology often. As a trader you compete against yourself from the previous month. If you trade more than the previous month, the percentage increase determines your booster. For example, for a 50% increase you end up with 1.5%.</p>
                  <p className='text-white-2 text-8 mt-7 leading-8'>Cap percentage is set at a 100% booster or 2%.</p>
                </div>
                <div className="max-w-4xl mt-14 mx-auto">
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <span className="text-2xl text-white-main font-bold">Top 100 Winners</span>
                    <a href="#" className="btn-golden inline-flex items-center justify-center w-[198px] h-[48px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-sm uppercase md:ml-auto md:mt-0 mt-3">Check if you won</a>
                  </div>
                  <ScrolableTable>
                    <Table>
                      <thead>
                        <tr>
                          <Thd className="w-[10%]"></Thd>
                          <Thd className="text-left">Wallet address</Thd>
                          <Thd className="text-left">dVoucher</Thd>
                          <Thd className="text-center w-[20%]">Claim</Thd>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <Tcell><img src={Reward1}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>1,000,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell><img src={Reward2}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>900,000</Tcell>
                          <Tcell><a href="#" className="btn-golden inline-flex items-center justify-center w-[246px] h-[34px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-md:bold text md:mt-0 mt-3-sm uppercase">Claim</a></Tcell>
                        </tr>
                        <tr>
                          <Tcell><img src={Reward3}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>800,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>4</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>700,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>5</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>600,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>6</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>500,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>7</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>400,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>8</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>300,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>9</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>200,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>10</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>100,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                      </tbody>
                    </Table>
                  </ScrolableTable>
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
          </TabPanel>
          <TabPanel>
            <StepSec className='wow fadeInUp'>
              <div className="">
                <div className='font-play text-white-main text-9 md:text-1 text-center'>Group trading competition</div>
                <div className='text-center font-montserrat mt-2'>
                  <p className='text-white-2 text-8 mt-7 leading-8'>Each Qonetum project seeks to gain widespread adoption, which encourages users to utilize the technology often. Therefore, monthly rewards are given for the top 100 users by volume in each project. Rewards start at $10,000 in vouchers and decrease evenly to a $100 floor.</p>
                </div>
                <div className="max-w-4xl mt-14 mx-auto">
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <span className="text-2xl text-white-main font-bold">Top 100 Winners</span>
                    <a href="#" className="btn-golden inline-flex items-center justify-center w-[198px] h-[48px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-sm uppercase md:ml-auto md:mt-0 mt-3">Check if you won</a>
                  </div>
                  <ScrolableTable>
                    <Table>
                      <thead>
                        <tr>
                          <Thd className="w-[10%]"></Thd>
                          <Thd className="text-left">Wallet address</Thd>
                          <Thd className="text-left">dVoucher</Thd>
                          <Thd className="text-center w-[20%]">Claim</Thd>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <Tcell><img src={Reward1}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>1,000,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell><img src={Reward2}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>900,000</Tcell>
                          <Tcell><a href="#" className="btn-golden inline-flex items-center justify-center w-[246px] h-[34px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-md:bold text md:mt-0 mt-3-sm uppercase">Claim</a></Tcell>
                        </tr>
                        <tr>
                          <Tcell><img src={Reward3}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>800,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>4</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>700,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>5</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>600,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>6</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>500,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>7</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>400,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>8</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>300,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>9</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>200,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>10</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>100,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                      </tbody>
                    </Table>
                  </ScrolableTable>
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
          </TabPanel>

          <TabPanel>
            <StepSec className='wow fadeInUp'>
              <div className="">
                <div className='font-play text-white-main text-9 md:text-1 text-center'>Group staking competition</div>
                <div className='text-center font-montserrat mt-2'>
                  <p className='text-white-2 text-8 mt-7 leading-8'>Staked tokens show trust in crypto, which encourages more users and partners. Therefore, monthly rewards are given for the top 100 users by staking volume in each project. Rewards start at $10,000 in vouchers and decrease evenly to a $100 floor. </p>
                </div>
                <div className="max-w-4xl mt-14 mx-auto">
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <span className="text-2xl text-white-main font-bold">Top 100 Winners</span>
                    <a href="#" className="btn-golden inline-flex items-center justify-center w-[198px] h-[48px] bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-sm uppercase md:ml-auto md:mt-0 mt-3">Check if you won</a>
                  </div>
                  <ScrolableTable>
                    <Table>
                      <thead>
                        <tr>
                          <Thd className="w-[10%]"></Thd>
                          <Thd className="text-left">Wallet address</Thd>
                          <Thd className="text-left">dVoucher</Thd>
                          <Thd className="text-center w-[20%]">Claim</Thd>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <Tcell><img src={Reward1}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>1,000,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell><img src={Reward2}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>900,000</Tcell>
                          <Tcell><a href="#" className="btn-golden inline-flex items-center justify-center w-[246px] h-[34px] bg-yellow-main border-2 border-solid bg-opacity-md:0 text md:mt-0 mt-3-white-1 font-bold text-sm uppercase">Claim</a></Tcell>
                        </tr>
                        <tr>
                          <Tcell><img src={Reward3}></img></Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>800,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>4</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>700,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>5</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>600,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>6</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>500,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>7</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>400,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>8</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>300,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>9</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>200,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                        <tr>
                          <Tcell>10</Tcell>
                          <Tcell className="txt-blue">0x084.....6a80</Tcell>
                          <Tcell>100,000</Tcell>
                          <Tcell></Tcell>
                        </tr>
                      </tbody>
                    </Table>
                  </ScrolableTable>
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
          </TabPanel>
        </Tabs>
      </Container>
    </>
  );
}
export default CompetitionRewardsTabs

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
    li {list-style: none; padding: 0; margin: 0; display: flex; color: #989898; font-weight: bold; cursor: pointer;
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
const StepSec = styled.section`
  margin-top: 88px;
`
const IFrameCol = styled(FlexDiv)`
  margin: 60px 0 0; flex-flow: column;
`
const MsgBox = styled.section`
    background-color: #000; width: 664px; display: table; margin: 0px auto; color: #fff; font-weight: bold; font-size: 14px; padding: 22px 33px 33px;
    .btn-teal {background-color: #4edd9e;}
`

const Table = styled.table`
    width: 100%;
    tr:hover { background: #191a22;}
`
const Thd = styled.th`
    font-size: 14px; color: #989898; padding: 12px 18px; border-top: 2px solid #262626; border-bottom: 2px solid #262626; font-weight: 700; max-width: 25%; background-color: #080808; 
    & + th {
        border-left: 1px solid #262626
    }
`
const Tcell = styled.td`
    font-size: 14px; color: #fff; max-width: 25%; padding: 12px 18px; border-bottom: 1px solid #262626; position: relative;
    & + td {
        border-left: 1px solid #262626
    }
    &.txt-blue {color: #4557ff;}
`

const Tfooter = styled.div`
    display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: #aaaaaa; padding: 16px 0 0;
    
    p {color: #3b3e4b;}
    a {color: #aaa; margin: 0 10px;}
    a:hover {color: #91dc27;}
`
const SelectCustom = styled.div`
    display: inline-block; position: relative; margin: 0 10px;
    select {background: #262626; min-width: 65px; color: #fff; font-size: 14px; border: 0; height: 30px;  border-radius: 0; padding: 0 10px;   appearance: none;}
    &:after {
        content: "\f0d7"; font-family: "Font Awesome 5 Free"; color: #aaa; font-weight: 900; position: absolute; right: 5px; top: 8px;
    }
`
const ScrolableTable = styled.div`
    overflow: auto; max-width: 100%;
    table {min-width: 800px;}
`