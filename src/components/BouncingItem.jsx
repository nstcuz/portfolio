import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const BouncingItem = () => {
  //declare states
  const itemRef = useRef(null);
  const [color, setColor] = useState('blue');

  useEffect(() => {
    //color array
    const colors = ['blue', 'red', 'green', 'yellow', 'purple'];

    // update color
    const changeColor = () => {
      setColor(prevColor => {
        let newColor;
        do {
          newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === prevColor);
        console.log(newColor);
        return newColor;
      });
    };

    // target container, get its height & width
    const element = itemRef.current;  // copy ref to a local variable otherwise the cleanup function has an updated value
    const container = element.parentNode;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // movement speed
    let xVelocity = 5;
    let yVelocity = 5;

    // starting pos
    element.style.left = '0px';
    element.style.top = '0px';

    const animate = () => {
      let x = parseFloat(element.style.left);
      let y = parseFloat(element.style.top);

      if (x < 0 || x >= containerWidth - 120) {
        xVelocity = -xVelocity;
        changeColor();
      }

      if (y < 0 || y >= containerHeight - 60) {
        yVelocity = -yVelocity;
        changeColor();
      }

      x += xVelocity;
      y += yVelocity;

      anime({
        targets: element,
        left: `${x}px`,
        top: `${y}px`,
        easing: 'linear',
        duration: 20,
        complete: animate,
      });
    };

    animate();

    // Cleanup function
    return () => {
      if (element) {
        anime.remove(element);
      }
    };
  }, []);

  return (
    <div id="nav-dropdown" className='dropdown-item' style={{ width: '100%', height: '275px', border: '2px solid #232323', borderRadius: '8px' }}>
      <div
        className='moving-nav-item'
        ref={itemRef}
        style={{
          backgroundColor: color
        }}
      />
    </div>
  );
};

export default BouncingItem;