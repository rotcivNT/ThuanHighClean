import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import { privateRoutes, publicRoutes } from "./config/Route";
import "./index.css";

function App() {
  return (
    <main className="overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {publicRoutes.map((route) => {
              const Page = route.component;
              return (
                <Route key={route.path} path={route.path} element={<Page />} />
              );
            })}
          </Route>
        </Routes>
        <Routes>
          {privateRoutes.map((route) => {
            const Page = route.component;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
