import data from '../db/db.json'
// import './Sidebar.css';

function SideBar() {
  return (
    <div className="sidebar d-flex flex-column justify-content-between position-fixed h-100 py-4 px-3">
      <div>
        <img src="src/assets/instagram.png" alt="Instagram Logo" className="logo mb-4" />

        <div className="nav-item active"><i className="bi bi-house-door"></i>Home</div>
        <div className="nav-item"><i className="bi bi-search"></i>Search</div>
        <div className="nav-item"><i className="bi bi-compass"></i>Explore</div>
        <div className="nav-item"><i className="bi bi-play-btn"></i>Reels</div>
        <div className="nav-item d-flex align-items-center">
          <i className="bi bi-chat-dots position-relative">
            <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px', padding: '0.3em 0.45em' , top: '10px' }}>
              2
            </span>
          </i>
          <span>Messages</span>
        </div>

        <div className="nav-item"><i className="bi bi-heart"></i>Notifications</div>
        <div className="nav-item"><i className="bi bi-file-plus"></i>Create</div>
        <div className="nav-item"><i className="bi bi-person-circle"></i>Profile</div>
        <div className="nav-item"><i className="bi bi-bar-chart"></i>Dashboard</div>
        <div className='nav-item'>
          <img src={data.profile.userProfile} className='dp-profile rounded-circle' alt="" />
          <h5>Profile</h5>
        </div>
      </div>

      <div>
        <div className="nav-item"><i className="bi bi-circle"></i>Meta AI</div>
        <div className="nav-item"><i className="bi bi-threads"></i>Also from Meta</div>
        <div className="nav-item"><i className="bi bi-list"></i>More</div>
      </div>
    </div>
  );
}

export default SideBar;
