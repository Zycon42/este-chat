import immutable from 'immutable';
import PureComponent from '../components/purecomponent.react';
import React from 'react';
import ThreadListItem from './threadlistitem.react';

export default class ThreadList extends PureComponent {

  render() {
    return (
      <div className="col-xs-12">
        <ul className="thread-list">
          {this.props.threads.map((thread, i) => {
            return <ThreadListItem key={thread.id} thread={thread} userName={this.props.userName} />;
          })}
        </ul>
      </div>
    );
  }
}

ThreadList.propTypes = {
  threads: React.PropTypes.instanceOf(immutable.List),
  userName: React.PropTypes.string
};
