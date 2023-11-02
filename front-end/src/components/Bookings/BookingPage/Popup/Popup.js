import "./Popup.css";
import CloseIcon from "@mui/icons-material/Close";

const Popup = ({ show, setShow, handleDeleteConfirm, handleDeleteDeny }) => {
  return show ? (
    <div className="Popup" onClick={() => setShow(false)}>
      <div className="Popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="Popup-content-close">
          <div
            className="Popup-content-close-x-mark"
            onClick={() => setShow(false)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="Popup-content-text">
            Are you sure you want to delete this booking?
        </div>
        <div className="Popup-content-buttons">
            <button type="submit" onClick={handleDeleteConfirm}>Confirm</button>
            <button type="submit" onClick={handleDeleteDeny}>Cancel</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
