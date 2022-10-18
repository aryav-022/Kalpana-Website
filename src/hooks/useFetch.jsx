import { useState, useEffect } from 'react'

export function useFetch(api, init) {
    const [data, setData] = useState(init);
    
    useEffect(() => {
        const controller = new AbortController();
        fetch(api, { signal: controller.signal })
        .then(response => {
            return response.json();
        })
        .then(rsp => setData(rsp))

        return () => {
            controller.abort();
        }
    }, [api])

    return data;
}