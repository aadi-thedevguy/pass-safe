import React from 'react'
import useDarkMode from '../utils/useDarkMode'
import {GiGooeyEyedSun, GiMoonBats} from 'react-icons/gi'
import {GoDesktopDownload} from 'react-icons/go'
import { useReactPWAInstall } from "react-pwa-install";


const Header = () => {

  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme)

  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  const handleClick = () => {

    pwaInstall({
      title: "Pass Safe now Works Offline too",
      logo:'/logo.png',
      description: "You can now generate Unguessable passwords delivered directly to your mail box on your mobiles, tablets and desktops. Run Pass Safe as a Native App for any of your device",
    })
      .then(() => alert("App installed successfully"))
      .catch(() => alert("User opted out from installing"));
  }
  

  return (
    <header className='w-full mx-auto mb-16'>
      <nav className='flex items-center justify-between mb-20 relative'>

        <div className='ml-4 '>
            <img src="/logo.png" alt="logo" className='w-12 h-12' />

            {
            supported() && !isInstalled() && 
            (
              
                <button type='button' className='border-2 text-accent-color btn border-accent-color py-1 mt-2 px-4 rounded-lg absolute left-2'
                onClick={handleClick}
                >Install <GoDesktopDownload className='inline' /></button>
              
            )
            }
        </div>
          <div className='mr-6'>
            <h1 className='text-4xl text-accent-color uppercase font-bold'>Pass Safe</h1>
            <div title='Toggle Darkmode' className={` mt-3 flex bg-accent-color w-[70px] h-[30px] rounded-full absolute right-5
            ${ !darkTheme ?  'justify-end': 'justify-start'}
            `}>
              
              <span className='w-[40px] h-full inline-flex items-center justify-center bg-white rounded-full cursor-pointer transition-all duration-700 ease-out'
              onClick={handleMode}
              >
              {
                !darkTheme ? 
                <GiGooeyEyedSun className='w-4/5 h-4/5 text-orange-400 hover:text-orange-600' /> :

                <GiMoonBats className='w-4/5 h-4/5 text-zinc-600 hover:text-stone-300' /> 
              }
              </span>
            </div>

          </div>
      </nav>
    
        <div className=' mt-6 mx-auto w-full text-primary-color dark:text-white'>
          
          <h2 className='text-2xl text-center text-emphasis mb-5 font-bold uppercase italic'>We Provide Passwords that</h2>
          <div className='flex max-w-full justify-center ml-14 md:ml-24'>

            <ul className="marker:text-emphasis list-disc pl-5 space-y-3 ">
              <li>are Complex and Hard to Crack</li>
              <li>can be Copied or delivered directly in your Mailbox</li>
              <li>Self-destructs within 10 seconds</li>
              <li>No hassle coming up with a strong password</li>
            </ul>
          </div>

          
        </div>
    </header>
  )
}

export default Header