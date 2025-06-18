import React from 'react'
const Navbar = () => {
  return (
    <div>
      <div className="navbar w-auto m-2.5  bg-[#333333] rounded-[10px] text-[18px] p-[10px]">
        <nav className="flex gap-[20px] justify-around">
          <div className="logo">
            <img className="w-[100px]" src="./src/assets/Logo.png" alt="" />
          </div>
          <ul className="flex gap-[25px] items-center h-[5vh]  font-sans ">
            <li className="text-white font-bold list-none"> Home</li>
            <li className="text-white list-none flex gap-x-1 w-auto bg-purple-600 p-[10px] rounded-[10px] ease-in-out duration-[0.25s] delay-25 hover:bg-purple-700 ">What to do? <img className="w-[25px] invert" src="./src/assets/todo.png" alt="" /></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
