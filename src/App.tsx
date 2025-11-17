import { Routes, Route } from "react-router-dom";
import Page from "./pages/Document";
import { RepositoryProvider } from "@/contexts/RepositoryProvider";

function App() {
  return (
    <RepositoryProvider>
      <Routes>
        <Route path="/document" element={<Page />} />
      </Routes>
    </RepositoryProvider>
  );
}

export default App;
