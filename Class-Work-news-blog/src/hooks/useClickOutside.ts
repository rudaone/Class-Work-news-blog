import React from "react";

function useClickOutside(elementRef: any, callback: any) {
    React.useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (elementRef && elementRef.current && !elementRef.current.contains(event.target)) {
                callback()
            }
            return
        }
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [elementRef, callback])
}

export { useClickOutside }