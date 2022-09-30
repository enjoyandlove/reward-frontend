import React, { PureComponent, useState } from "react";
import styled from 'styled-components';
import AppBar from './../components/AppBar/AppBar2';
import Footer02 from './../components/Footer/Footer02';

// Images
import MainBg from './../assets/main-bg.jpg';



export default class StakingRewards extends PureComponent {
    render() {
        return (
            <>
                <div className='background'>
                    <AppBar />
                    <MainContainer>
                        <Container className="pt-10">
                            <div className='mt-14'>
                                <div className='font-play text-white-main text-9 md:text-1 text-center'>For Service providers</div>
                                <div className='text-center font-montserrat mt-2'>
                                    <p className='text-white-2 text-8 mt-7 leading-8'>Many service providers engage with projects that can benefit from Qonetum Finance solutions. To create a win-win collaboration, we allow service providers to claim a special coupon credit for their projects clients. The coupon credit acts similar to the AWS credit rewards given to startups by VCs and accelerators. </p>
                                    <p className='text-white-2 text-8 mt-7 leading-8'>Each credit coupon represents a $10,000 value and up to 50% discount from any of Qonetum Finance projects. Service providers can claim every month 100 coupons maximum up to a value of $1M. </p>
                                    <p className='text-white-2 text-8 mt-7 leading-8'>Here is an example of how a service provider can use a coupon credit. Let's say a service provider is an auditing company or PR company. Both companies could offer their clients a $10,000 credit automatically, adding immediate value to any service offering.  </p>
                                </div>
                                <hr className="my-14 border-zinc-900"></hr>
                                <div className="font-play text-white-main text-1 md:text-4xl text-center mb-12">COntact us</div>
                                <Form className="text-white-main">
                                    <div className="grid grid-cols-3 items-end">
                                        <div className="px-4 mb-5">
                                            <label className="text-lg font-bold mb-3 block">Full name</label>
                                            <input type="text" className="px-6 text-lg w-full h-[67px] bg-black border-2 border-current border-zinc-900 text-left flex items-center"></input>
                                        </div>
                                        <div className="px-4 mb-5"> 
                                            <label className="text-lg font-bold mb-3 block">Email</label>
                                            <input type="text" className="px-6 text-lg w-full h-[67px] bg-black border-2 border-current border-zinc-900 text-left flex items-center"></input>
                                        </div>
                                        <div className="px-4 mb-5"> 
                                            <button class="btn-golden w-full h-[67px] bg-yellow-main border-2 border-solid bg-opacity-0 text-slate-50 font-bold text-xl uppercase ">SUBMIT</button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </Container>
                    </MainContainer>
                    <Footer02 />
                </div>
            </> 
        );
    }
}

const MainContainer = styled.div`
    background: url(${MainBg}) center 250px no-repeat; padding-bottom: 80px; min-height: calc(100vh - 200px)
`
const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
`;
const Container = styled.div`
    width:1360px; margin: 0px auto;
    .border-zinc-900 {border-color: #363636;}
`   
const Table = styled.table `
    width: 100%;
    tr:hover { background: #191a22;}
`
const Thd = styled.th `
    font-size: 14px; color: #989898; padding: 6px 18px; border-top: 2px solid #262626; border-bottom: 2px solid #262626; font-weight: 700; max-width: 25%; background-color: #080808; text-align: left;
    & + th {
        border-left: 1px solid #262626
    }
    img {display: inline-block; vertical-align: middle; margin-right: 10px}
`
const Tcell = styled.td `
    font-size: 14px; color: #fff; max-width: 25%; padding: 12px 18px; border-bottom: 1px solid #262626; position: relative;
    & + td {
        border-left: 1px solid #262626
    }
    &.txt-blue {color: #4557ff;}
    &.color-bronze {color: #dea695;}
    &.color-silver { color: #989898;}
    &.color-gold { color: #e9a134; }
    &.color-platinum {color: #c9c9c9;}
    &.color-offwhite {color: #fefefe;}
`

const Form = styled.form `
    margin-bottom: 70px;
    p {font-size: 12px; color: #989898; margin-top: 5px; display: table;
        a {color: #e9a134;}
        span {color: #fff;}
    }
`