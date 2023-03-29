import { useState, useEffect } from "react"

// custom hook
export const useFetch = (url: string) => {

    const [data, setData] = useState([])
    const [config, setConfig]: any = useState(null)
    const [method, setMethod]: any = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false)

    const httpConfig = (data: any, method: string) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)

            const res = await fetch(url)

            const json = await res.json()
            setData(json)

            setLoading(false)
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

        httpRequest()
    }, [config, method, url])

    return { data, httpConfig }

}
