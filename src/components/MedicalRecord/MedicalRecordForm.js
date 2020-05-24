import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './MedicalRecordpage.css';

class MedicalRecordForm extends Component{

  handleFormSubmit(e) {
    e.preventDefault();
    console.log("FORM SUBMIT!");
  }

  render() {
    return (
      <div className="vertical-center">
        <Panel className="Panel">
          <Form horizontal className="MedicalRecord" id="recordForm">
            <FormGroup controlId ="formpaitent">
            <label id="Patientnametxt" for="patientnametxt">Patient Name:</label>
            <label id="patientnamedisp" for="patientnamedisp"> </label><br></br>  
            <label id="PGender" for="pGender">Gender:</label>
            <label id="displayPGender" for="displayPGender"></label><br></br>
            <label id="DOB" for="DOB">DOB:</label>
            <label id="dsiplaydob" for="displaydob"></label><br></br>
            <label id="contactnumber" for="pcontactnumber">Contact: </label>
            <label id="displaycontactNumber" for="displaynumber"></label><br></br>
            </FormGroup>
            <FormGroup controlId="formDiagnosis">
            <label id="diagnosistxt" for="diagnosistxt">Diagnosis:  </label>
              <FormControl type="diagnosis_text" placeholder="Enter Diagnosos Data" />
            </FormGroup>
            <FormGroup controlId="formSymptoms">
            <label id="symptomstxt" for="symptomstxt">Symptoms:  </label>
            <FormControl type="symptoms_text" placeholder="Enter Symptoms Data" />
            </FormGroup>
            <FormGroup controlId="formTreatment">
            <label id="treatmenttxt" for="treatmenttxt">Treatment:  </label>
              <FormControl type="treatment_text" placeholder=" Enter Treatment Data" />
            </FormGroup>
            <FormGroup controlId="formSave">
              <Button bsStyle="primary" type="Save" onClick={this.handleFormSubmit}>
                Save
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default MedicalRecordForm;