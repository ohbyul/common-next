import { COOKIE_NAME } from "@/utiles/constants";
import { getCookie } from "@/utiles/cookie";
import Link from "next/link";

export const revalidate = 0
export default async function Navbar() {

    return (
        <div>
            <h3>Header</h3>
            <hr />
        </div>
    )
}
