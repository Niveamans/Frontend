

# Helth. 
A Patient management solution that solves the issue of data interoperability and accessibility in the healthcare industry.


## Abstract


**There is a lack of interoperability and availability of medical data across different platforms and even across different deparments in an organization** 4

- The Office of the National Coordinator for Health Information Technology (ONC) states that "interoperability is the key to a smarter, patient-centered healthcare system." (source: https://www.healthit.gov/topic/interoperability)

- In a report by the RAND Corporation, it was found that "interoperability failures can lead to serious consequences, including medical errors, incorrect diagnoses, and delayed care." (source: https://www.rand.org/pubs/research_reports/RR308.html)

- According to a study published in the Journal of the American Medical Association, "the lack of interoperability between electronic health record systems continues to be a major barrier to the efficient exchange of health information." (source: https://jamanetwork.com/journals/jama/fullarticle/2676123)


Helth. is an attempt at solving this issue using cloud storage and cloud computing capabilities provided by Google Could Platform.


This is **proof of concept** of a frontend client that provides a comprehensive solution for managing patient records and encounters for healthcare practitioners. With the ability to view and manage patient records, add new patients, and update existing ones, practitioners can easily keep track of their patients' medical histories. Additionally, practitioners can add observations to specific encounters and view a list of all encounters for a patient.


This frontend client adheres to the FHIR standard, providing a standard way to store medical resource data. It also doubles as an electronic health record, providing a secure and convenient way for practitioners to manage patient records. With an intuitive user interface and a range of features, this frontend client is an essential tool for healthcare practitioners looking to improve their patient management processes.


## Why Helth. and what is the objective
Healthcare providers need to access patient data quickly and easily: Storing patient data in the cloud allows healthcare providers to access patient records from anywhere with an internet connection. This means they can quickly access critical information and provide better care to patients.

FHIR is the industry standard for healthcare data interoperability: The FHIR standard is designed to make it easy for different healthcare systems to share data with each other. This means that healthcare providers can use different systems to store and retrieve patient data, as long as they all support the FHIR standard.

Cloud storage is scalable and cost-effective: Storing patient data in the cloud allows healthcare providers to scale their storage capacity up or down as needed. This means they can store more data as their practice grows, without having to worry about managing physical storage devices. Additionally, cloud storage is often more cost-effective than on-premises storage solutions.

Improved data security and compliance: Cloud storage providers are responsible for maintaining the security and compliance of patient data stored on their platforms. This means that healthcare providers can rely on cloud storage providers to implement security best practices and comply with industry regulations such as HIPAA.

Improved collaboration and data sharing: Storing patient data in the cloud allows healthcare providers to collaborate and share data with other providers and organizations more easily. This means that patient data can be shared more quickly and securely, leading to better patient outcomes.


## Methodology

- The client is a **proof of concept** for a frontend application that interacts with the server to provide a user-friendly interface for managing healthcare data. The client is built using modern web technologies such as React and Redux to provide a responsive and intuitive user interface. The client makes use of the FHIR REST API to interact with the server, sending HTTP requests to retrieve and manipulate patient data.

- The client provides a set of features to enable healthcare practitioners to manage patient data efficiently. These features include viewing a list of all patients, creating new patients, adding existing patients to the current list of patients, updating existing patients, and deleting patients. The client also provides the ability to list all current patients of the practitioner and view encounters associated with a particular patient.

- The client allows healthcare practitioners to add, update, and delete encounter events, as well as add, update, and delete observations done in a particular encounter event. This enables practitioners to keep track of patient history and ensure that all relevant data is captured and easily accessible.

- Finally, the client adheres to current FHIR standards, providing a standardized way to store and manage medical resource data. This ensures that healthcare practitioners can efficiently manage patient data while adhering to the latest healthcare industry standards


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

- Export and import DICOM instances using the GCP Healthcare API
- View DICOM instances
- Link DICOM instances to encounter and in essence the patient resource
- De-identify the patient's records using GCP Healthcare API
- Use de-identified patient data for Research, ML and Big query purposes
- Export FHIR resources 
- Develop an interface for the patient to be able to manage their appointments 
- Interface doubles as a Electronic health record that adheres to current FHIR standards
- Integration with electronic health record systems
- Appointment scheduling and management
- Secure messaging between patients and providers
- Patient portal for self-service features and information access
- Remove patient from current list of patients of practitioner


## Technologies Used

- React: Front-end JavaScript library for building user interfaces
- Tailwind CSS : CSS Framework for building custom user interfaces 
- Node.js: JavaScript runtime environment for server-side development
- Express: Web application framework for Node.js
- Healthcare API: GCP healthcare API
- Google Cloud Platform: Cloud computing services platform





