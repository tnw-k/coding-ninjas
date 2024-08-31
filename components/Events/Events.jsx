import React from 'react'
import Timeline from './PastEvents'

function Events() {
  return (
    <div id="events" className="flex-col my-20 justify-center xl:px-20 sm:px-10 lg:px-20 px-6">
<h1 className="text-center sm:text-5xl text-4xl font-bold event-title ">      Our Events </h1>
<div classNam="flex justify-center mx-auto">
<Timeline/>
</div>  
  </div>
  )
}

export default Events
