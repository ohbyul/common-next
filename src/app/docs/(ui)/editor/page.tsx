import * as root from "@/examples/editor";
import dynamic from "next/dynamic";

export default function ButtonDoc() {
    // ssr일떄는 안쓰고 csr 일때 작동하라는 뜻
    const DocPage = dynamic(
        () => import('@/components/DocPage'),
        { ssr: false }
    )
    
    return (
        <>
            <DocPage root={root} />
        </>
    );
}