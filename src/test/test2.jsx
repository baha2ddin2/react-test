import { useRef, useState } from 'react';

export default function HoldOnMobile() {
    const [count, setCount] = useState(0)
    const [menuPos, setMenuPos] = useState(null);

    const timer = useRef(null);

    const handleTouchStart = (e) => {
        e.preventDefault()
        const touch = e.touches[0]
        console.log(e.touches)
        console.log(e)
        timer.current = setTimeout(() => {
            console.log('Long press detected on mobile!');
            setMenuPos({ x: touch.pageX, y: touch.pageY });
            setCount(count + 1)
        }, 600);
    };

    const handleTouchEnd = (e) => {
        e.preventDefault()
        clearTimeout(timer.current);
    };

    const hideMenu = () => setMenuPos(null);

    return (
    <>
        <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            style={{ padding: 20, background: '#eee', textAlign: 'center', userSelect: 'none' }}
        >
            Long press me {count}
        </div>
          {menuPos && (
        <ul
          onClick={hideMenu}
          style={{
            userSelect: 'none' ,
            position: 'absolute',
            top: menuPos.y,
            left: menuPos.x,
            background: '#fff',
            border: '1px solid #ccc',
            listStyle: 'none',
            padding: 10,
            margin: 0,
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
        >
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}

    </>

    );
};

