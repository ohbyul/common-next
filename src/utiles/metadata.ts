import { SITE_NAME } from "./constants";

type IMetadata = {
    title: string;
    description: string;
}

export function genPageMetadata({ title, description }: IMetadata) {
    return {
        title: SITE_NAME + ' ' + title,
        description: SITE_NAME + ' ' + description
    }
}

// type Props = {
//     params: {
//         location: string
//     },
//     searchParams: {
//         name: string
//     }
// }

// export function generateMetadata({ params, searchParams }: Props) {
//     const site = 'CODIPAI EDU'
//     const pageNm = '회원가입'
//     return {
//         title: `${site} ${pageNm}`,
//         description: `${site} ${pageNm} 페이지 입니다.`
//     }
// }
