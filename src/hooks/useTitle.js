import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Vroom World | ${title}`;
    }, [title])
}
export default useTitle;