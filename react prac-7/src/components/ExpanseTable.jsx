import React, { useState } from "react";
import { useFilter } from "../utils/hooks/useFilter";
import ContextMenu from "./ContextMenu";

export default function ExpanseTable({
  data,
  setTableData,
  TableData,
  setExpanse,
  setSave,
  idArr,
}) {
  const [filterd, setQuery] = useFilter(data, (data) => data.category);
  const [menuPsition, setMenuPosition] = useState({});
  const [id, setId] = idArr;
  const [sortCallbackMethod, setSortCallbackMethod] = useState(
    () =>
      function (a, b) {
        return;
      }
  );
  function getTotle() {
    if (filterd.length) {
      return (
        <tr id="table-totle">
          <th>Total</th>
          <th
            onClick={() => {
              setSortCallbackMethod(() => function () {});
            }}
          >
            clear sorting
          </th>
          <th>
            ₹
            {filterd.reduce((previousValue, currentValue) => {
              if (currentValue.amount) {
                return previousValue + Number(currentValue.amount);
              }
              return previousValue + 0;
            }, 0)}
          </th>
        </tr>
      );
    }
    return null;
  }

  function handleContext(event) {
    event.preventDefault();
    setMenuPosition({ top: event.clientY, left: event.clientX });
    console.log(event);
  }

  return (
    <>
      <ContextMenu
        position={menuPsition}
        setPosition={setMenuPosition}
        id={id}
        setTable={setTableData}
        TableData={TableData}
        setExpanse={setExpanse}
        setSave={setSave}
      />
      <table
        className="expense-table"
        onClick={() => {
          setMenuPosition({});
        }}
      >
        <thead>
          <tr>
            <th className="amount-column">
              <div>
                <span>Title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    setSortCallbackMethod(
                      () =>
                        function (a, b) {
                          return a.title.localeCompare(b.title);
                        }
                    );
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setSortCallbackMethod(
                      () =>
                        function (a, b) {
                          return b.title.localeCompare(a.title);
                        }
                    );
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
            <th>
              <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    setSortCallbackMethod(
                      () =>
                        function (a, b) {
                          return a.amount - b.amount;
                        }
                    );
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setSortCallbackMethod(
                      () =>
                        function (a, b) {
                          return b.amount - a.amount;
                        }
                    );
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {[...filterd]
            .sort(sortCallbackMethod)
            .map(({ id, title, category, amount }) => {
              return (
                <tr
                  key={id}
                  onContextMenu={function (event) {
                    event.preventDefault();
                    setMenuPosition({
                      top: event.clientY,
                      left: event.clientX,
                    });
                    setId(id);
                  }}
                >
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>₹{amount}</td>
                </tr>
              );
            })}

          {getTotle()}
        </tbody>
      </table>
    </>
  );
}
