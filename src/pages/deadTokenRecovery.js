import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


// Images
import ico1 from './../assets/BSC.png';
import ico2 from './../assets/xyz.png';



export default class DeadTokenRecovery extends PureComponent {
    render() {
        return (
            <>
                <Container>
                    <BreadCrumbs>
                        <BreadLinks>Main page</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks>Dead token recovery</BreadLinks>
                        <FontAwesomeIcon icon={faAngleRight} className='mx-1' />
                        <BreadLinks>PDO finance</BreadLinks>
                    </BreadCrumbs>
                    <div className='mt-14'>
                        <div className='font-play text-white-main text-4xl md:text-1 text-center'>Dead token recovery</div>
                        <div className='text-center font-montserrat mt-2'>
                            <p className='text-white-2 text-8 mt-7 leading-8'>When cryptocurrency projects fail, they likely suffered from heavy sale pressure that overpowered demand. Qonetum Finance consistently develops unique solutions designed to reduce project failure rate and provide projects a chance to recover. In order to start recovery, sell pressure must be lessened.  </p>
                            <p className='text-white-2 text-8 mt-7 mb-14 leading-8'>The dead token recovery program is a not-for-profit solution designed by Qonetum Finance within the unlimited dVoucher reward program, to help investors holding dead tokens that want to have the chance to recover losses. </p>
                        </div>
                        <CounterMain>
                            <div className="w-1/2 border-r border-solid border-zinc-800">
                                <p className="text-white-main text-center text-2xl font-bold leading-8 mb-6">Total projects under recovery </p>
                                <h3 className="text-yellow-600 font-play text-white-main text-9 md:text-5xl text-center">126</h3>
                            </div>
                            <div className="w-1/2 relative">
                                <p className="text-white-main text-center text-2xl font-bold leading-8 mb-6">Total token remove from circulations</p>
                                <h3 className="text-yellow-600 font-play text-white-main text-9 md:text-5xl text-center">1,548,665,856.456</h3>
                            </div>
                        </CounterMain>
                        <div className='font-play text-white-main text-9 md:text-3xl mt-[70px] mb-5'>Recovery process</div>
                        <ol className="text-white-2 list-decimal pl-7 text-lg">
                            <li className="mb-3">Investors need to submit and lock dead tokens under the Dumper Shield for 3 years.</li>
                            <li className="mb-3">For each locked token Investors are eligible to buy 1 dVoucher token at a 100:1 token to token ratio.</li>
                            <li className="mb-3">Once eligible purchases are made, dVoucher sends as an NFT to investor wallets which can be traded on marketplaces.</li>
                            <li className="mb-3">The value of the dVoucher starts at a minimum of $1</li>
                            <li className="mb-3">Funds received for purchasing dVoucher are not paid to Qonetum Finance, rather, for 3 years the funds remain pending on a staking platform like Curve and Venus. </li>
                            <li className="mb-3">During this time, investors retain the right to return the dVoucher to the contract and get 100% of their money back. Any staking reward during the pending time belongs to Qonetum Finance.</li>
                            <li className="mb-3">If the user decides to keep and swap the dVoucher, Qonetum receives all the funds used for purchasing.</li>
                            <li className="mb-3">Each dVoucher earned acts like a lottery ticket for a chance at the jackpot. The more dVouchers investors purchase, the greater the chance to win. </li>
                            <li className="mb-3">Every month, a smart contract checks how many dVouchers were earned and generates a jackpot worth 25% of the total amount, distributed amongst the top 100 winners.</li>
                            <li className="mb-3">All dVouchers ownership is retained, regardless of lottery results and the dVoucher NFT can still be sold or converted to any Qonetum project tokens.</li>
                        </ol>
                        <p className="text-white-2 text-8 mt-7 mb-8 leading-8">This program has dual goals, first to help some investors recover losses in dead projects, and second, to assist projects in recovery by removing tokens from the circulating supply to the dumper shield to hopefully recoup losses for everyone.</p>
                        <p className="text-white-2 text-8 mt-7 mb-8 leading-8">To read more about the <DumperLink>Dumper Shield <sup class="fas fa-external-link-alt"></sup></DumperLink> </p>
                        <ol className="text-white-2 list-decimal pl-5 text-lg">
                            <li className="mb-3">Not eligible to vote for early release</li>
                            <li className="mb-3">Each dVoucher can only be used as a lottery ticket once</li>
                        </ol>
                    </div>
                    <hr className="my-14 border-zinc-900"></hr>
                    <div class="font-play text-white-main text-1 md:text-4xl text-center mb-12">recover your dead tokens</div>
                    <Form className="text-white-main">
                        <div className="grid grid-cols-2">
                            <div className="px-3 mb-5">
                                <label className="text-lg font-bold mb-3 block">Choose a network</label>
                                <button className="px-6 text-lg w-full h-[67px] bg-transparent border-2 border-current border-zinc-900 text-left flex items-center"><img className="mr-5" src={ico1}></img>BSC <i class="fa fa-caret-down ml-auto"></i></button>
                            </div>
                            <div className="px-3 mb-5"> 
                                <label className="text-lg font-bold mb-3 block">Choose token</label>
                                <button className="px-6 text-lg w-full h-[67px] bg-transparent border-2 border-current border-zinc-900 text-left flex items-center"><img className="mr-5" src={ico2}></img>XYZ <i class="fa fa-caret-down ml-auto"></i></button>
                                <p>Smart contract <a>0x5DC53496E8dd50887785d75D432cBa6A86F82cad<i class="fas fa-external-link-alt ml-1"></i></a></p>
                            </div>
                            <div className="px-3 mb-5">
                                <label className="text-lg font-bold mb-3 block">Select amount of tokens to shield <sup className="help-circle">
                                <i className="fas fa-question-circle protip" data-pt-position="top" data-pt-title="The slippage option finds the best price in the market with a slippage limit option under your trade options" aria-hidden="true"
                                ></i></sup> </label>
                                <input className="px-6 w-full h-[67px] bg-transparent border-2 border-current border-zinc-900" type="text"></input>
                                <p className="ml-auto">Balance <span>10,000,000 XYZ</span>  |  MAX</p>
                            </div>
                            <div className="px-3 mb-5">
                                <label className="text-lg font-bold mb-3 block">Buy dVoucher </label>
                                <input className="px-6 w-full h-[67px] bg-transparent border-2 border-current border-zinc-900" type="text"></input>
                                <p className="">Eligible to buy: <span>1,545,653 dVoucher</span> |  MAX</p>     
                            </div>
                        </div>
                        <div className="grid grid-cols-1 px-3">
                            <label className="text-lg font-bold mb-3 block">Deposit security <sup className="help-circle">
                            <i className="fas fa-question-circle protip" data-pt-position="top" data-pt-title="The slippage option finds the best price in the market with a slippage limit option under your trade options" aria-hidden="true"
                            ></i></sup></label>
                            <InputBox>
                                <div className="input-ico"><img src={ico1}></img></div>
                                <input className="pl-[80px] pr-6 w-full h-[67px] bg-transparent border-2 border-current border-zinc-900" type="text"></input>
                            </InputBox>
                            <p className="ml-auto">Balance <span>845.586 BNB</span> |  MAX</p> 
                        </div>
                        <div className="flex justify-center">
                            <button className="btn-golden shadow-lg w-[660px] h-[80px] mt-6 bg-yellow-main border-2 border-solid bg-opacity-0 text-white-1 font-bold text-xl uppercase">RECOVER YOUR DEAD TOKEN</button>
                        </div>
                    </Form>
                    <h3 className="text-white-main text-2xl font-bold leading-8 mb-10">History</h3>
                    <ul className="border-t-[1px] border-solid border-zinc-900">
                        <li className="flex py-3 text-white-2 border-b-[1px] border-solid border-zinc-800">Total tokens sent to the dumper shield 
                        <span className="ml-auto">100,000</span></li>
                        <li className="flex py-3 text-white-2 border-b-[1px] border-solid border-zinc-800">Your eligible dVouchers 
                        <span className="ml-auto">$1,000</span></li>
                        <li className="flex py-3 text-white-2 border-b-[1px] border-solid border-zinc-800">dVocuher purchased    <a className="text-red-600	ml-3">Claim a refund</a> 
                        <span className="ml-auto">$500</span></li>
                        <li className="flex py-3 text-white-2 border-b-[1px] border-solid border-zinc-800">dVocuher available to buy 
                        <span className="ml-auto">$500</span></li>
                    </ul>
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
    .border-zinc-900 {border-color: #363636;}
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

const CounterMain = styled.div`
    display: flex; align-items: center; justify-content: center; margin-top: 30px;
`
const Rvoucher = styled(FlexDiv) `
    font-size:38px; font-weight:400; font-family: "Mandatory Plaything"; color: #fff; line-height: 62px; margin: 19px 0 0 0; padding: 0 52px; flex-flow: row;
    span{ display: inline-block; position: relative; z-index: 2; border:2px solid #e9a134; width:52px; height: 62px; text-align:center; margin:0 4px; background: linear-gradient(180deg, #121212, #444444, #121212); box-shadow: inset 0 0 10px rgba(0,0,0,0.47), 0 0 15px rgba(233,161,52,0.40); position: relative; 
    &:after {content: ""; position: absolute; z-index: -1; top: 50%; left: 0; right: 0; border: 1px solid #1f1f1f; box-shadow: 0 1px 0 #585858;}}

    &.silver {
        color: #989898;
        span {border:2px solid #989898; box-shadow: inset 0 0 10px rgba(0,0,0,0.47), 0 0 15px rgba(152,152,152,0.40); color: #989898;}
    }
`
const Rtimer = styled.div `
    color: #989898; text-align: center; font-size: 12px; position: absolute; top: 100%; right: 0; left: 0; padding: 15px 0 0; 
    b {color: #ffffff;}
`
const DumperLink = styled.a `
    color: #e9a134;
`

const Form = styled.form `
    margin-bottom: 90px;
    p {font-size: 12px; color: #989898; margin-top: 5px; display: table;
        a {color: #e9a134;}
        span {color: #fff;}
    }
`
const InputBox = styled.div `
    position: relative;
    .input-ico { 
        position: absolute; left: 0; top: 0; bottom: 0; background: #363636; width: 66px; display: flex; align-items: center; justify-content: center;
    }
`