import React from 'react';
import { BsArrowRight, BsInstagram } from 'react-icons/bs';
import { SiXdadevelopers, SiWebmoney } from 'react-icons/si';
import { GrAnalytics, GrStarOutline } from 'react-icons/gr';
import { RiSeoLine } from 'react-icons/ri';
import { CiTwitter } from 'react-icons/ci';
import "./FirstSec.css";
// SiXdadevelopers
// SiWebmoney 
// GrAnalytics
// RiSeoLine
// BsInstagram
// FaFacebookF
// CiTwitter
// BiLogoPinterestAlt
// BsArrowRight



const FirstSec = () => {
  return (
    <div>
        <div className="first_div">
            <div className='firstleft'>
                <div className="img">
                    <img src="/assets/images/five.jpg" alt="my_picture" />
                </div>
                <div className="sum_text">
                    <div>
                        <h3>A SOFTWARE DEVELOPER</h3>
                        <h2>ANYIEKPON <br />F. AKPAN</h2>
                        <h4>I am a Software Developer based in Nigeria</h4>
                    </div>
                    <div className='first_icon'>
                        <BsArrowRight className='rightarrow' />
                    </div>
                </div>
            </div>
            <div className='firstright'>
                <div className='textAnima'></div>
                <div className='details'>
                    <div className='cred'>
                        <div className='cred_img'>
                            <img src="/assets/images/signature.jpg" alt="signature" />
                        </div>
                        <div className='cred_more'>
                            <div className='cred_moeh1'>
                                <h4>MORE ABOUT ME</h4>
                                <h2>Credentials</h2>
                            </div>
                            <div className='first_icon'>
                                <BsArrowRight className='rightarrow' />
                            </div>
                        </div>
                    </div>
                    <div className='cred'>
                        <div className='cred_img'>
                            <img src="/assets/images/signature.jpg" alt="signature" />
                        </div>
                        <div className='cred_more'>
                            <div className='cred_moeh1'>
                                <h4>MORE ABOUT ME</h4>
                                <h2>Credentials</h2>
                            </div>
                            <div className='first_icon'>
                                <BsArrowRight className='rightarrow' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="second_div">
            <div className='fonts'>
                <div className='cred_img'>
                    <img src="/assets/images/ai.png" alt="blog" />
                </div>
                <div className='cred_more second_divcred_fonts'>
                    <div className='cred_moeh1 second_cred_moeh1'>
                        <h4>Blog</h4>
                        <h2>GBlog</h2>
                    </div>
                    <div className='first_icon'>
                        <BsArrowRight className='rightarrow' />
                    </div>
                </div>
            </div>
            <div className='service_off'>
                <div className='cred_img service_icon'>
                    <div><SiXdadevelopers /></div>
                    <div><SiWebmoney /></div>
                    <div><GrAnalytics /></div>
                    <div><RiSeoLine /></div>
                </div>
                <div className='cred_more second_divcred'>
                    <div className='cred_moeh1 service_mor'>
                        <h4>SPECIALIZATION</h4>
                        <h2>Services Offering</h2>
                    </div>
                    <div className='first_icon'>
                        <BsArrowRight className='rightarrow' />
                    </div>
                </div>
            </div>
            <div className='profiles'>
                <div className='cred_img profiles_stay'>
                    <div className='inerProfile_icons'>
                        <div><BsInstagram /></div>
                        <div><CiTwitter /></div>
                    </div>
                </div>
                <div className='cred_more second_divcred_fonts'>
                    <div className='cred_moeh1'>
                        <h4>STAY WITH ME</h4>
                        <h2>Credentials</h2>
                    </div>
                    <div className='first_icon'>
                        <BsArrowRight className='rightarrow' />
                    </div>
                </div>
            </div>
        </div>
        <div className="third_div">
            {/* <div className='expi'></div> */}
            <div className='work_2'>
                <div className='third_star'><GrStarOutline /></div>
                <div className='third_toge'>
                    <div className='third_togeText'><h1>Let's<br /> work <span>together</span></h1></div>
                    <div className='first_icon last_icon'><BsArrowRight className='rightarrow' /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstSec