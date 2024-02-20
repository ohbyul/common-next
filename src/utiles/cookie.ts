"use server"

import * as cookiesNext from 'cookies-next'
import { cookies } from 'next/headers';

const DOMAIN = '.codipai-edu.net'
const COOKIE_NAME = 'codipai-edu'
const COOKIE_NAME_DEV = 'dev-codipai-edu'
const COOKIE_NAME_STG = 'stg-codipai-edu'

export type SameSiteType = "none" | "strict" | "lax";
export interface CookiesOptions {
    path: string;
    expires: Date;
    domain: string;
    sameSite: SameSiteType;
    secure: boolean;
}

export const getCookie = async (name: string) => {
    return cookiesNext.getCookie(name, { cookies })
}
export const hasCookie = (name: string) => {
    cookiesNext.hasCookie(name, { cookies })
}
export const deleteCookie = (name: string) => {
    cookiesNext.deleteCookie(name, { cookies })
}
export const setCookie = async (name: string, token: string, options: CookiesOptions) => {
    // TODO options 을 어떻게 다는거..ㅡㅡ
    cookiesNext.setCookie(name, token, { cookies })
    // cookiesNext.setCookie(name, token, options)
}

export const getCookieOptions = () => {
    const expires = new Date()
    expires.setTime((Date.now() + 360000 * 1) + (60 * 60 * 1000 * 9 * 1))      // 1시간

    const cookieOptions: CookiesOptions = {
        path: '/',
        expires,                        //쿠키의 최대 생존 시간 , Expires 와 Max-Age 값이 모두 지정될 경우 Max-Age값을 더 우선적으로 판단함
        domain: process.env.NODE_ENV === 'production' ? DOMAIN : '',
        sameSite: 'strict',            //서드 파티 쿠키의 보안적 문제를 해결, [ 'none' | 'lax' | 'strict' ] 
        secure: true,                  //true인 경우 https(암호화된) 통신인 경우만 쿠키 전송됨 , 127.0.0.1/localhost는 해당 옵션과 상관없이 쿠키 전송됨
        // httpOnly : true,             //웹 브라우저와 서버가 통신할 때에만 쿠키를 발행, javascript를 이용한 쿠키탈취 방지
    }

    //-------------------------------
    // sameSite
    // [None]   default 크로스 사이트 요청에 항상 전송, Secure 옵션 필수 설정    퍼스트 파티 쿠키 O , 서드 파티 쿠키 O
    // [Strict] 가장 보수적 정책, 크로스 사이트 요청에 전송하지 않음              퍼스트 파티 쿠키 O , 서드 파티 쿠키 X
    // [Lax]    서드 파티 쿠키는 전송 X , 몇가지 예외적인 요청 허용               퍼스트 파티 쿠키 O , 서드 파티 쿠키 X
    //          safe한 요청인 Http get 방식, <a>, <link>를 통한 접근은 허용, 크롬의 디폴트
    //------------------------------

    return cookieOptions;
}

const getCookieName = (name: string) => {
    let cookieName = name;
    if (name === 'codipai-edu') {
        switch (window.location.hostname) {
            case 'manage.codipai-edu.net': cookieName = COOKIE_NAME; break;
            case 'stgmanage.codipai-edu.net': cookieName = COOKIE_NAME_STG; break;
            case 'devmanage.codipai-edu.net': cookieName = COOKIE_NAME_DEV; break;
        }
    }
    return cookieName;
}