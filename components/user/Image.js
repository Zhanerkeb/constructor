import React, {useState} from 'react';
import { Slider } from '@material-ui/core';
import { useNode } from '@craftjs/core';
import { Paper, FormControl, FormLabel } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';
import FileBase64 from 'react-file-base64';
export const Image = ({ file, width, height,  children }) => {
  const [image, setImage] = useState(file)
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  // const onChange = e => {
  //   if (e.target.files && e.target.files[0]) {
  //   console.log(1)
  //     var FR= new FileReader();
  //     FR.onload = (e) => {
  //       console.log(1)
  //       document.getElementById("output").src= e.target.result;
  //       console.log(2)
  //       setProp(
  //     (props) =>
  //       (props.file = e.target.result),
  //     500
  //   )
  //     }
      
      
     
  //   }
  
   
  // }
  async function onChange(e) {
    const file = e.target.files[0];
    const fileBlob = await toBase64(file)
    document.getElementById("output").src= fileBlob;
           setProp(
      (props) =>
        (props.file = fileBlob  ),
      500
    )
 }
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


  console.log(file)
  return (
    <div style={{position: 'relative'}}>
       <img style={{ width: `${width}px`, height: `${height}px` , }} src={file} id="output"/>
      <input
        type="file"
        onChange={() => onChange(event)}
        ref={(ref) => {connect(drag(ref))}}
        style={{ width:  `${width}px`, height: `${height}px`, position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}
      />    
    </div>   
  ); 
};


export const ImageSettings = () => {
  const {
    actions: { setProp },
    props
  } = useNode((node) => ({  
    props: node.data.props,
  }));
  console.log(props.width)
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Width</FormLabel>
         <Slider
          min={50}
          max={2560}
          defaultValue={props.width}
          onChange={(_, value) =>
            setProp((props) => (props.width = value), 500)
          }
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Height</FormLabel>
         <Slider
          min={50}
          max={800}
          defaultValue={props.height}
          onChange={(_, value) =>
            setProp((props) => (props.height = value), 500)
          }
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
       
      </FormControl>
    </div>
  );
};

export const ImageDefaultProps = {
  width: '500',
  height: '100',
  file: '',
};

Image.craft = {
  props: ImageDefaultProps,
  related: {
    settings: ImageSettings,
  },
};
