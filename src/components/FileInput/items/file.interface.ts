import { FlowbiteTextInputColors, FlowbiteTextInputSizes } from "flowbite-react";

export interface FlowbiteFileInputTheme {
    root: FlowbiteFileInputRootTheme;
    field: FlowbiteFileInputFieldTheme;
}

interface FlowbiteFileInputRootTheme {
    base: string;
}

interface FlowbiteFileInputFieldTheme {
    base: string;
    input: FlowbiteFileInputFieldInputTheme;
}

interface FlowbiteFileInputFieldInputTheme {
    base: string;
    label: string;
    colors: FlowbiteTextInputColors;
    sizes: FlowbiteTextInputSizes;
}
