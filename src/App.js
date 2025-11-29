function App() {
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm py-3">
        <div className="flex-1">
          <h1 className="btn btn-ghost text-xl">👨🏻‍💻 DevTinder</h1>
        </div>
        <div className="flex gap-2">
          <div className="dropdown dropdown-end mx-7">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <h5 className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </h5>
              </li>
              <li>
                <h5>Settings</h5>
              </li>
              <li>
                <h5>Logout</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="font-serif text-4xl">Hello world</h1>
    </div>
  );
}

export default App;
