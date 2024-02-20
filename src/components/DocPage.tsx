import { CodeData, CodeDemo } from "@/components/helpers/examples/code-demo";
import ObjectParameter, { Parameter } from "../app/docs/(ui)/ObjectParameter";
import { Container } from "@/components/Container";

export default function DocPage({ parameters, root }: { parameters?: Parameter[], root: { [key: string]: CodeData } }) {
    return (
        <Container>
            {parameters && <ObjectParameter parameters={parameters} />}
            <div className="pb:12 mx-auto flex min-w-0 flex-col pt-6 lg:pb-16 lg:pt-8 xl:pb-24">
                {Object.entries(root).map(([key, code]) =>
                    <CodeDemo key={key} data={code} />
                )}
            </div>
        </Container>
    );
}