import React from 'react'
import "./Header.css";
import DiamondIcon from '@mui/icons-material/Diamond';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarsIcon from '@mui/icons-material/Stars';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const Header = () => {
  return (
    <div className='Header'>
        <div className='Profile_Section'>
            <div className='Profile_pic'></div>
            <div className='Profile_stats'>
                <div className='Profile_Name'>
                    <span>Siddant Singh</span>
                    <DiamondIcon  sx={{color:"blue",paddingLeft:"10px",fontSize:40}}/>
                    <CheckCircleIcon sx={{color:"green",paddingLeft:"10px",fontSize:40}}/>
                </div>
                <div className='follower_status'>
                    <div className='follower_count'>
                        <span className='total_followers'>1234</span>
                        <span style={{fontSize:"large"}}>Follower</span>
                    </div>
                    <div className='following_count'>
                        <span className='total_following'>1234</span>
                        <span style={{fontSize:"large"}}>Following</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='profile_extra_section'> 
            <div className='profile_extra_position'>CO - Founder and CEO at Terribly Tiny Tales</div>
            <a href="https://www.linkedin.com/in/siddhant-singh-15b3531b7/">https://www.linkedin.com/in/siddhant-singh-15b3531b7/</a>
            <div className='profile_extra_stats'>
                <div><StarsIcon sx={{fontSize:30,color:'blue'}}/><span>555</span></div>
                <div><ThumbUpIcon sx={{fontSize:30,color:'yellow'}}/><span>555</span></div>
                <div><FavoriteIcon sx={{fontSize:30,color:'burlywood'}}/><span>555</span></div>
                <div><RemoveRedEyeIcon sx={{fontSize:30,color:'red'}}/><span>555</span></div>
            </div>
        </div>
    </div>
  )
}

export default Header