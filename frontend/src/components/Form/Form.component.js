import React, { useState } from "react";

import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from 'react-file-base64';

import useStyles from './Form.styles';

export const FormComponent = (props) => {
  const { handelSubmit } = props;

  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''});
  const classes = useStyles();

  const clear = () => {

  }

  return (
    <Paper className={ classes.paper }>
      <form autoComplete="off" noValidate className={ `${ classes.root } ${ classes.form }` } onSubmit={(e) => handelSubmit(e, postData) }>
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
          onChange={ (e) => setPostData({ ...postData, creator: e.target.value })}
          value={ postData.creator }
        />
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={ (e) => setPostData({ ...postData, title: e.target.value })}
          value={ postData.title }
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          onChange={ (e) => setPostData({ ...postData, message: e.target.value })}
          value={ postData.message }
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          fullWidth
          onChange={ (e) => setPostData({ ...postData, tags: e.target.value })}
          value={ postData.tags }
        />
        <div className={ classes.fileInput }>
          <FileBase
            type="file"
            multiple={ false }
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button
          className={ classes.buttonSubmit }
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >submit</Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={ clear }
          fullWidth
        >clear</Button>
      </form>
    </Paper>
  );
}

export default FormComponent;
