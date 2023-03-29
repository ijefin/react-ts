import { useState, useEffect } from "react"

// custom hook
export const useFetch = (url: string) => {

    const [data, setData] = useState([])
    const [config, setConfig] = useState()
    const [method, setMethod] = useState("")
    const [callFetch, setCallFetch] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }

        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config] as const

                const res = await fetch(...fetchOptions)

                const json = await res.json()

                setCallFetch(json)
            }
        }
    }, [config])

    return { data }

}
