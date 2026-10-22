import PropTypes from 'prop-types';

function ProfileCard({ name, age, role }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  role: PropTypes.string,
};

ProfileCard.defaultProps = {
  age: 18,
  role: 'Developer',
};

export default ProfileCard;