import { CookieValueTypes } from "cookies-next";
import { JwtPayload } from "jwt-decode";

export interface Token extends JwtPayload {
    userId: string;
    userNm: string;
    status: string;
    authority: string;
    organizationCd: string;
}

export type tokenProps = {
    token: CookieValueTypes;
}