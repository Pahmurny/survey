import React from 'react';

import QuestionElement from './QuestionElement/QuestionElement';

import { QUESTION_TYPES } from '../../../constants';


const QuestionsTypes = ({ className }) => (
  <div className={`${className} QuestionsTypes`}>
    <div className="QuestionsTypes-header">Questions Types</div>
    <div className="QuestionsTypes-content">
      <QuestionElement name="Single choice" type={QUESTION_TYPES.SINGLE} />
      <QuestionElement name="Multiple choices" type={QUESTION_TYPES.MULTI} />
      <QuestionElement name="Text answer" type={QUESTION_TYPES.TEXT} />
      <QuestionElement name="Star answer" type={QUESTION_TYPES.STAR} />
      <QuestionElement name="Bar answer" type={QUESTION_TYPES.BAR} />
    </div>
  </div>
);

export default QuestionsTypes;
