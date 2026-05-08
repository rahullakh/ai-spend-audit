import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(()=> import("./pages/Home"));
const AuditForm = lazy(()=> import("./pages/AuditForm"));
const Results = lazy(()=> import("./pages/Results"));
const  NotFound = lazy(()=> import("./pages/NotFound"));
function App() {
 
  return (
     <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/audit" element={<AuditForm />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
     
     </Router>
  )
}

export default App
