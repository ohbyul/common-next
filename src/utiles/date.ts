import moment from "moment";

/***************************************
 * @description 현재일시 
 * @returns YYYY-MM-DD HH:mm
 ****************************************/
export function getCurrentDate() {
    const date = new Date();
    let year: string = date.getFullYear().toString();
    let month: number | string = date.getMonth() + 1;
    let day: number | string = date.getDate();
    let hour: number | string = date.getHours();
    let minites: number | string = date.getMinutes();
    let seconds: number | string = date.getSeconds();

    month = month < 10 ? '0' + month.toString() : month.toString();
    day = day < 10 ? '0' + day.toString() : day.toString();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();
    minites = minites < 10 ? '0' + minites.toString() : minites.toString();
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minites;
}

/***************************************
 * @description 년월일
 * @param {string} date
 * @returns YYYY-MM-DD
 ****************************************/
export function dateFormat(date: string) {
    if (!date) return;
    let result = moment(date).format('YYYY-MM-DD')
    return result;
}

/***************************************
 * @description 년월일 시분
 * @param {string} date
 * @returns YYYY-MM-DD HH:mm
 ****************************************/
export function dateTimeFormat(date: string) {
    if (!date) return;
    let result = moment(date).format('YYYY-MM-DD HH:mm')
    return result;
}

/***************************************
 * @description 년월일 시분초
 * @param {string} date
 * @returns YYYY-MM-DD HH:mm:ss
 ****************************************/
export function dateFulltimeFormat(date: string) {
    if (!date) return;
    let result = moment(date).format('YYYY-MM-DD HH:mm:ss')
    return result;
}

/***************************************
 * @description 시분
 * @param {string} date
 * @returns HH:mm
 ****************************************/
export function timeFormat(date: string) {
    if (!date) return;
    let result = moment(date).format('HH:mm:ss')
    return result;
}

/***************************************
 * @description 년월일 포맷 한글
 * @param {string} date
 * @returns YYYY년 MM월 DD일
 ****************************************/
export function dateFormatHangul(date: string) {
    if (!date) return;
    let result = moment(date).format('YYYY년 MM월 DD일')
    return result;
}

/***************************************
 * @description 만나이 계산
 * @param {string} birthday 생년월일
 * @returns 만나이
 ****************************************/
export function getWesternAge(birthday: string) {
    if (!birthday) return;
    let today = new Date();
    let birthDay = new Date(birthday);
    let age = today.getFullYear() - birthDay.getFullYear();

    let todayMonth = today.getMonth() + 1;
    let birthMonth = birthDay.getMonth() + 1;

    if (birthMonth > todayMonth || (birthMonth === todayMonth && birthDay.getDate() >= today.getDate())) {
        age--;
    }
    return age;
}

/***************************************
 * @description 날짜데이터형식 체크
 * @param {string} date
 * @returns T/F
 ****************************************/
export function dateFormatValid(date: string) {
    if (!date) return;
    let result = moment(date, 'YYYY-MM-DD', true).isValid()
    return result;
}

/***************************************
 * @description 시간데이터형식 체크
 * @param {string} time
 * @returns T/F
 ****************************************/
export function timeFormatValid(time: string) {
    if (!time) return;
    let result = moment(`2020-01-01 ${time}`, 'YYYY-MM-DD HH:mm:ss', true).isValid()
    return result;
}


/***************************************
 * @description 두 날짜의 min 차이
 * @param {string} startDate
 * * @param {string} endDate
 * @returns min
 ****************************************/
export function diffMinutes(startDate: string, endDate: string) {
    if (!startDate || !endDate) return;

    const sTime = moment(startDate, 'YYYY-MM-DD HH:mm:ss')
    const eTime = moment(endDate, 'YYYY-MM-DD HH:mm:ss')

    const result = moment.duration(eTime.diff(sTime)).asMinutes()
    const hour = Math.floor(result / 60)
    const min = result % 60

    return result;
}

/***************************************
 * @description 두 날짜의 sec 차이
 * @param {string} startDate
 * * @param {string} endDate
 * @returns sec
 ****************************************/
export function diffSeconds(startDate: string, endDate: string) {
    if (!startDate || !endDate) return;

    const sTime = moment(startDate, 'YYYY-MM-DD HH:mm:ss')
    const eTime = moment(endDate, 'YYYY-MM-DD HH:mm:ss')

    const result = moment.duration(eTime.diff(sTime)).asSeconds()
    return result;
}


/***************************************
 * @description 타켓날짜로 부터 오늘까지의 day
 * @param {string} date
 * @returns day
 ****************************************/
export function diffDaysByToday(date: string) {
    if (!date) return;

    const today = dateFormat(getCurrentDate())
    const basicDate = moment(date, 'YYYY-MM-DD')

    const result = moment.duration(basicDate.diff(today)).asDays()
    return result;
}

/***************************************
 * @description 오늘로부터 경과된 day 
 * @param {string} date
 * @returns day
 ****************************************/
export function isAfterTime(date: string) {
    if (!date) return;

    const today = moment(getCurrentDate())
    const targetTime = moment(date)

    const result = moment(today).isAfter(targetTime);
    return result;
}




export const optionsMonth = [
    { value: '', label: '전체' },
    { value: '01', label: '1월' },
    { value: '02', label: '2월' },
    { value: '03', label: '3월' },
    { value: '04', label: '4월' },
    { value: '05', label: '5월' },
    { value: '06', label: '6월' },
    { value: '07', label: '7월' },
    { value: '08', label: '8월' },
    { value: '09', label: '9월' },
    { value: '10', label: '10월' },
    { value: '11', label: '11월' },
    { value: '12', label: '12월' },
]


export const optionsHours = [
    { value: '', label: '시' },
    { value: '00', label: '00' },
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
]

export const optionsMinutes = [
    { value: '', label: '분' },
    { value: '00', label: '00' },
    { value: '05', label: '05' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
    { value: '20', label: '20' },
    { value: '25', label: '25' },
    { value: '30', label: '30' },
    { value: '35', label: '35' },
    { value: '40', label: '40' },
    { value: '45', label: '45' },
    { value: '50', label: '50' },
    { value: '55', label: '55' },
]