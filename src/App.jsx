import { useState } from 'react'
function App() {

  const btns = "C/*789-456+123=0.".split("")

  const [output,setOutput] = useState("")

  const handleInput = e => {
    const value = e.target.innerHTML
    let specials = "C=".split("")

    if(!specials.includes(value)){
      let temp = output.split("")
      temp.push(value)
      setOutput(temp.join(""))
    }

    if(value == 'C'){
      setOutput("")
    }

    if(value == '='){

      let temp = output.split("")

      temp.forEach((val,i) => {
        if(val == 'X')temp[i] = '*'
        if(val == '÷')temp[i] = '/'
      })

      temp = temp.join("")

      let result = eval(temp)
      setOutput(String(result))
    }
  }

  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <div className='bg-slate-300 p-6 w-[300px] gap-3 shadow-2xl rounded grid grid-cols-4'>
        <div className='h-[50px] col-span-4 text-xl bg-slate-200 rounded flex items-center justify-end px-4 overflow-auto'>{output}</div>
        {btns && btns.map((btn,i) => 
          <div 
            key={i} 
            className={`
              ${btn == ' ' ? '' : 'bg-slate-500'} 
              ${btn == 'C' ? 'col-span-2' : ''} 
              text-white 
              rounded 
              p-3 
              text-lg 
              text-center 
              cursor-pointer
              flex items-center justify-center
              ${btn == '=' ? 'row-span-2 bg-orange-500' : ''}
              ${btn == '0' ? 'col-span-2' : ''}
            `}
            onClick={handleInput}
          >
            {btn == '/' ? '÷' :
              btn == '*' ? 'X' : btn
            }
          </div>
        )}
      </div>
    </main>
  )
}

export default App
