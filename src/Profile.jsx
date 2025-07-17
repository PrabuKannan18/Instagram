import profile from '../db/db.json'

function Profile() {
  return (
    <div className='d-flex align-items-center mb-3 suggestions'>
      <img src={profile.profile.userProfile} className='dp rounded-circle' alt="Profile" />
      <div className="ms-2">
        <h6 className='mb-0 fw-semibold userName'>{profile.profile.username}</h6>
        <small className="text-muted">{profile.profile.name}</small>
      </div>
      <div className='ms-auto'>
        <span className='text-primary fw-bold switch-text'>Switch</span>
      </div>
    </div>
  );
}

export default Profile;
