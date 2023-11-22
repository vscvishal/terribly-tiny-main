import React from 'react'
import "./Card.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const Card = ({content}) => {
  return (
    <div className='card'>
        <div className='card_heading'>
            <h1 >{content.heading}</h1>
            <div><ThumbUpIcon sx={{fontSize:30,color:'yellow'}}/></div>
        </div>
        <div className='card_description'>{content.desc}
        </div>
        <div className='card_extra_detail'>
            <div className='card_uploaded_by'>
                <span style={{color:"blue"}}>Thought</span> by <span>{content.thought}</span>
            </div>
        <div className='Card_uploaded_timestamp'>
                <div className='card_uplaod_date'>
                {content.date}
                </div>
                <div className='dot' />
                <div className='card_uplaod_read_time'>
                {content.read}  Read
                </div>
                <div className='dot' />
                <div className='card_total_view'>
                {content.view} Views
                </div>  
            </div>
        </div>
        <div className='line' />
    </div>
  )
}

export default Card