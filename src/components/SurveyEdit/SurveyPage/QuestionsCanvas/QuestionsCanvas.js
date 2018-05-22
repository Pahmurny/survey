import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const boxTarget = {
  drop(props) {
    return { name: 'Canvas', page: props.page };
  },
};

@DropTarget('question', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
class QuestionCanvas extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let style = {
      backgroundColor: 'white',
    };
    if (isActive) {
      style = {
        backgroundColor: '#D0F0C0',
      };
    } else if (canDrop) {
      style = {
        backgroundColor: '#CCC',
      };
    }

    const questionsArray = {};

    const canvascontent = (
      <div className="QuestionCanvas" style={{ ...style }}>
        <div className="QuestionCanvas__help">
          {isActive ? 'Release to drop' : 'Add new question'}
        </div>
      </div>
    );

    return connectDropTarget(canvascontent);
  }
}

export default QuestionCanvas;
