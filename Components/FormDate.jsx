

import ReactDatePicker from 'react-datepicker';
const FormDate = ({setStartDate, startDate}) => {
   
 
    return (
        <div>
            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
};

export default FormDate;