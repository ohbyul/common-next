"use server"

import { getCookie } from './cookie';
import { COOKIE_NAME, NEXT_PUBLIC_URL } from '@/utiles/constants';

import axios, { AxiosRequestConfig } from 'axios' // 추가
import { CookieValueTypes } from 'cookies-next';
import { redirect } from 'next/navigation';

interface APIResponse<T> {
    statusCode: number
    errorCode: number
    message: string
    result: T
    access_token: string
}

const axiosInterceptorInstance = axios.create({
    baseURL: `${NEXT_PUBLIC_URL}/api`, // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    }
});


// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
    async (config) => {
        const token: CookieValueTypes = await getCookie(COOKIE_NAME)
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;     //토큰세팅
        }

        return config;
    },
    (error) => {
        // Handle request errors here

        return Promise.reject(error);
    }
);
// End of Request interceptor



// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here
        return response;
    },
    (error) => {
        // Handle response errors here
        const { timestamp, path, statusCode, message } = error.response.data
        console.log('----------------------------');
        console.log(statusCode, message);
        console.log('----------------------------');

        // TODO :

        if (statusCode === 401) {
            // https://stackoverflow.com/questions/76739361/redirect-from-axios-interceptor-with-nextjs-13-app-directory
            //나와 같은 오류 
            console.log(' >>> >>> >>> go to login page');
            return error.response
            // redirect('/login')
            // window.location.href = '/';
            // const router = useRouter()
            // router.push('/')
        } else {
            // 잘못된 접근
            //TODO : 알럿창을 띄워준다?던가 작업 필요
            // return Promise.reject(e);
        }



        // return { statusCode, message }
        // return error.response.data
    }
);

export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.get<APIResponse<T>>(url, config);
        return response?.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export const postData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.post<APIResponse<T>>(url, data, config);
        return response?.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export const putData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.put<APIResponse<T>>(url, data, config);
        return response?.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export const deleteData = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.delete<APIResponse<T>>(url, config);
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export default axiosInterceptorInstance; 