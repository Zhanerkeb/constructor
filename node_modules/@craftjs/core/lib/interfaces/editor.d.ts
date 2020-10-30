/// <reference types="react" />
import { QueryCallbacksFor } from '@craftjs/utils';
import { Nodes, NodeEventTypes, NodeId } from './nodes';
import { Placement } from './events';
import { useInternalEditorReturnType } from '../editor/useInternalEditor';
import { QueryMethods } from '../editor/query';
export declare type Options = {
    onRender: React.ComponentType<{
        render: React.ReactElement;
    }>;
    onNodesChange: (query: QueryCallbacksFor<typeof QueryMethods>) => void;
    resolver: Resolver;
    enabled: boolean;
    indicator: Record<'success' | 'error', string>;
};
export declare type Resolver = Record<string, string | React.ElementType>;
export interface Indicator {
    placement: Placement;
    error: string | false;
}
export declare type EditorEvents = Record<NodeEventTypes, NodeId | null> & {
    indicator: Indicator | null;
};
export declare type EditorState = {
    nodes: Nodes;
    events: EditorEvents;
    options: Options;
};
export declare type ConnectedEditor<S = null> = useInternalEditorReturnType<S>;
