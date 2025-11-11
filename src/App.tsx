import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing/Landing";
import Document from "@/pages/Document/Document";
import Header from "@/components/Header/Header";
import { RepositoryProvider } from "@/contexts/RepositoryContext";

function App() {
  return (
    <RepositoryProvider>
      <div className="app-root-grid">
        <Header />
        <main className="main-content">
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/document" element={<Document />} />
          </Routes>
        </main>
      </div>
    </RepositoryProvider>
  );
}

export default App;