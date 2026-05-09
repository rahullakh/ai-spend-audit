import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const FeaturesPage = lazy(() => import("./components/ui/features/Feature"));
const WorksPage = lazy(() => import("./components/ui/works/Work"));
const BenefitsPage = lazy(() => import("./components/ui/benefits/Benefit"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <h2 className="py-10 text-center text-lg font-medium">
            Loading...
          </h2>
        }
      >
        <Routes>
         
          <Route path="/" element={<Home />} />

         
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />

          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;