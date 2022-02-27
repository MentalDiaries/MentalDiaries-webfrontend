import { useRef } from "react";

import Snackbar from "./SnackBar";

function App1() {
    const snackbarRef = useRef(null);
  
    return (
      <div className="App">
        <button
          onClick={() => {
            snackbarRef.current.show();
          }}
        >
          Show Snackbar
        </button>
        <Snackbar
          ref={snackbarRef}
          message="Task Completed Successfully!"
          type="fail"
        />
      </div>
    );
  }
  
  export default App1;