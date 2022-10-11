import React, { Component, useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import BigPad from './BigPad';
import RewardCard from './RewardCard';
import DvoucherCard from './DvoucherCard';
import jackpot from '../../assets/main-jackpot.png';
import roundedrectangle from '../../assets/Rounded Rectangle 2582.png';
import layer2589 from '../../assets/fire.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons';


const Main = () => {

    const num = [1, 4, 8, 5, 6, 9, 6, 5];
    const [isOpen, setOpen] = React.useState(true);
    const [isOpen2, setOpen2] = React.useState(true);
    const [isOpen3, setOpen3] = React.useState(true);
    const [isOpen4, setOpen4] = React.useState(true);
    const [isOpen5, setOpen5] = React.useState(true);
    const [isOpen6, setOpen6] = React.useState(true);
    
    return (
        <MainLayout>
            <div className='px-5 md:px-56 mt-5 smeTitle01 wow fadeInUp' data-wow-delay="0.1s">
                <div className='font-play text-white-main text-9 md:text-1 text-center'>welcome to The Qonetum Finance reward program</div>
                <div className='text-center font-montserrat mt-2'>
                    <p className='text-white-main text-2 font-normal'>dVoucher Reward System</p>
                    <p className='text-white-2 text-8 mt-7 leading-8'>dVoucher tokens are NFT reward tokens that can be exchanged for any Qonetum Finance project tokens with the same $:$ face value through a router. The dVoucher reward NFT tokens can be traded on NFT marketplaces. Once dVoucher rewards are exchanged for project tokens, the newly received tokens are placed behind the Dumper Shield in a second position behind original project investors.</p>
                </div>
            </div>
            <div className='main-bg'>
                <div className='px-5 md:px-56 wow fadeInUp' data-wow-delay="0.4s">
                    <p className='text-center text-white-main font-montserrat font-bold text-2 mt-14'>All the dVoucher tokens are serving also as a lottery tickets in the jackpot</p>
                </div>
                <div className='relative'>
                    <div className="md:flex justify-center relative mb-5">
                        <div className='w-full md:w-auto wow zoomIn' data-wow-delay="0.2s">
                            <img src={jackpot} alt='jackpot' />
                        </div>
                        <div className="table md:absolute md:block bottom-1/2 md:translate-y-1/2 right-0 round-rec rounded-[10px] md:rounded-r-[0] mx-auto">
                            <div className='flex items-center p-1'>
                                <FontAwesomeIcon icon={faCaretRight} className='mx-1' />
                                <img className="fire-img" width='50' src={layer2589} alt='fire'  />
                                <p className='mx-2 text-6 text-white-main leading-[18px] font-bold font-montserrat'>Hurry, investors gain 1,458,586<br />lottery tickets for this month</p>
                            </div>
                        </div>
                    </div>
                    <p className='md:absolute text-center bottom-0 right-1/2 md:translate-x-1/2 text-white-main font-bold font-montserrat text-2 mt-2'>Total dVoucher</p>
                </div>
                <div className='px-5 md:px-56'>
                    <div>
                        <div className='flex justify-center items-end mt-7 wow bounce' delay="0.4">
                            <BigPad num={num[0]} />
                            <BigPad num={num[1]} />
                            <p className='mx-2 text-2 md:text-7 font-play text-yellow-main leading-13'>,</p>
                            <BigPad num={num[2]} />
                            <BigPad num={num[3]} />
                            <BigPad num={num[4]} />
                            <p className='mx-2 text-2 md:text-7 font-play text-yellow-main leading-13'>,</p>
                            <BigPad num={num[5]} />
                            <BigPad num={num[6]} />
                            <BigPad num={num[7]} />
                        </div>
                        <p className='text-4 leading-2 font-montserrat text-white-2 text-center mt-5'><span className='font-bold text-white-main'>30</span> days : <span className='font-bold text-white-main'>22</span> hours : <span className='font-bold text-white-main'>09</span> minutes : <span className='font-bold text-white-main'>12</span> seconds
                            {/* <span className='text-yellow-main'>Check your lottery reward</span> */}
                        </p>
                    </div>
                    <div className='mt-14 '>
                        <p className='text-2 leading-[36px] text-white-2 font-montserrat text-center mb-8 md:mb-12'>Choose how do you want to gain your dVouchers</p>
                        <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                            <RewardCard delay='0.3s' image='reward1' compensation='Up to $250,000 a month' title='Personal rewards' />
                            <RewardCard delay='0.4s' image='reward2' compensation='Up to $200,000 a month' title='Group rewards' />
                            <RewardCard delay='0.5s' image='reward3' compensation='Up to $250,000 a month' title='Competition' />
                            <RewardCard delay='0.6s' image='reward4' compensation='Up to $250,000 a month' title='Social engagement' />
                            <RewardCard delay='0.7s' image='reward5' compensation='Unlimited dVouchers' title='Referral program' />
                            <RewardCard delay='0.8s' image='reward6' compensation='Unlimited dVouchers' title='Staking reward' />
                            <RewardCard delay='0.9s' image='reward7' compensation='Unlimited dVouchers' title='Trading rewards' />
                            <RewardCard delay='1s' image='reward8' compensation='Unlimited dVouchers ' title='Dead tokens recovery' />
                        </div>
                        <hr className='mt-16 border-white-3' />
                    </div>
                </div>
            </div>
            
            <div className='mt-12 px-5 md:px-56'>
                <p className='text-2 leading-[36px] text-white-2 font-montserrat text-center mb-8 md:mb-12'>Types of dVouchers</p>
                <div className='grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <DvoucherCard delay='1' image='dvoucher1' compensation='Bronze Value of $1' title='Bronze lottery reward' />
                    <DvoucherCard delay='2' image='dvoucher2' compensation='Silver Value of $10' title='Silver lottery reward' />
                    <DvoucherCard delay='3' image='dvoucher3' compensation='Gold Value of $100' title='Gold lottery reward' />
                    <DvoucherCard delay='4' image='dvoucher4' compensation='Platinum Value of $1000' title='Platinum lottery reward' />
                </div>
            </div>
            <div className='mt-16 px-5 md:px-56 wow fadeInRight' data-wow-delay="0.1s">
                <div className={`accordion-title flex justify-between text-white-main items-center ${isOpen6 ? "open" : ""}`} onClick={() => setOpen6(!isOpen6)}>
                    <p className='uppercase text-9 leading-[42px] font-play'>How does it's works?</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <div className={`accordion-item ${!isOpen6 ? "collapsed" : "accordian"}`} >
                    <div className='text-8 text-white-2 font-montserrat mt-5'>
                        <div className='flex items-center'><button className='w-[30px] h-[30px] border-2 border-solid border-white-2 text-center mr-5'>1</button><p className='leading-[48px]'>Select from multiple ways to earn dVouchers</p></div>
                        <div className='flex items-center'><button className='w-[30px] h-[30px] border-2 border-solid border-white-2 text-center mr-5'>2</button><p className='leading-[48px]'>Choose the project to participate in</p></div>
                        <div className='flex items-center'><button className='w-[30px] h-[30px] border-2 border-solid border-white-2 text-center mr-5'>3</button><p className='leading-[48px]'>Gain dVoucher rewards to your wallet</p></div>
                        <div className='flex items-center'><button className='w-[30px] h-[30px] border-2 border-solid border-white-2 text-center mr-5'>4</button><p className='leading-[48px]'>When gaining dVoucher rewards an automatic lottery entry is generated</p></div>
                        <div className='flex items-center'><button className='w-[30px] h-[30px] border-2 border-solid border-white-2 text-center mr-5'>5</button><p className='leading-[48px]'>Check and claim and winnings from the lottery jackpot</p></div>
                        <div className='flex items-center'><button className='w-[30px] h-[30px] border-2 border-solid border-white-2 text-center mr-5'>6</button><p className='leading-[48px]'>Sell your dVoucher on the NFT secondary market</p></div>
                        <div className='flex items-center'><button className='w-[30px] h-[30px] border-2 border-solid border-white-2 text-center mr-5'>7</button><p className='leading-[48px]'>Or convert to Qonetum Finance project tokens through the Router</p></div>
                    </div>
                    <div className='text-4 leading-[24px] text-white-main font-montserrat mt-5'>
                        <p className='font-bold'>Extra engagement bonus</p>
                        <p>When joining any of Qonetum Finance’s social groups, other projects can conduct AMAs and reward participation. Qonetum Finance allows projects to conduct AMAs for FREE subject to projects providing rewards directly to users that engage.</p>
                    </div>
                </div>
            </div>
            <div className='mt-16 px-5 md:px-56 wow fadeInRight' data-wow-delay="0.1s">
                <div className={`accordion-title flex justify-between text-white-main items-center ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
                    <p className='uppercase text-9 leading-[42px] font-play'>Limited dVoucher rewards per month</p> 
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <div className={`accordion-item ${!isOpen ? "collapsed" : "accordian"}`} >
                    <p className='text-lg leading-[30px] text-white-2 font-montserrat my-10'>Every month there is a total limit of $1,000,000 dVouchers to distribute for limited dVoucher rewards per month. The total limit may increase based on demand and rewards are split as follows: </p>
                    <table className='text-4 leading-[48px] text-white-main font-bold font-montserrat min-w-full divide-y divide-white-6'>
                        <thead>
                            <tr className='text-white-2 divide-x divide-white-6 text-left bg-dark-2 border-solid border-t border-white-6'>
                                <th className='pl-6'>Category</th>
                                <th className='pl-6'>dVoucher</th>
                                <th className='pl-6'>% of total</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-white-6'>
                            <tr className='divide-x divide-white-6'>
                                <td className='pl-6'>Personal rewards</td>
                                <td className='pl-6'>$250,000</td>
                                <td className='pl-6'>25%</td>
                            </tr>
                            <tr className='divide-x divide-white-6'>
                                <td className='pl-6'>Group rewards</td>
                                <td className='pl-6'>$200,000</td>
                                <td className='pl-6'>20%</td>
                            </tr>
                            <tr className='divide-x divide-white-6'>
                                <td className='pl-6'>Competition</td>
                                <td className='pl-6'>$250,000</td>
                                <td className='pl-6'>25%</td>
                            </tr>
                            <tr className='divide-x divide-white-6'>
                                <td className='pl-6'>Social engagement</td>
                                <td className='pl-6'>$250,000</td>
                                <td className='pl-6'>25%</td>
                            </tr>
                            <tr className='divide-x divide-white-6'>
                                <td className='pl-6'>Learn and earn</td>
                                <td className='pl-6'>$50,000</td>
                                <td className='pl-6'>5%</td>
                            </tr>
                            <tr className='divide-x divide-white-6 !border-b border-solid border-white-6'>
                                <td className='pl-6'>Total</td>
                                <td className='pl-6'>$1,000,000</td>
                                <td className='pl-6'>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mt-16 px-5 md:px-56 wow fadeInRight' data-wow-delay="0.1s">
                <div className={`accordion-title flex justify-between text-white-main items-center ${isOpen2 ? "open" : ""}`} onClick={() => setOpen2(!isOpen2)}>
                    <p className='uppercase text-9 leading-[42px] font-play'>Unlimited dVoucher rewards</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <div className={`accordion-item ${!isOpen2 ? "collapsed" : "accordian"}`}>
                    <table className='text-4 leading-[48px] text-white-main font-bold font-montserrat min-w-full divide-y divide-white-6 mt-10'>
                        <thead>
                            <tr className='text-white-2 divide-x divide-white-6 text-left bg-dark-2 border-solid border-t border-white-6'>
                                <th className='pl-6'>Category</th>
                                <th className='pl-6'>dVoucher</th>
                                <th className='pl-6'>%of total</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-white-6'>
                            <tr className='divide-x divide-white-6'>
                                <td className='pl-6'>Referral program</td>
                                <td className='pl-6'>1 Gold dVoucher tokens per each referral</td>
                                <td className='pl-6'>Unlimited</td>
                            </tr>
                            <tr className='divide-x divide-white-6'>
                                <td className='pl-6'>Trading rewards</td>
                                <td className='pl-6'>1 Bronze dVoucher tokens per every $100 value of trading volume</td>
                                <td className='pl-6'>Unlimited</td>
                            </tr>
                            <tr className='divide-x divide-white-6'>
                                <td className='pl-6'>Staking rewards</td>
                                <td className='pl-6'>1 Bronze dVoucher token for every $100 staking value</td>
                                <td className='pl-6'>Unlimited</td>
                            </tr>
                            <tr className='divide-x divide-white-6 !border-b border-solid border-white-6'>
                                <td className='pl-6'>Dead tokens recovery</td>
                                <td className='pl-6'>100:1 dVoucher Ratio</td>
                                <td className='pl-6'>Unlimited</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mt-16 px-5 md:px-56 wow fadeInRight' data-wow-delay="0.1s">
                <div className={`accordion-title flex justify-between text-white-main items-center ${isOpen3 ? "open" : ""}`} onClick={() => setOpen3(!isOpen3)}>
                    <p className='uppercase text-9 leading-[42px] font-play'>How the Lottery Jackpot works ?</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <div className={`accordion-item ${!isOpen3 ? "collapsed" : "accordian"}`}>
                    <p className='text-8, leading-[30px] text-white-2 font-montserrat my-10'>The Lottery Jackpot encourages ongoing activity and engagement by our community. The Jackpot restarts monthly. dVouchers generate a Lottery entry once, at the time they are awarded. </p>
                </div>
            </div>
            <div className='mt-16 px-5 md:px-56 wow fadeInRight' data-wow-delay="0.1s">
                <div className={`accordion-title flex justify-between text-white-main items-center ${isOpen4 ? "open" : ""}`} onClick={() => setOpen4(!isOpen4)}>
                    <p className='uppercase text-9 leading-[42px] font-play'>Lottery Payout Calculation per class</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <div className={`accordion-item ${!isOpen4 ? "collapsed" : "accordian"}`}>
                    <div className='text-8, leading-[30px] text-white-2 font-montserrat my-10'>
                        <p>The total lottery reward is calculated by the dVoucher class.</p>
                        <p className='text-lg mt-10'>Example</p>
                    </div>
                    <table className='text-4 leading-[48px] text-white-2 font-bold font-montserrat min-w-full divide-y divide-white-6'>
                        <tbody className='divide-y divide-white-6'>
                            <tr className='border-solid border-t border-white-6'>
                                <td>Bronze</td>
                                <td className='text-right'>$10,000 dVoucher</td>
                            </tr>
                            <tr>
                                <td>Silver</td>
                                <td className='text-right'>$20,000 dVoucher</td>
                            </tr>
                            <tr>
                                <td>Gold</td>
                                <td className='text-right'>$30,000 dVoucher</td>
                            </tr>
                            <tr className='border-solid !border-b border-white-6'>
                                <td>Platinum</td>
                                <td className='text-right'>$50,000 dVoucher</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mt-16 mb-32 px-5 md:px-56 wow fadeInRight' data-wow-delay="0.1s">
                <div className={`accordion-title flex justify-between text-white-main items-center ${isOpen5 ? "open" : ""}`} onClick={() => setOpen5(!isOpen5)}>
                    <p className='uppercase text-9 leading-[42px] font-play'>Meta lottery</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <div className={`accordion-item ${!isOpen5 ? "collapsed" : "accordian"}`}>
                    <p className='text-lg leading-[30px] text-white-2 font-montserrat my-10'>Each time an entry is generated by points converting to dVoucher NFTs, users are entered into the Mega Lottery automatically.<br />
                        The Mega Lottery price is $100,000 dVouchers.</p>
                </div>
            </div>
        </MainLayout>
    )
}

export default Main;