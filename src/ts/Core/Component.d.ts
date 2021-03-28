import { Type } from './Utils';
export interface ComponentParameters {
    selector: string;
    classes?: string;
    attributes?: object;
    extends?: string;
    template?: string;
    style?: string;
    useShadow?: boolean;
}
export declare const Component: (config: ComponentParameters) => <T extends Type<HTMLElement>>(component: T) => void;
export declare const Attribute: () => <T extends HTMLElement>(component: T, propertyKey: string) => void;
//# sourceMappingURL=Component.d.ts.map