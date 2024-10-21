import React from 'react'

const Hero = () => {
  return (
    <section className='relative flex h-screen items-center justify-center    '>
        <div className='absolute inset-0 -z-10 bg-gradient-to-t from-transparent from-70% to to-black'>
    <div className='relative z-20 flex h-screen flex-col justify-end pb-20 '>

    </div>

</div>
          <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
            <video src= "https://videos.pexels.com/video-files/3514371/3514371-sd_640_360_30fps.mp4" className='h-full w-full object-cover' muted autoPlay loop playsInline poster=''></video>

      
</div>
<div className='absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to to-black'>
    <div className='relative z-20 flex h-screen flex-col justify-end pb-20 '>
        <p className='p-4 text-lg tracking-tighter '>Stade </p>

    </div>

</div>

    </section>
  
  )
}

export default Hero
