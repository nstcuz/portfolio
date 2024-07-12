import React, { useRef } from 'react';
import ScrollToTop from './ScrollToTop';

const Contact = () => {
  const textRef = useRef(null);

  const clickToCopy = () => {
    if (textRef.current) {
      const range = document.createRange();
      range.selectNode(textRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      navigator.clipboard.writeText(textRef.current.textContent)
        .then(() => {
          alert('copied');
        })
        .catch(err => {
          console.error('failed to copy: ', err);
        });
      // remove highlighted selection
      selection.removeAllRanges(); 
    }
  };

  return (
    <section className='hero mt-16 mb-8 w-[95vw] min-h-[500px] mx-auto shadow-md border-2 border-neutral-content rounded-3xl bg-gradient-to-b from-base-200 via-neutral to-base-200' id='contact'>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="">thanks!</h2>
          <p className='py-6'>if you would like to get in contact, click the text below to copy the email address to your clipboard, or send a email directly with a click of the icon</p>
          <address className='py-6 mb-4 cursor-pointer' 
              ref={textRef} 
              onClick={clickToCopy}
            >nst@niccousins.com</address>
          <a href="mailto:nst@niccousins.com">
          <svg className='mx-auto size-10 fill-neutral-content'
                data-name="1-Email" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 32 32"
                width="24"
                height="24">
                <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z"/>
          </svg>
          </a>
          <p className="py-6 my-4">if you would like to see my code:</p>
          <a href="https://github.com/nstcuz">
          <svg className="fill-neutral-content mx-auto size-10" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/>
          </svg>   
          </a>
          <a className="btn btn-neutral my-6" href="#hero-anchor">back to top</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
