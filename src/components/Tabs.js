import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import _ from "underscore";

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "1" };
  }

  isSelected(tab) {
    return tab.props.value === this.state.value;
  }

  selectTab(e, value) {
    this.setState({ value });
    this.props.onChange(e, value);
  }

  getHeader(tabs) {
    return tabs.map((tab, i) => {
      const style = this.isSelected(tab)
        ? activeTabHeaderStyle
        : tabHeaderStyle;

      return (
        <span
          className="tab"
          key={tab.props.value}
          onClick={e => this.selectTab(e, tab.props.value)}
          style={i === 0 ? style : Object.assign({}, style)}
        >
          {tab.props.header}
        </span>
      );
    });
  }

  render() {
    const { children } = this.props;
    const tabs = Children.toArray(children);

    return (
      <div>
        <div style={tabsHeaderStyle}>{this.getHeader(tabs)}</div>
        <div style={{ borderTop: "none" }}>
          {_.find(tabs, tab => this.isSelected(tab))}
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  onChange: _.noop,
};

Tabs.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
};

// Style

const tabsHeaderStyle = {
  display: "flex",
  overflow: "hidden",
  position: "fixed",
  top: "0",
  width: "100%",
  "z-index": "1",
};

const tabHeaderStyle = {
  padding: "0.6em 7px",
  textAlign: "center",
  fontWeight: "600",
  letterSpacing: "1px",
  transition: "all .3s",
};

const activeTabHeaderStyle = Object.assign({}, tabHeaderStyle, {
  borderBottom: "none",
});
