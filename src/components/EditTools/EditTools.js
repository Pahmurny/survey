import React from 'react';
import './EditTools.scss';

import QuestionsTypes from './QuestionsTypes/QuestionsTypes';
import SurveySettings from './SurveySettings/SurveySettings';

const EditTools = ({ className }) => (
  <div className={`${className} EditTools`}>
    <QuestionsTypes />
    <SurveySettings />
  </div>
);

export default EditTools;
