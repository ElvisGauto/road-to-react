import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(res => res.json())
            .then(data => {
                // setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    } else {
                        console.log('setState no called');
                    }
                // }, 4000);
            })
    }, [url])

    return state;

}
