import { EditorState } from '../interfaces';
import { QueryMethods } from './query';
import { useCollector, QueryCallbacksFor } from '@craftjs/utils';
import { Actions } from './actions';
import { EditorContext } from './EditorContext';
import { EventConnectors } from '../events/EventHandlers';
export declare type EditorCollector<C> = (state: EditorState, query: QueryCallbacksFor<typeof QueryMethods>) => C;
export declare type useInternalEditorReturnType<C = null> = (C extends null ? useCollector<typeof Actions, typeof QueryMethods> : useCollector<typeof Actions, typeof QueryMethods, C>) & {
    inContext: boolean;
    store: EditorContext;
    connectors: EventConnectors;
};
export declare function useInternalEditor(): useInternalEditorReturnType;
export declare function useInternalEditor<C>(collector: EditorCollector<C>): useInternalEditorReturnType<C>;
