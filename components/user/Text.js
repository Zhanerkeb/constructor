import React, { useState, useEffect } from 'react';
import { useNode, useEditor  } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';
import { Slider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export const Text = ({ position, text, fontSize, textAlign }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));
  const { actions } = useEditor((state, query) => {
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

  const onKeyDown = () => e => {
    if (e.key === `Delete`) actions.delete(selected.id)
  }

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      onClick={(e) => selected && setEditable(true)}
    >
      <ContentEditable
        html={text}
        onKeyDown={onKeyDown}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')),
            500
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign: position }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    position: node.data.props.position
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value), 1000);
          }}
        />
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Position</FormLabel>
        <RadioGroup
       
          onChange={(e) => setProp((props) => (props.position = e.target.value))}
        >
          <FormControlLabel
            label="center"
            value="center"
            control={<Radio size="small" color="default" />}
          />
          <FormControlLabel
            label="left"
            value="left"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="right"
            value="right"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export const TextDefaultProps = {
  text: 'Hi',
  fontSize: 20,
  position: 'left'
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
