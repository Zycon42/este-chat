import React from 'react';
import {Paper, TextField, FontIcon, FlatButton} from 'material-ui';
import PureComponent from '../components/purecomponent.react';

export default class MessageComposer extends PureComponent {

  render() {
    return (
      <Paper className="message-composer" rounded={false}>
        <FlatButton className="send-btn" title="send">
          <FontIcon className="mdi mdi-send" />
        </FlatButton>
        <div className="input-container">
          <TextField
            className="message-input"
            hintText="Type your message"
            multiLine={true}
          />
        </div>
      </Paper>
    );
  }
}
