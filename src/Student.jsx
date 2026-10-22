// props = props read ony properties that are shared from parent component to child component
//proptypes = a mechanism to ensure that the props passed to a component are of the correct  datatype age:proptypes.number,
//defualt props = default values for the props if not passed from parent component
import PropTypes from 'prop-types';

function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>age:{props.age}</p>
            <p>is student: {props.isstudent ? "true" : "false"}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isstudent: PropTypes.bool,
}

Student.defaultprops = {
    name: "Guest",
    age: "invalid",
    isstudent: false,
}

export default Student;