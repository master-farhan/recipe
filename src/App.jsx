import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="App w-screen h-screen font-thin  overflow-x-hidden">
      <Navbar />
      <MainRoutes />
      <Footer/>
    </div>
  );
};

export default App;
