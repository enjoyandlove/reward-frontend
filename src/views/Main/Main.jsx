import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import BigPad from './BigPad';
import RewardCard from './RewardCard';
import DvoucherCard from './DvoucherCard';
import jackpot from '../../assets/main-jackpot.png';
import roundedrectangle from '../../assets/Rounded Rectangle 2582.png';
import layer2589 from '../../assets/Layer 2589.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons';


const Main = () => {

    const num = [1, 4, 8, 5, 6, 9, 6, 5];

    return (
        <MainLayout>
            <div className='font-play text-white-main text-1 text-center'>WELCOME TO THE QUNETUM FINANCE REWARD PROGRAM</div>
            <div className='text-center font-montserrat'>
                <p className='text-white-main text-2 font-normal'>dVoucher Reward System</p>
                <p className='text-white-2 text-8 mt-6'>dVoucher tokens are NFT reward tokens that can be exchanged for any Qonetum Finance project tokens with the same $:$ face value through a<br />router. The dVoucher reward NFT tokens can be traded on NFT marketplaces. Once dVoucher rewards are exchanged for project tokens, the newly<br /> received tokens are placed behind the Dumper Shield in a second position behind original project investors.</p>
            </div>
            <div className='main-bg'>
                <p className='text-center text-white-main font-montserrat font-bold text-2 mt-10'>All the dVoucher tokens are serving also as a lottery tickets in the jackpot</p>
                <div className='relative'>
                    <div className="flex justify-center relative">
                        <div>
                            <img src={jackpot} alt='jackpot' />
                        </div>
                        <div className="absolute bottom-1/2 translate-y-1/2 right-0 round-rec rounded-l-[10px]">
                            <div className='flex items-center p-1'>
                                <FontAwesomeIcon icon={faCaretRight} className='mx-1' />
                                <img src={layer2589} alt='fire' className='mx-2' />
                                <p className='mx-2 text-6 text-white-main leading-[18px] font-bold font-montserrat'>Hurry, investors gain 1,458,586<br />lottery tickets for this month</p>
                            </div>
                        </div>
                    </div>
                    <p className='absolute bottom-0 right-1/2 translate-x-1/2 text-white-main font-bold font-montserrat text-2'>Total dVoucher</p>
                </div>
                <div>
                    <div className='flex justify-center mt-7'>
                        <BigPad num={num[0]} />
                        <BigPad num={num[1]} />
                        <p className='mx-2 text-7 font-play text-yellow-main leading-13'>,</p>
                        <BigPad num={num[2]} />
                        <BigPad num={num[3]} />
                        <BigPad num={num[4]} />
                        <p className='mx-2 text-7 font-play text-yellow-main leading-13'>,</p>
                        <BigPad num={num[5]} />
                        <BigPad num={num[6]} />
                        <BigPad num={num[7]} />
                    </div>
                    <p className='text-4 leading-2 font-montserrat text-white-2 text-center mt-5'><span className='font-bold text-white-main'>30</span> days : <span className='font-bold text-white-main'>22</span> hours : <span className='font-bold text-white-main'>09</span> minutes : <span className='font-bold text-white-main'>12</span> seconds : <span className='font-bold text-white-main'>44</span> miliseconds | <span className='text-yellow-main'>Check your lottery reward</span></p>
                </div>
                <div className='mt-12 px-28 md:px-56'>
                    <p className='text-2 leading-[36px] text-white-2 font-montserrat text-center mb-12'>Choose how you want to gain your dVouchers</p>
                    <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <RewardCard image='reward1' compensation='Up to $250,000 a month' title='Personal rewards' />
                        <RewardCard image='reward2' compensation='Up to $200,000 a month' title='Group rewards' />
                        <RewardCard image='reward3' compensation='Up to $250,000 a month' title='Competition' />
                        <RewardCard image='reward4' compensation='Up to $250,000 a month' title='Social engagement' />
                        <RewardCard image='reward5' compensation='Unlimited dVouchers' title='Referral program' />
                        <RewardCard image='reward6' compensation='Unlimited dVouchers' title='Staking reward' />
                        <RewardCard image='reward7' compensation='Unlimited dVouchers' title='Trading rewards' />
                        <RewardCard image='reward8' compensation='Unlimited dVouchers ' title='Dead tokens recovery' />
                    </div>
                    <hr className='mt-16 border-white-3' />
                </div>
            </div>
            <div className='mt-12 px-28 md:px-56'>
                <p className='text-2 leading-[36px] text-white-2 font-montserrat text-center mb-12'>Types of dVouchers</p>
                <div className='grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <DvoucherCard image='dvoucher1' compensation='Bronze Value of $1' title='Bronze lottery reward' />
                    <DvoucherCard image='dvoucher2' compensation='Silver Value of $10' title='Silver lottery reward' />
                    <DvoucherCard image='dvoucher3' compensation='Gold Value of $100' title='Gold lottery reward' />
                    <DvoucherCard image='dvoucher4' compensation='Platinum Value of $1000' title='Platinum lottery reward' />
                </div>
            </div>
            <div className='mt-16 px-28 md:px-56'>
                <div className='flex justify-between text-white-main items-center'>
                    <p className='uppercase text-9 leading-[42px] font-play'>How does it's works?</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
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
            <div className='mt-16 px-28 md:px-56'>
                <div className='flex justify-between text-white-main items-center'>
                    <p className='uppercase text-9 leading-[42px] font-play'>Limited dVoucher rewards per month</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <p className='text-8, leading-[30px] text-white-2 font-montserrat my-10'>Every month there is a total limit of  $1,000,000 dVouchers to distribute for limited dVoucher rewards per month. The total limit may increase based on demand and rewards are split as follows: </p>
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
            <div className='mt-16 px-28 md:px-56'>
                <div className='flex justify-between text-white-main items-center'>
                    <p className='uppercase text-9 leading-[42px] font-play'>Unlimited dVoucher rewards</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
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
                            <td className='pl-6'>1 Bronze dVoucher tokens per every $100 staking value</td>
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
            <div className='mt-16 px-28 md:px-56'>
                <div className='flex justify-between text-white-main items-center'>
                    <p className='uppercase text-9 leading-[42px] font-play'>How the Lottery Jackpot works ?</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <p className='text-8, leading-[30px] text-white-2 font-montserrat my-10'>The Lottery Jackpot encourages ongoing activity and engagement by our community. The Jackpot restarts monthly. dVouchers generate a Lottery entry once, at the time they are awarded. </p>
            </div>
            <div className='mt-16 px-28 md:px-56'>
                <div className='flex justify-between text-white-main items-center'>
                    <p className='uppercase text-9 leading-[42px] font-play'>Lottery Payout Calculation per class</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <div className='text-8, leading-[30px] text-white-2 font-montserrat my-10'>
                    <p>The total lottery reward is calculated by the dVoucher class.</p>
                    <p className='mt-10'>Example</p>
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
            <div className='mt-16 mb-32 px-28 md:px-56'>
                <div className='flex justify-between text-white-main items-center'>
                    <p className='uppercase text-9 leading-[42px] font-play'>Meta lottery</p>
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
                <p className='text-8, leading-[30px] text-white-2 font-montserrat my-10'>Each time an entry is generated by points converting to dVoucher NFTs, users are entered into the Mega Lottery automatically.<br />
                    The Mega Lottery price is $100,000 dVouchers.</p>
            </div>
        </MainLayout>
    )
}

export default Main;