# Frontend
Client for the Patient management cum Electronic health record server. 

# Patient Management System

This web-based application is a patient management cum electronic health record system that allows healthcare providers to manage patient records. The application uses a FHIR API hosted on the Google Cloud Platform (GCP) VM instance to perform CRUD (Create, Read, Update, Delete) operations on patient, practitioner, encounter and observation resources.

## Features

- View a list of all patients
- Create a new patient
- Add an existing patient into current patients list of the doctor
- Update an existing patient
- Delete a patient
- List all current patients of the practitioner
- Add an encounter event (checkup)
- Update an encounter event
- Add, update and delete an observation done in a particular encounter event
- Show all Encounters of a patient
- In essence, have access to all observations done on the user in the past
- A standard way to store medical resource data
- Interface doubles as a Electronic health record that adheres to current FHIR standards


## Potential features

- Export and import DICOM instances
- View DICOM instances
- Link DICOM instances to encounter and in essence the patient resource
- De-identify the patient's records
- Use de-identified patient data for Research, ML and Big query purposes
- Export FHIR resources 
- Develop an interface for the patient to be able to manage their appointments 
- Interface doubles as a Electronic health record that adheres to current FHIR standards


## Technologies Used

- React: Front-end JavaScript library for building user interfaces
- Node.js: JavaScript runtime environment for server-side development
- Express: Web application framework for Node.js
- Healthcare API: GCP healthcare API
- Google Cloud Platform: Cloud computing services platform





