import React,{useState, useRef} from 'react'
import {HiClipboard} from 'react-icons/hi'
import {FiCheckCircle} from 'react-icons/fi'
import {GiCancel} from 'react-icons/gi'
import ReactLoading from 'react-loading'
import axios from 'axios'

import { generatePassword } from '../utils/generatePassword'

const Container = () => {

  const [pass, setPass] = useState('')
  const [message, setMessage] = useState({})
  const [clicked, setClick] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const ref = useRef()
  const tooltipRef = useRef()
  const LENGTH = 12

const displayPass = (e) => {
  e.preventDefault()
  setLoading(true)

  setTimeout(() => {
    setPass(generatePassword(LENGTH))
    setLoading(false)
  },2000)
  setTimeout(() => setPass(''),10000)
}

const handleClick = () => {
  if (window.navigator) {
       window.navigator.clipboard.writeText(ref.current.innerText)
      }
      setClick(true)
      
}

// const host = 'http://localhost:8000'
const sendMail = async (password) => {

  if (email === '') return 
  const res = await axios.post('/api/sendmail', {
    email,
  password : password
  })

  const data = await res.data
  
  setMessage({...message,
   msg : data.status,
   content : data.message
  })
  setLoading(false)
}

const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)

  let password = generatePassword(LENGTH)
  
  sendMail(password)
 
  setEmail('')
  
}

const {msg, content} = message

  return (
    <section className='grid place-content-center relative w-11/12 md:w-3/4 mx-auto mb-5'>
      <h2 className='text-2xl text-center text-emphasis mb-8'> Enter your E-Mail <em className='text-3xl'>OR</em> Generate right here and Copy</h2>
      <form className='relative border-emphasis border-2 rounded-md flex flex-col gap-7 items-center  py-4 h-full '>
        <fieldset className='flex flex-col gap-3'>

        <label htmlFor="email"> Your Email :</label>
        <input className='form-input rounded-md outline-emphasis text-primary-color' type="email" name='email' id='email' placeholder='john@example.com' autoComplete='true' 
        value={email} onChange={(e) => setEmail(e.target.value)}
        />
        </fieldset>
        <div>
        <button type='submit' className='border-2 mr-3 btn border-accent-color py-2 px-4 rounded-lg' onClick={handleSubmit}> Email Me</button>
        <button className='border-2 btn border-accent-color py-2 px-4 rounded-lg '
        onClick={displayPass}
        >Generate</button>
        </div>

        {loading &&
       <ReactLoading type='spinningBubbles' color='hsl(224, 94%, 72%)' className={`w-8 h-8 absolute bottom-0 `} />

}
        <div className='relative'>
          <span className='text-primary-color dark:text-white mr-4' ref={ref}> {pass}</span>
          {
          pass && 
          <span onClick={handleClick} ref={tooltipRef}>

            <HiClipboard
            
            className='inline text-xl -translate-y-2 text-emphasis dark:hover:text-white hover:text-accent-color focus:text-accent-color cursor-pointer'
            />
            
            <span className={`bg-accent-color absolute -top-4 ${clicked ? 'popup' : ''} py-1 px-4 text-xs rounded-md  text-white min-w-fit opacity-0`}>Text Copied</span>
          </span>
          
          }

        </div>
        
      </form>
      
        <div className={`${loading === false && message.msg ? 'popup' : ''} bg-emphasis z-20 dark:bg-white max-w-xs py-4 px-8 shadow-md rounded-md opacity-0 absolute -top-4 left-1/2`}>
          <h2 className={`${msg === 'success' ? 'text-green-800' : 'text-rose-700'} mb-4 font-bold text-2xl uppercase underline`}>
            {msg}
            
            <span className='inline'>
              { msg === 'success' ?
                <FiCheckCircle className='text-green-800 inline ml-2'  /> :
                <GiCancel className='text-rose-700 inline ml-2' />
              }
            </span>
          </h2>
          <p className='dark:text-primary-color'> {content} </p>
        </div>
      
    </section>
  )
}

export default Container