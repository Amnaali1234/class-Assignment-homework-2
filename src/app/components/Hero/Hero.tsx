import style from "./Hero.module.css"
import React from 'react'

const Hero = () => {
  return (
    <div> 
        <h1 className= {style.heading}>Hero Section</h1>
        <p className= {style.paragraph}>
A hobby is an activity that someone enjoys doing in their spare time. It can be anything from cooking and gardening to playing sports and collecting stamps. There are no rules about what makes a good hobby, so it is entirely up to the individual to choose something that they enjoy. Some people like to spend their free time doing something active, while others prefer to relax and take part in a more passive activity.
</p>
    </div>
  )
}

export default Hero