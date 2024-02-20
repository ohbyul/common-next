/***************************************
 * @description 파일 사이즈 체크 untill 10MB
 * @param {File} file 파일
 * @returns T/F
 ****************************************/
export function valideSizeCheck(file: File) {
    const maxSize = 10 * 1024 * 1024    //10MB
    const fileSize = file.size
    if (fileSize > maxSize) {
        return false
    } else {
        return true
    }
}

/***************************************
 * @description 확장자 추출
 * @param {String} fileNm 파일 fullName / 확장자명
 * @returns 확장자명
 ****************************************/
export function getFileExt(fileNm: string) {
    const fileArr = fileNm?.split('.').reverse()
    const ext = fileArr[0].toLowerCase()

    let fileClass = 'file'

    if (ext == 'jpg' || ext == 'jpge' || ext == 'png' || ext == 'gif' || ext == 'bmp') {
        fileClass = 'img'
    } else if (ext == 'pdf') {
        fileClass = 'pdf'
    } else if (ext == 'pptx') {
        fileClass = 'pptx'
    } else if (ext == 'xls' || ext == 'xlsx' || ext == 'csv') {
        fileClass = 'xlsx'
    } else if (ext == 'doc' || ext == 'docx') {
        fileClass = 'docx'
    } else if (ext == 'hwp' || ext == 'hwpx') {
        fileClass = 'hwp'
    } else if (ext == 'txt') {
        fileClass = 'txt'
    } else if (ext == 'zip') {
        fileClass = 'zip'
    }
    return fileClass;
}

/***************************************
 * @description 유효한 파일 확장자 체크 
 * @param {File} file 파일
 * @returns T/F
 ****************************************/
export function validFile(file: File) {
    const fileArr = file?.name?.split('.').reverse()
    const ext = fileArr[0].toLowerCase();
    if (ext == 'jpg' || ext == 'jpge' || ext == 'png' || ext == 'gif' || ext == 'bmp'
        || ext == 'pdf' || ext == 'rtf'
        || ext == 'doc' || ext == 'docx'
        || ext == 'xls' || ext == 'xlsx' || ext == 'csv'
        || ext == 'ppt' || ext == 'pptx'
        || ext == 'hwp' || ext == 'hwpx'
        || ext == 'zip'
        || ext == 'txt') {
        return true
    } else {
        return false
    }
}

/***************************************
 * @description pdf파일 체크
 * @param {File} file 파일
 * @returns T/F
 ****************************************/
export function validPdfFile(file: File) {
    let ext = file?.type
    if (ext === 'application/pdf') {
        return true
    } else {
        return false
    }
}

/***************************************
 * @description 이미지 파일 체크
 * @param {File} file 파일
 * @returns T/F
 ****************************************/
export function validImgFile(file: File) {
    let ext = file?.type
    if (ext === 'image/jpg' || ext == 'image/jpeg' || ext == 'image/png' || ext == 'image/gif') {
        return true
    } else {
        return false
    }
}

/***************************************
 * @description 파일 사이즈 계산 
 * @param {number} fileSize
 * @returns size
 ****************************************/
export const getByteSize = (fileSize: number) => {
    let size = String(fileSize).length < 7 ?
        `${(fileSize / 1024).toFixed(2)} KB`
        : `${(fileSize / 1024000).toFixed(2)} MB`;

    return size;
};