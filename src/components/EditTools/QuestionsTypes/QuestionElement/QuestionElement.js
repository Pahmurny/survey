import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { Glyphicon } from 'react-bootstrap';

const iconArray = {
  single: 'list',
  multi: 'check',
  text: 'font',
  star: 'star',
  bar: 'stats',
};

const questionSource = {
  beginDrag(props) {
    return {
      name: props.name,
      type: props.type,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`You dropped ${item.name} into ${dropResult.name} on ${dropResult.page.title}!`);
    }
  },
};

@DragSource('question', questionSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class QuestionElement extends Component {
  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name, type } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    let dragStyle;
    if (isDragging) {
      dragStyle = {
        backgroundColor: '#138496',
        opacity: 0.4,
      };
    } else {
      dragStyle = {
        opacity: 1,
      };
    }
    const { props: { className } } = this;

    const elementContent = (
      <div className={`${className} QuestionElement`} style={{ ...dragStyle, opacity }}>
        <Glyphicon className="QuestionElement__icon" glyph={iconArray[type]} />
        {name}
      </div>
    );

    return connectDragSource(elementContent);
  }
}

export default QuestionElement;
