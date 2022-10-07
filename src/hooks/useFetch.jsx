import { useState, useEffect } from 'react'

export function useFetch(api, init) {
    const [data, setData] = useState(init);

    useEffect(() => {
        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(rsp => setData(rsp))
    }, [api])

    return data;
}