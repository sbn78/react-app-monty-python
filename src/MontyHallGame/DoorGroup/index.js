import React, { Component } from 'react';
import Door from './../Door';
import s from './DoorGroup.css';

class DoorGroup extends Component {
  constructor(props) {
    super(props)
  }


  renderDoor(i) {

    const winning = (this.props.winning_door === i),
          selected = (this.props.selected_door === i),
          opened = (this.props.opened_door === i);

    return (
      <Door
        number={i}
        winning={winning}
        selected={selected}
        opened={opened}
        onClick={this.props.click_event}
      />
    )
  }

  render() {
    return (
      <div className={s.wrapper}>
        {this.renderDoor(0)}
        {this.renderDoor(1)}
        {this.renderDoor(2)}
      </div>
    )
  }
}

export default DoorGroup;