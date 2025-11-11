import { useRef , useState} from 'react';


const DoubleTap = ({ onDoubleTap, children }) => {
    const lastTap = useRef(0);

    const handleTouchStart = (e) => {
        e.preventDefault()
        console.log(window)
        if (!('ontouchstart' in window)) return;

        const now = Date.now();
        if (now - lastTap.current < 300) {
            onDoubleTap();
        }
        lastTap.current = now;
    };

    return (
        <div onTouchStart={handleTouchStart}>
            {children}
        </div>
    );
};





export default function Double() {
    const [count ,setCount ]= useState(0)
    return (
        <DoubleTap onDoubleTap={() =>{
            console.log('Double tap!') ;
            setCount(count+1)} }>
            <img src="HP16D0195NF.jpg"  alt="Example" style={{ width: 100, height:100 }} />
            {count}
        </DoubleTap>
    )
}


