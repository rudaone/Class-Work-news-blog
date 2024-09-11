import { useRef, useState } from 'react';

const colors = [
    'black',
    'yellow',
    'purple',
    'brown',
    'pink',
    'blue',
    'red',
    'orange',
    'green',
    'grey',
]

const UseRef = () => {
    const [pixels, setPixels] = useState(0);
    const ref = useRef<any>(null);
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <input type="number" value={pixels} onChange={(e) => setPixels(+e.target.value)} />
                <button onClick={() => ref.current.scrollTo({left: pixels})}>
                    Click
                </button>
            </div>
            <div ref={ref} style={{maxWidth: 150, overflowX: 'auto', display: 'flex'}}>
                {
                    colors.map((color) => <div style={{height: 80, backgroundColor: color, width: 100, minWidth: 100}}/>)
                }
            </div>
        </div>
    )
}

export { UseRef };