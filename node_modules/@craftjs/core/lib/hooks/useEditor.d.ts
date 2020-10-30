import { Overwrite, Delete, OverwriteFnReturnType } from '@craftjs/utils';
import { EditorCollector, useInternalEditorReturnType } from '../editor/useInternalEditor';
import { NodeId } from '../interfaces';
declare type PrivateActions = 'addLinkedNodeFromTree' | 'setNodeEvent' | 'setDOM' | 'replaceNodes' | 'reset';
declare type Actions = useInternalEditorReturnType['actions'];
export declare type WithoutPrivateActions = Delete<Actions, PrivateActions | 'history'> & {
    history: Overwrite<Actions['history'], {
        ignore: OverwriteFnReturnType<Actions['history']['ignore'], PrivateActions>;
        throttle: OverwriteFnReturnType<Actions['history']['throttle'], PrivateActions>;
    }>;
};
export declare type useEditorReturnType<S = null> = Overwrite<useInternalEditorReturnType<S>, {
    actions: WithoutPrivateActions & {
        selectNode: (nodeId: NodeId | null) => void;
    };
    query: Delete<useInternalEditorReturnType<S>['query'], 'deserialize'>;
}>;
/**
 * A Hook that that provides methods and information related to the entire editor state.
 * @param collector Collector function to consume values from the editor's state
 */
export declare function useEditor(): useEditorReturnType;
export declare function useEditor<S>(collect: EditorCollector<S>): useEditorReturnType<S>;
export {};
