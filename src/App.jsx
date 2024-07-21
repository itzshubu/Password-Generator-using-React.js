import { useState,useEffect,useCallback } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pasword, setPasword] = useState("lkgnlksdfjksf54353")

  const gneratePassword = useCallback(()=> {
    let pass = ""
    let str = "abcdefghijklmnopqstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) {
      str += "1234567890"
    }
    if (charAllowed) {
      str += "!#@#$%^&*"
    }
    for (let i = 0; i < lenght; i++) {
      let a = Math.floor(Math.random() * str.length)
      pass += str[a]
    }
   console.log("hello")
    setPasword(pass)
  },[lenght, numberAllowed, charAllowed])
  // the function is memoized and only redefined when one of these dependencies changes
  // Note : when these dependencies changed the function not called it only redefined 
  // when the generatePassword funtion is redefined then the generatePassword is called by the useEffect


  useEffect(()=>{
   gneratePassword();
   console.log("helo")
  },[gneratePassword])
  // when the generatePassword funtion is redefined then the generatePassword is called by the useEffect

  // useEffect(() => {
  //   let pass = '';
  //   let str = 'abcdefghijklmnopqstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   if (numberAllowed) {
  //     str += '1234567890';
  //   }
  //   if (charAllowed) {
  //     str += '!#@#$%^&*';
  //   }
  //   for (let i = 0; i < lenght; i++) {
  //     let a = Math.floor(Math.random() * str.length);
  //     pass += str[a];
  //   }
  //   setPasword(pass);
  // }, [lenght, numberAllowed, charAllowed]);

  function copyToClipboard() {
    navigator.clipboard.writeText(pasword).then(() => {
      alert('Password copied to clipboard');
    });
  }

  return (
    <>
      <div className='w-full h-screen text-center flex items-center justify-center'>
        <div className='inline-block border border-black bg-zinc-500 my-auto p-3 sm:m-6 rounded-lg'>
          <h1 className='my-3 font-bold text-2xl'>Pasword Generator</h1>
          <div className='rounded-xl overflow-hidden flex items-center justify-center'>
            <input type="text" className='w-[70vw] px-3 text-lg h-11  sm:w-[40vw] outline-none' readOnly placeholder='' value={pasword} />
            <button className='px-4 bg-cyan-400 h-11 hover:bg-cyan-500' onClick={()=>copyToClipboard()}>Copy</button>
          </div>
          <div className='text-center m-5 flex items-center justify-center flex-wrap'>
            <input type="range" id="lenght" className='cursor-pointer' min={8} max={20} value={lenght} onChange={(e) => setLenght(e.target.value)} />
            <label htmlFor="lenght" className='mx-3 cursor-pointer font-semibold'>Lenght :  {lenght}</label>
            <span className='mx-4'>
              <input type="checkbox" id="checkbox" className='cursor-pointer h-4 w-4' checked={numberAllowed} onChange={() => { setNumberAllowed(!numberAllowed) }} />
              <label htmlFor="checkbox" className='mx-2 cursor-pointer font-semibold'>Numbers</label>
            </span>
            <span className='mx-4'>
              <input type="checkbox" id="charectors" className='cursor-pointer w-4 h-4' checked={charAllowed} onChange={() => { setCharAllowed(!charAllowed) }} />
              <label htmlFor="charectors" className='mx-2 cursor-pointer font-semibold'>charectors</label>
            </span>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
