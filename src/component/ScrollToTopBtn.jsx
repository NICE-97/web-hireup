import React, { useState, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopBtn() {
  const [ scrollToTopBtn, setScrollToTopBtn ] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () =>{
        if (window.scrollY > 200) {
            setScrollToTopBtn(true)
        }else{
            setScrollToTopBtn(false)
        }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
  }

  return (
    <div>
        {scrollToTopBtn && (
            <button onClick={scrollUp} className='fixed bottom-10 right-10 p-2 border-2 bg-white z-30 transition duration-300 ease-in-out text-gray-700 hover:text-blue-700'><FaArrowUp /></button>
        )}
    </div>
  )
}

export default ScrollToTopBtn
