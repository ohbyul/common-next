/***************************************
 * @description 목록의 검색조건을 로컬스토리지에 생성
 * @param {string} pathType
 ****************************************/
export const utilSetListSearch = (pathType: string) => {
    let search = location.search;
    let searchArr;

    if (search.substring(0, 1) === '?') {
        search = search.slice(1)
    }

    searchArr = search.split('&');
    search = [...new Set(searchArr)].join('&')

    window.localStorage.setItem('listSearch', JSON.stringify({ pathType: pathType, search: search }))
}

/***************************************
 * @description 로컬스토리지에 생성된 검색조건 가져옴
 * @param {string} pathType
 * @returns queryObject
 ****************************************/
export const utilGetListSearch = (pathType: string) => {
    const listSearch: any = window.localStorage.getItem('listSearch')
    if (!listSearch) return '';

    const objSearch = JSON.parse(listSearch);
    if (objSearch?.pathType === pathType) {
        return objSearch.search;
    }
    else {
        return '';
    }
}

/***************************************
 * @description 로컬스토리지에 생성된 조건 리셋
 ****************************************/
export const utilClearListSearch = () => {
    window.localStorage.setItem('listSearch', JSON.stringify({}))
}
