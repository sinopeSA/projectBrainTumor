import React, { Component } from 'react';
import MedicalRecordForm from './MedicalRecordForm';
import './MedicalRecordpage.css';

class MedicalRecordpage extends Component {
  render() {
    return (
      <div className="MedicalRecordpage">
        <MedicalRecordForm />
      </div>
    );
  }
}

export default MedicalRecordpage;