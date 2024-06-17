import { useState } from "react";
import "./App.css";
import ExpanseForm from "./components/ExpanseForm";
import ExpanseTable from "./components/ExpanseTable";
import TableData from "./TableData";
import { useLocalStroage } from "./utils/hooks/useLocalStroage";

function App() {
  const [tableData, setTableData] = useLocalStroage("expanseData", []);

  const [expanse, setExpanse] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [isSave, setSave] = useState("");
  const [id, setId] = useState("");

  return (
    <main>
      <a href="/">
        <h1>Track Your Expense</h1>
      </a>
      <div className="expense-tracker">
        <ExpanseForm
          isSaveArr={[isSave, setSave]}
          setTableData={setTableData}
          expanseState={[expanse, setExpanse]}
          idArr={[id, setId]}
        />
        <ExpanseTable
          setSave={setSave}
          data={tableData}
          setTableData={setTableData}
          TableData={tableData}
          setExpanse={setExpanse}
          idArr={[id, setId]}
        />
      </div>
    </main>
  );
}

export default App;
