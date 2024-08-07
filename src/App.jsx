import { SummaryTable } from "./components/SummaryTable";
import { Header } from "./components/Header";
import './styles/global.css';

const habitData = {
  "2024-04-15": 3,
  "2024-06-04": 5,
  "2024-06-05": 5,
  "2024-02-20": 1,
  "2023-08-21": 2,
  "2023-08-22": 6,
};

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />

        <SummaryTable data={habitData} />
      </div>
    </div>
  );
}

export default App;
