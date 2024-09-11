const Count = ({ count }: { count: number }) => {
    return (
        <div>
           <p>
             Amount of clicks: 
             <strong>{count}</strong>
           </p>
        </div>
    )
}

export { Count }
