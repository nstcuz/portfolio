import React from 'react'
import StackIcon from "tech-stack-icons";
import '../assets/woocommerce.png';

function TechStackIcons() {

  return (
    <div className='py-2 w-full flex justify-center items-center flex-wrap border-2 border-neutral-content rounded-3xl border-opacity-10 shadow-xl'>
        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="html5" className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>html</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="css3" className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>css</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="sass" className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>sass</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="tailwindcss" className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>tailwindcss</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="js" className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>javascript</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="nodejs" className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>nodejs</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="reactjs" className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>reactjs</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="php" className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>php</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <StackIcon name="wordpress" className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>wordpress</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <img src='src/assets/woocommerce.png' className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>woocommerce</h3>
        </div>

        <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
            <img src='src/assets/shopify.png' className='size-7'/>
            <h3 className='ml-2 text-center flex items-center'>shopify</h3>
        </div>

        <div>
            <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
                <StackIcon name="xd" className='size-7'/>
                <h3 className='ml-2 text-center flex items-center'>xd</h3>
            </div>

            <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
                <StackIcon name="figma" className='size-7'/>
                <h3 className='ml-2 text-center flex items-center'>xd</h3>
            </div>

            <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
                <StackIcon name="ps" className='size-7'/>
                <h3 className='ml-2 text-center flex items-center'>photoshop</h3>
            </div>

            <div className='w-fit px-3 py-1 mx-1 mb-1 bg-base-200 inline-flex border-neutral-content shadow-md get-down hover:bg-base-100'>
                <StackIcon name="ai" className='size-7'/>
                <h3 className='ml-2 text-center flex items-center'>illustrator</h3>
            </div>
        </div>

    </div>
  )
}

export default TechStackIcons