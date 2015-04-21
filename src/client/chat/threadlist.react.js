import LinkComponent from '../components/linkcomponent.react';
import React from 'react';
import ThreadListItem from './threadlistitem.react';
import immutable from 'immutable';

export default class ThreadList extends LinkComponent {

  render() {
    return (
      <div className="thread-section">
        <ul className="thread-list">
          {this.props.threads.map((thread, i) => {
            return <ThreadListItem key={thread.id} thread={thread} />;
          })}
        </ul>
      </div>
    );
  }
}

ThreadList.propTypes = {
  threads: React.PropTypes.instanceOf(immutable.List)
};
