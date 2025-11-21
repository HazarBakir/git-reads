import { Routes, Route } from "react-router-dom";
import Page from "./pages/Document";
import { RepositoryProvider } from "@/contexts/RepositoryProvider";
import Landing from "@/pages/Landing";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <RepositoryProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/document" element={<Page />} />
          <Route path="/document/:sessionId" element={<Page />} />
        </Routes>
      </RepositoryProvider>
    </motion.div>
  );
}

export default App;
