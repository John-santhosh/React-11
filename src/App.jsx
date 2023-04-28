import { useState } from "react";
import Navbar from "./components/Navbar";
const App = () => {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <main>
      {showLinks}
      <Navbar></Navbar>
    </main>
  );
};
export default App;
