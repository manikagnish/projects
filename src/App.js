import { useState, useEffect } from "react";
import Grid from "./components/Grid";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="preloader">
          <HashLoader color={"#3f3fff"} loading={loading} size={150} />
        </div>
      ) : (
        <div>
          <h1>My work</h1>
          <Grid />
        </div>
      )}
    </>
  );
}

export default App;
