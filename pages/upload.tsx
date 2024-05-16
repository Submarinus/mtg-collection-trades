import { useUser } from "@auth0/nextjs-auth0/client";
import Layout from "../components/layout";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import _ from "lodash";

const Upload = () => {
  const [data, setData] = useState(() => {
    // Try to get data from local storage
    const savedData = localStorage.getItem("tableData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem("tableData", JSON.stringify(data));
  }, [data]);

  return (
    <Layout>
      <h1>My Upload</h1>
      <p>
        Here you will be able to upload your collection and wishlist. Make sure
        to name your wishlist "wishlist_check" for the app to recognize it.
      </p>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files;
          if (files) {
            Papa.parse(files[0], {
              header: true,
              complete: function (results) {
                setData(_.groupBy(results.data, "Binder Name"));
              },
            });
          }
        }}
      />
      {Object.entries(data).map(
        ([binderName, rows]: [string, { [key: string]: string }[]]) => (
          <div key={binderName}>
            <h2>{binderName}</h2>
            <table style={{ borderCollapse: "collapse" }}>
              {rows.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((cell, i) => (
                    <td
                      key={i}
                      style={{ border: "1px solid black", padding: "10px" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        )
      )}
    </Layout>
  );
};

export default Upload;
