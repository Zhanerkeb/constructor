/// <reference types="react" />
import { SubscriberAndCallbacksFor } from '@craftjs/utils';
import { Options } from '../interfaces';
import { QueryMethods } from './query';
export declare const editorInitialState: {
    nodes: {};
    events: {
        dragged: any;
        selected: any;
        hovered: any;
        indicator: any;
    };
    options: {
        onNodesChange: () => any;
        onRender: ({ render }: {
            render: any;
        }) => any;
        resolver: {};
        nodes: any;
        enabled: boolean;
        indicator: {
            error: string;
            success: string;
        };
    };
};
export declare const ActionMethodsWithConfig: {
    methods: (state: import("../interfaces").EditorState, query: {
        getDropPlaceholder: (source: string | import("../interfaces").Node, target: string, pos: {
            x: number;
            y: number;
        }, nodesToDOM?: (node: import("../interfaces").Node) => HTMLElement) => import("../interfaces").Indicator;
        getOptions: () => Options;
        node: (id: string) => {
            isCanvas(): boolean;
            isRoot(): boolean;
            isLinkedNode(): boolean;
            isTopLevelNode(): any;
            isDeletable(): boolean;
            isParentOfTopLevelNodes: () => boolean;
            isParentOfTopLevelCanvas(): any;
            get(): import("../interfaces").Node;
            ancestors(deep?: boolean): string[];
            descendants(deep?: boolean, includeOnly?: "linkedNodes" | "childNodes"): string[];
            linkedNodes(): string[];
            childNodes(): string[];
            isDraggable(onError?: (err: string) => void): boolean;
            isDroppable(target: string | import("../interfaces").Node, onError?: (err: string) => void): boolean;
            toSerializedNode(): import("../interfaces").SerializedNode;
            toNodeTree(includeOnly?: "linkedNodes" | "childNodes"): {
                rootNodeId: string;
                nodes: any;
            };
            decendants(deep?: boolean): any;
            isTopLevelCanvas(): boolean;
        };
        getSerializedNodes: () => Record<string, import("../interfaces").SerializedNode>;
        serialize: () => string;
        parseReactElement: (reactElement: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>) => {
            toNodeTree(normalize?: (node: import("../interfaces").Node, jsx: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>) => void): import("../interfaces").NodeTree;
        };
        parseSerializedNode: (serializedNode: import("../interfaces").SerializedNode) => {
            toNode(normalize?: (node: import("../interfaces").Node) => void): import("../interfaces").Node;
        };
        parseFreshNode: (node: import("../interfaces").FreshNode) => {
            toNode(normalize?: (node: import("../interfaces").Node) => void): import("../interfaces").Node;
        };
        createNode: (reactElement: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>, extras?: any) => any;
    } & {
        history: {
            canUndo: () => boolean;
            canRedo: () => boolean;
        };
    }) => {
        addLinkedNodeFromTree(tree: import("../interfaces").NodeTree, parentId: string, id?: string): void;
        add(nodeToAdd: import("../interfaces").Node | import("../interfaces").Node[], parentId: string, index?: number): void;
        addNodeTree(tree: import("../interfaces").NodeTree, parentId?: string, index?: number): void;
        delete(id: string): void;
        deserialize(input: string | Record<string, import("../interfaces").SerializedNode>): void;
        move(targetId: string, newParentId: string, index: number): void;
        replaceNodes(nodes: Record<string, import("../interfaces").Node>): void;
        clearEvents(): void;
        reset(): void;
        setOptions(cb: (options: Partial<Options>) => void): void;
        setNodeEvent(eventType: import("../interfaces").NodeEventTypes, id: string): void;
        setCustom<T extends string>(id: T, cb: (data: any) => void): void;
        setDOM(id: string, dom: HTMLElement): void;
        setIndicator(indicator: import("../interfaces").Indicator): void;
        setHidden(id: string, bool: boolean): void;
        setProp(id: string, cb: (props: any) => void): void;
    };
    ignoreHistoryForActions: readonly ["setDOM", "setNodeEvent", "clearEvents", "setOptions", "setIndicator"];
    normalizeHistory: (state: any) => void;
};
export declare type EditorStore = SubscriberAndCallbacksFor<typeof ActionMethodsWithConfig, typeof QueryMethods>;
export declare const useEditorStore: (options: Partial<Options>) => SubscriberAndCallbacksFor<{
    methods: (state: import("../interfaces").EditorState, query: {
        getDropPlaceholder: (source: string | import("../interfaces").Node, target: string, pos: {
            x: number;
            y: number;
        }, nodesToDOM?: (node: import("../interfaces").Node) => HTMLElement) => import("../interfaces").Indicator;
        getOptions: () => Options;
        node: (id: string) => {
            isCanvas(): boolean;
            isRoot(): boolean;
            isLinkedNode(): boolean;
            isTopLevelNode(): any;
            isDeletable(): boolean;
            isParentOfTopLevelNodes: () => boolean;
            isParentOfTopLevelCanvas(): any;
            get(): import("../interfaces").Node;
            ancestors(deep?: boolean): string[];
            descendants(deep?: boolean, includeOnly?: "linkedNodes" | "childNodes"): string[];
            linkedNodes(): string[];
            childNodes(): string[];
            isDraggable(onError?: (err: string) => void): boolean;
            isDroppable(target: string | import("../interfaces").Node, onError?: (err: string) => void): boolean;
            toSerializedNode(): import("../interfaces").SerializedNode;
            toNodeTree(includeOnly?: "linkedNodes" | "childNodes"): {
                rootNodeId: string;
                nodes: any;
            };
            decendants(deep?: boolean): any;
            isTopLevelCanvas(): boolean;
        };
        getSerializedNodes: () => Record<string, import("../interfaces").SerializedNode>;
        serialize: () => string;
        parseReactElement: (reactElement: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>) => {
            toNodeTree(normalize?: (node: import("../interfaces").Node, jsx: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>) => void): import("../interfaces").NodeTree;
        };
        parseSerializedNode: (serializedNode: import("../interfaces").SerializedNode) => {
            toNode(normalize?: (node: import("../interfaces").Node) => void): import("../interfaces").Node;
        };
        parseFreshNode: (node: import("../interfaces").FreshNode) => {
            toNode(normalize?: (node: import("../interfaces").Node) => void): import("../interfaces").Node;
        };
        createNode: (reactElement: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>, extras?: any) => any;
    } & {
        history: {
            canUndo: () => boolean;
            canRedo: () => boolean;
        };
    }) => {
        addLinkedNodeFromTree(tree: import("../interfaces").NodeTree, parentId: string, id?: string): void;
        add(nodeToAdd: import("../interfaces").Node | import("../interfaces").Node[], parentId: string, index?: number): void;
        addNodeTree(tree: import("../interfaces").NodeTree, parentId?: string, index?: number): void;
        delete(id: string): void;
        deserialize(input: string | Record<string, import("../interfaces").SerializedNode>): void;
        move(targetId: string, newParentId: string, index: number): void;
        replaceNodes(nodes: Record<string, import("../interfaces").Node>): void;
        clearEvents(): void;
        reset(): void;
        setOptions(cb: (options: Partial<Options>) => void): void;
        setNodeEvent(eventType: import("../interfaces").NodeEventTypes, id: string): void;
        setCustom<T extends string>(id: T, cb: (data: any) => void): void;
        setDOM(id: string, dom: HTMLElement): void;
        setIndicator(indicator: import("../interfaces").Indicator): void;
        setHidden(id: string, bool: boolean): void;
        setProp(id: string, cb: (props: any) => void): void;
    };
    ignoreHistoryForActions: readonly ["setDOM", "setNodeEvent", "clearEvents", "setOptions", "setIndicator"];
    normalizeHistory: (state: any) => void;
}, typeof QueryMethods>;
