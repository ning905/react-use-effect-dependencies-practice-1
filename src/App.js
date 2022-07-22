import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  // console.log({ data });

  // Write code here.
  //
  const apiUrl = "https://swapi.dev/api/";
  useEffect(() => {
    if (dataType) {
      console.log("Fetching data: " + dataType);

      fetch(`${apiUrl}${dataType}/`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [dataType]);

  console.log({ data });

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
