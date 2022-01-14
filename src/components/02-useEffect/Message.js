import React from 'react'
import { useEffect , useState} from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0 , y: 0})

    const { x , y } = coords

    useEffect(() => {
        
        const mouseMove = (e) => {
            const { x , y} = e
            const cords = { x: x , y: y}
            setCoords(cords)
        }

        window.addEventListener('mousemove' , mouseMove)

        return () => {
            window.removeEventListener('mousemove' , mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Holaaa</h3>

            x: { x } y: { y }

        </div>
    )
}
