import React from 'react'
import "./Content.css"
import Card from './Card'
const Content = () => {
    const Totalcard=[
        {
            heading:"A Changing World Order",
            desc:"The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including he world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this,",
            thought:"anujgosalia",
            date:"August 2",
            read:"2 Mins Read",
            view:102
        },
        {
            heading:"India v/s Australia",
            desc:"Think about it - this cricket series was akin to therapy.Laying our childhood trauma up top, working with it slowly and surely over two Think about it - this cricket series was akin to therapy.Laying our childhood trauma up top, working with it slowly and surely over twoThink about it - this cricket series was akin to therapy.Laying our childhood trauma up top, working with it slowly and surely over two Think about it - this cricket series was akin to therapy.Laying our childhood trauma up top, working with it slowly and surely over two",
            thought:"anujgosalia",
            date:"January 21",
            read:" 1 min",
            view:"156"
        },
        {
            heading:"Write To Build",
            desc:"- stories - products - companies",
            thought:"anujgosalia",
            date:"November 18",
            read:"1 Min",
            view:"228"
        }
    ];
  return (
    <div className='content'>
        <div className='total_post'>
            134 Posts
        </div>
        <div className='small_line'></div>
        <div>
        {Totalcard.map((item, index) => (
                <Card key={index} content={item} />
        ))}
        </div>
    </div>
  )
}

export default Content