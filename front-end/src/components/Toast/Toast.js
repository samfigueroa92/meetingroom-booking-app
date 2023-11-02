import "./Toast.css";

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const Toast = ({ setFormSuccess, formSuccess }) => {

  return formSuccess ? (
    <div className="Toast" onClick={() => setFormSuccess(false)}>
      <div className="Toast-content" onClick={(e) => e.stopPropagation()}>
        <div className="Toast-content-close">
          <div className="Toast-content-close-x-mark" onClick={() => setFormSuccess(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className="Toast-content-text"> <CheckIcon />Success! Your new room has been created.</div>
      </div>
    </div>
  ) : null;
};

export default Toast;
