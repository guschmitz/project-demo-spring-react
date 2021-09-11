import NavBar from "components/NavBar";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary py-3">Sales Dashboard</h1>
      <div className="row px-3">
        <div className="cal-sm-6">
          <h5 className="text-center text-secondary">Success rate (%)</h5>
          <BarChart />
        </div>
        <div className="cal-sm-6">
          <h5 className="text-center text-secondary">Success rate (%)</h5>
          <DonutChart />
        </div>
      </div>

      <div className="py-3">
        <h2 className="text-primary">All sales</h2>
      </div>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
