import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePosts from "./components/CreatePosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}

        <Route path="createblog" element={<CreatePosts />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
