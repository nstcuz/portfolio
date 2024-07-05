import React from 'react'
import StackIcon from "tech-stack-icons";

function ToolStackIcons() {

  return (
    <div className='py-2 flex justify-center items-center flex-wrap border-2 border-neutral-content rounded-3xl border-opacity-10 shadow-xl'>
      <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex items-center border-neutral-content shadow-md get-down hover:bg-base-100'>
        <StackIcon name="linux" className='size-7'/>
        <h3 className='text-center ml-2 flex items-center'>linux</h3>
      </div>

      <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex items-center border-neutral-content shadow-md get-down hover:bg-base-100'>
        <StackIcon name="bash" className='size-7'/>
        <h3 className='text-center ml-2 flex items-center'>linux</h3>
      </div>

      <div className='w-fit px-3 py-2 mx-1 mb-1 bg-base-200 inline-flex items-center border-neutral-content shadow-md get-down hover:bg-base-100'>
        <StackIcon name="github" className='size-7'/>
        <h3 className='text-center ml-2 flex items-center'>git/github</h3>
      </div>

      <div className='w-fit px-3 py-2 mx-1 mb-1 bg-base-200 inline-flex items-center border-neutral-content shadow-md get-down hover:bg-base-100'>
      <StackIcon name="vscode" className='size-7'/>
        <h3 className='text-center ml-2 flex items-center'>vscode</h3>
      </div>
    
      <div className='w-fit px-3 py-2 mx-1 mb-1 bg-base-200 inline-flex items-center border-neutral-content shadow-md get-down hover:bg-base-100'>
        <StackIcon name="neovim" className='size-7'/>
        <h3 className='text-center ml-2 flex items-center'>neovim</h3>
      </div>
    </div>
  )
}

export default ToolStackIcons