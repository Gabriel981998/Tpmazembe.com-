import React, { useEffect, useState } from 'react'

import { TfiClose } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import { AnimatePresence ,motion} from 'framer-motion';

const DopDown = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
    useEffect(()=>{
        if(!toggleMenu){
            document.body.style.overflow="hidden";

        }else{
            document.body.style.overflow="auto"
        }
    },[isOpen])
    const containerVariants={
        hidden:{opacity:0,y:"-100%"},
        visible:{opacity:1,y:0,
            transition:{
                staggerChildren:0.1
            }
        }
    }

    const linkVarians={

        hidden:{opacity:0,y:-50},
        visible:{opacity:1,y:0}
    }
  return (
    <>
<nav className='fixed right-0 top-0 z-40 p-4 pl-10 bg-transparent'>
<button onClick={toggleMenu} className=' p-2'>
    {isOpen ?( 
        <  TfiClose className="h-4 w-6 text-black"/>
    ):(
        <CiMenuBurger  className="h-4 w-6 text-white"/>
    )}

</button>
</nav>
<AnimatePresence>


{
    isOpen && (
        < motion.div initial="hidden" animate="visible" exit="hidden" variants={containerVariants} className='fixed inset-0 z-20 flex flex-col items-center justify-center bg-white text-black'>
            <ul className='space-y-6 text-3xl'>
                < motion.li variants={linkVarians}>

                    <a href='/' onClick={toggleMenu} className='text-5xl font-semibold uppercase tracking-wide hover:text-yellow-600 lg:text-9xl '>
                        Page D'acceuil
                    </a>
                </motion.li>
                < motion.li variants={linkVarians}>

                    <a href='' onClick={toggleMenu} className='text-5xl font-semibold uppercase tracking-wide hover:text-yellow-600 lg:text-9xl '>
                        Stade
                    </a>
                </motion.li>
                < motion.li variants={linkVarians}>

                    <a href='' onClick={toggleMenu} className='text-5xl font-semibold uppercase tracking-wide hover:text-yellow-600 lg:text-9xl '>
                        Shop
                    </a>
                </motion.li>
                < motion.li variants={linkVarians}>

                    <a href='/equipe' onClick={toggleMenu} className='text-5xl font-semibold uppercase tracking-wide hover:text-yellow-600 lg:text-9xl '>
                        Equipe
                    </a>
                </motion.li>
            </ul>

        </motion.div>
    )
}
</AnimatePresence>
    </>
  )
}

export default DopDown
