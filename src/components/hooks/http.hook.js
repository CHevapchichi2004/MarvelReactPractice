import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false),
          [error, setError] = useState(false);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {"Content-type" : "application/json"}) => {

        setLoading(true)

        try {
            const res = await fetch(url, {method, body, headers});
            if (!res.ok) {
                throw new Error('sorry, fetch is bad')
            }
            const data = await res.json();

            setLoading(false)

            return data
        } catch(e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => {
        setError(null)
    }, [])

    return {loading, error, request, clearError}
}