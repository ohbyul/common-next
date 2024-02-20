import moment from "moment";
import { dateFormat, getCurrentDate } from "./date";

/***************************************
 * @description 숫자에 3자리수 콤마(,)
 * @param {number} value
 * @returns 1,000
 ****************************************/
export const addComma = (value: number) => {
    if (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    else {
        return value;
    }
}

/***************************************
 * @description 특정 길이만큼 비어있는공간 0으로 채움
 * @param {number} value
 * * @param {number} cnt
 * @returns 1,000
 ****************************************/
export const addZero = (value: number, cnt: number) => {
    if (value) {
        return String(value).padStart(cnt, '0')
    }
    else {
        return value;
    }
}

/***************************************
 * @description 첫글자 대문자 치환
 * @param {string} word
 * @returns apply > Apply
 ****************************************/
export const capitalize = (word: string) => {
    if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
}

/***************************************
 * @description 특정 길이로 랜덤 숫자
 * @param {string} num
 * @returns 랜던숫자
 ****************************************/
export const makeRandomNumber = (num: number) => {
    const characters = '0123456789';

    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/***************************************
 * @description 새 게시물 아이콘 생성
 * @param {string} date
 * @returns T/F
 ****************************************/
export const checkNewIcon = (date: string) => {
    if (!date) return

    let isNew = false
    const today = dateFormat(getCurrentDate())
    const before7days = moment(today).add(-7, 'd').format('YYYY-MM-DD')
    const checkDate: string | any = dateFormat(date)

    if (before7days <= checkDate) {
        isNew = true
    }
    return isNew

}


