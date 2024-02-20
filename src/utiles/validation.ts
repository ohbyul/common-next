/***************************************
 * @description 필수값 체크 및 포커스
 * @param {any} param 
 * @param {any} checkArr 
 * @returns T/F
 * @todo any 제거
 ****************************************/
export const requiredCheck = (param: any, checkArr: any) => {
    for (const item of checkArr) {
        const check = param[item.key]

        if (check === undefined || check === null || String(check).replaceAll(' ', '').replace(/\r|\n/g, "") === '') {

            // focus 
            switch (item.type) {
                case 'input':
                    document.getElementsByName(item.key)[0]?.focus();
                    break;
                case 'datepicker':
                    document.getElementsByName(item.key)[0]?.focus();
                    break;
                case 'select':
                    // document.getElementById(item.key)?.setAttribute('tabindex', -1);
                    document.getElementById(item.key)?.focus();
                    break;
                case 'editor':
                    // document.getElementById(item.key)?.getElementsByClassName('ql-editor')[0]?.setAttribute('tabindex', -1);
                    // document.getElementById(item.key)?.getElementsByClassName('ql-editor')[0]?.focus();
                    break;
            }
            // msg
            const verb = item.type === 'select' ? '선택' : '입력'
            return { id: item.key, msg: `${transKey(item.key)}을(를) ${verb}해주세요.` };
        }
    }
}

const transKey = (key: string) => {
    const keys = [
        { key: 'userNm', value: '성명' },
        { key: 'userId', value: '아이디' },
        { key: 'mobileNo', value: '휴대폰 번호' },
        { key: 'userPwd', value: '비밀번호' },
        { key: 'userPwdChk', value: '비밀번호 확인' },
        { key: 'organizationCd', value: '소속기관' },

        { key: 'title', value: '제목' },
        { key: 'contents', value: '내용' },
    ]
    const result = keys.find(item => item.key === key);

    if (result) {
        return result.value
    } else {
        return '필수값'
    }
}

/***************************************
 * @description 사업자 등록 번호 검증 (카카오 사업자등록번호) 1208147521
 * @param {string} data 사업자번호(-하이픈포함돤)
 * @returns T/F
 ****************************************/
export function validOrganizationCd(data: string) {
    const numberMap: number[] = data.replace(/-/gi, '').split('').map(function (d) {
        return parseInt(d, 10);
    })
    if (numberMap.length == 10) {
        const keyArr: number[] = [1, 3, 7, 1, 3, 7, 1, 3, 5];
        let chk: number = 0;

        keyArr.forEach(function (d, i) {
            chk += d * numberMap[i];
        });

        chk += (keyArr[8] * numberMap[8]) / 10, 10;

        const result = Math.floor(numberMap[9]) === ((10 - (chk % 10)) % 10)
        return result
    } else {
        return false
    }
}

export const onHandleFocus = (key: string, type: string) => {
    // focus 
    switch (type) {
        case 'input':
            document.getElementsByName(key)[0]?.focus();
            break;
        case 'datepicker':
            document.getElementsByName(key)[0]?.focus();
            break;
        case 'select':
            // document.getElementById(item.key)?.setAttribute('tabindex', -1);
            document.getElementById(key)?.focus();
            break;
        case 'editor':
            // document.getElementById(item.key)?.getElementsByClassName('ql-editor')[0]?.setAttribute('tabindex', -1);
            // document.getElementById(item.key)?.getElementsByClassName('ql-editor')[0]?.focus();
            break;
    }
}