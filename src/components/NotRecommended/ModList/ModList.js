import React from 'react';
import styles from './ModList.module.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={styles.item}
        style={{ top: this.props.top, height: this.props.itemheight }}
      >
        {this.props.label}
      </div>
    );
  }
}

//The list component that contains the rows and manage the virtual rendering
// using the vertical scroll position
class ModList extends React.Component {
  constructor(props) {
    super(props);
    this.numVisibleItems = Math.trunc(466 / this.props.itemheight);
    this.state = {
      start: 0,
      end: this.numVisibleItems,
    };
    this.containerStyle = {
      height: this.props.data.length * this.props.itemheight,
    };

    this.scollPos = this.scollPos.bind(this);
  }

  scollPos() {
    let currentIndx = Math.trunc(
      this.refs.viewPort.scrollTop / this.props.itemheight,
    );
    currentIndx =
      currentIndx - this.numVisibleItems >= this.props.data.length
        ? currentIndx - this.numVisibleItems
        : currentIndx;
    if (currentIndx !== this.state.start) {
      //   console.log('Redraw');
      this.setState(
        (this.state = {
          start: currentIndx,
          end:
            currentIndx + this.numVisibleItems >= this.props.data.length
              ? this.props.data.length - 1
              : currentIndx + this.numVisibleItems,
        }),
      );
    }
  }

  renderRows() {
    let result = [];
    for (let i = this.state.start; i <= this.state.end; i++) {
      let item = this.props.data[i];
      result.push(
        <Item
          key={i}
          label={item}
          top={i * this.props.itemheight}
          itemheight={this.props.itemheight}
        />,
      );
    }
    return result;
  }

  render() {
    return (
      <div ref="viewPort" className={styles.viewPort} onScroll={this.scollPos}>
        <div className={styles.itemContainer} style={this.containerStyle}>
          {this.renderRows()}
        </div>
      </div>
    );
  }
}

export default ModList;
