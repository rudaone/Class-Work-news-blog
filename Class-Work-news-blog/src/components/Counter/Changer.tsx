import { Button } from "../Button"


const Changer = ({count, setCount}: {count: number, setCount: Function}) => {
    return (
      <Button className="primary" 
      onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    )
}

export { Changer }