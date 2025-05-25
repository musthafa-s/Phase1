import { useEffect } from "react"

const useDocument = (count) => {

    useEffect((e) => {
        document.title =`count ${count}`
    }, [count]
)}

export default useDocument