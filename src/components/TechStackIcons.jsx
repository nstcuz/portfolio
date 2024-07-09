import React from 'react'
import StackIcon from "tech-stack-icons";
import '../assets/woocommerce.png';

function TechStackIcons() {

  return (
    <div className='py-2 w-full flex justify-center items-center flex-wrap border-2 border-neutral-content rounded-3xl border-opacity-10 shadow-xl'>
        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="html5" className='size-7'/>
            <p className='ml-2 text-center flex items-center'>html</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="css3" className='size-7'/>
            <p className='ml-2 text-center flex items-center'>css</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="sass" className='size-7'/>
            <p className='ml-2 text-center flex items-center'>sass</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="tailwindcss" className='size-7'/>
            <p className='ml-2 text-center flex items-center'>tailwindcss</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="js" className='size-7'/>
            <p className='ml-2 text-center flex items-center'>javascript</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="nodejs" className='size-7'/>
            <p className='ml-2 text-center flex items-center'>nodejs</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="reactjs" className='size-7'/>
            <p className='ml-2 text-center flex items-center'>reactjs</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="php" className='size-7'/>
            <p className='ml-2 text-center flex items-center'>php</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="wordpress" className='size-7'/>
            <p className='ml-2 text-center flex items-center'>wordpress</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <img src='src/assets/woocommerce.png' className='size-7'/>
            <p className='ml-2 text-center flex items-center'>woocommerce</p>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <img src='src/assets/shopify.png' className='size-7'/>
            <p className='ml-2 text-center flex items-center'>shopify</p>
        </div>

        <div>
            <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
                <StackIcon name="xd" className='size-7'/>
                <p className='ml-2 text-center flex items-center'>xd</p>
            </div>

            <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
                <StackIcon name="figma" className='size-7'/>
                <p className='ml-2 text-center flex items-center'>figma</p>
            </div>

            <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
                <StackIcon name="ps" className='size-7'/>
                <p className='ml-2 text-center flex items-center'>photoshop</p>
            </div>

            <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
                <StackIcon name="ai" className='size-7'/>
                <p className='ml-2 text-center flex items-center'>illustrator</p>
            </div>
        </div>

    </div>
  )
}

export default TechStackIcons