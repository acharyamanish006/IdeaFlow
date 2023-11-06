import "./Css/Navbar.scss";
export default function Navbar() {
  return (
    <div className="navContainer">
      <div className="navWrapper shadow-sm">
        <div className="draggable navElement " draggable="true">
          <i className="fa-solid fa-note-sticky"></i>
          <p>Note</p>
        </div>
        <div className="draggable navElement" draggable="true">
          <i className="fa-solid fa-link"></i>
          <p>Link</p>
        </div>
        <div className="draggable navElement" draggable="true">
          <i className="fa-solid fa-list"></i>
          <p>Todo</p>
        </div>
        <div className="draggable navElement " draggable="true">
          <i className="fa-solid fa-arrow-right"></i>
          <p>Line</p>
        </div>
        <div className=" navElement" draggable="true">
          <i className="fa-solid fa-trash"></i>
          <p>Trash</p>
        </div>
      </div>
    </div>
  );
}
