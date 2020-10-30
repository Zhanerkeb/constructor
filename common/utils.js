import { useEditor } from '@craftjs/core';
export const getSelectNode = () => {
    const { actions, selected } = useEditor((state, query) => {
        const currentNodeId = state.events.selected;
        let selected;
    
        if (currentNodeId) {
          selected = {
            id: currentNodeId,
            name: state.nodes[currentNodeId].data.name,
            settings:
              state.nodes[currentNodeId].related &&
              state.nodes[currentNodeId].related.settings,
            isDeletable: query.node(currentNodeId).isDeletable(),
          };
        }
    
        return {
          selected,
        };
      });
}
  

  export default getSelectNode;