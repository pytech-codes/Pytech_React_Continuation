import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Loader = () => {
    useGSAP(() => {
const tl = gsap.timeline({
    defaults:{
        stagger:1,
        opacity:0,
        ease:'linear',
        duration:2,
        width:0
    }
})
tl.from('.box1, .box2, .box3',{
opacity:1,
})
    })
    const size = {
        height: '90px'
    }
    const size2 = {
        height: '49px'
    }
  return (
    <div className='main space-y-0.45 mx-auto overflow-hidden max-h-dvh h-full w-full box-content'>
<div className="box box1 bg-red-500" style={size}>
    
</div>
<div className="box box2 bg-red-500" style={size}>

</div>
<div className="box box3 bg-red-500" style={size}>

</div>
<div className="box box3 bg-red-500" style={size}>

</div>
<div className="box box3 bg-red-500" style={size}>

</div>
<div className="box box3 bg-red-500" style={size}>

</div>
<div className="box box3 bg-red-500" style={size2}>

</div>
<div className="box box3 bg-red-500" style={size2}>

</div>
<div className="box box3 bg-red-500" style={size2}>

</div>
<div className="box box3 bg-red-500" style={size2}>

</div>
<div className="box box3 bg-red-500" style={size2}>

</div>
<div className="box box3 bg-red-500" style={size2}>

</div>





    </div>
  )
}

export default Loader