import React, {useEffect, useState} from 'react';
import apiClient from '../services/api-clients';
import { AxiosRequestConfig, CanceledError } from 'axios';



interface FetchResponse {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then(res => {
            setData(res.data.results)
            setLoading(false);
        })
        .catch(err => {
            if (err instanceof CanceledError) {
                return;
            } 
            setError(err.message);
            setLoading(false);
        }); 
        
        return () => controller.abort();
    }, deps ? [...deps] : []);
    return {data, error, loading}
}
export default useData;