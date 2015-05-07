import React from 'react';
import {FlatButton} from 'material-ui';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export default class FlatButtonLink extends React.Component {

  handleClick(event) {
    var allowTransition = true;
    var clickResult;

    if (this.props.onClick)
      clickResult = this.props.onClick(event);

    if (isModifiedEvent(event) || !isLeftClickEvent(event))
      return;

    if (clickResult === false || event.defaultPrevented === true)
      allowTransition = false;

    event.preventDefault();

    if (allowTransition)
      this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
  }

  /**
   * Returns the value of the "href" attribute to use on the DOM element.
   */
  getHref() {
    return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
  }

  /**
   * Returns the value of the "class" attribute to use on the DOM element, which contains
   * the value of the activeClassName property when this <Link> is active.
   */
  getClassName() {
    var className = this.props.className;

    if (this.getActiveState())
      className += ` ${ this.props.activeClassName }`;

    return className;
  }

  getActiveState() {
    return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
  }

  render() {
    if (this.props.activeStyle && this.getActiveState())
      this.props.style = this.props.activeStyle;

    return (
      <FlatButton {...this.props} className={this.getClassName()}
        href={this.getHref()} linkButton={true} onClick={e => this.handleClick(e)}>
        {this.props.children}
      </FlatButton>
    );
  }
}

FlatButtonLink.contextTypes = {
  router: React.PropTypes.func.isRequired
};

FlatButtonLink.propTypes = {
  activeClassName: React.PropTypes.string.isRequired,
  activeStyle: React.PropTypes.object,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  to: React.PropTypes.string.isRequired
};

FlatButtonLink.defaultProps = {
  activeClassName: 'active',
  className: ''
};
