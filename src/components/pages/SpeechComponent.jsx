import React from 'react';
import SpeechRecognitionPage from './SpeechRecognitionPage';
import ImageButtonComponent from './ImageButtonComponent ';
import './SpeechComponent.css'; // Import CSS file for SpeechComponent styling

const SpeechComponent = () => {
  return (
    <div className="speech-component-container">
      <div className="card">
        <SpeechRecognitionPage />
      </div>
      <div className="card">
        <ImageButtonComponent />
      </div>
    </div>
  );
}

export default SpeechComponent;