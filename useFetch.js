import React from 'react'

const useFetch = (url) => {
    const [data,setData] = React.useState(null)
    const [isPending,setIsPending] = React.useState(true)
    const [error,setError] = React.useState(null)

    React.useEffect(() => {
        const abortCont = new AbortController()
        // we can associated the above with a certain fetch, and we can use it to stop that fetch

        setTimeout(() => {
            fetch(url, {signal:abortCont.signal })
            // the second parameter associates the controller with the fetch.
            // now we can use it to stop that fetch inside the cleanup function.
                .then(response => {
                    if (!response.ok) {
                        throw Error("Could not fetch the data for that resource")
                    }
                    return response.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log('Fetch Aborted');
                }
                else{
                    setError(err.message)
                    setIsPending(false)
                }
            })
        },1000)
        return () => abortCont.abort()
        // by using the above return, we stop updating the data state, but when catching the error
        // we are still updating the error, and isPending states.
    },[])

    return {data, isPending, error}
}

export default useFetch

// run a cleanup function, when any compo using the useFetch hook unmounts.