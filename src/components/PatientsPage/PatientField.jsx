const PatientField = (props) => {
  return (
    <div className='flex justify-between'>
      <p className='min-w-[25%]'>{props.field} :</p>{" "}
      <p className='min-w-[30%] text-blue-100'> {props.data}</p>
    </div>
  );
};

export default PatientField;
