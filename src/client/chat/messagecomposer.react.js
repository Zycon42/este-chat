import React from 'react';
import {TextField, FontIcon, FlatButton} from 'material-ui';
import PureComponent from '../components/purecomponent.react';

export default class MessageComposer extends PureComponent {

  render() {
    return (
      <div className="message-composer">
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
      </div>
    );
  }
}
