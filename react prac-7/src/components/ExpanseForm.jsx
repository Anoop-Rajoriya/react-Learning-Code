import React, { useState } from "react";
import InputFeild from "./InputFeild";
import SelectFeild from "./SelectFeild";
import { useLocalStroage } from "../utils/hooks/useLocalStroage";

export default function ExpanseForm({
  setTableData,
  expanseState,
  isSaveArr,
  idArr,
}) {
  const [expanse, setExpanse] = expanseState;
  const [errorMessage, setErrorMessage] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [isSave, setSave] = isSaveArr;

  const [id, setId] = idArr;

  const validation = {
    title: [
      { required: true, message: "title is required!!!" },
      { minLength: 3, message: "title must required more then 2 character!!" },
    ],
    category: [{ required: true, message: "category is required!!!" }],
    amount: [
      { required: true, message: "amount is required!!!" },
      { type: /^\d*\.?\d*$/, message: "please enter a currect type!!" },
    ],
  };

  function showError() {
    let error = false;
    setErrorMessage({
      title: "",
      category: "",
      amount: "",
    });

    Object.entries(expanse).forEach(([key, val]) => {
      validation[key].some((value) => {
        if (value.required && !val) {
          error = true;
          setErrorMessage((pre) => {
            return { ...pre, [key]: value.message };
          });
        }

        if (value.minLength > val.length && val) {
          error = true;
          setErrorMessage((pre) => {
            return { ...pre, [key]: value.message };
          });
        }

        if (value.type && !value.type.test(val)) {
          error = true;
          setErrorMessage((pre) => {
            return { ...pre, [key]: value.message };
          });
        }
      });
    });

    return error;
  }

  function formHandler(event) {
    event.preventDefault();

    if (showError()) return;

    if (isSave) {
      setTableData((pre) => {
        return pre.map((value) => {
          if (value.id === id) {
            return { ...expanse, id };
          }
          return value;
        });
      });
      setSave("");
      setId("");
      setExpanse({
        title: "",
        category: "",
        amount: "",
      });
      return;
    }

    setTableData((pre) => [...pre, { ...expanse, id: crypto.randomUUID() }]);

    setExpanse({
      title: "",
      category: "",
      amount: "",
    });
  }

  return (
    <form className="expense-form" onSubmit={formHandler}>
      <InputFeild
        labelFor="title"
        labelValue="title"
        inputId="title"
        inputName="title"
        InputValue={expanse.title}
        InputHandler={(event) => {
          setExpanse((pre) => ({ ...pre, title: event.target.value }));
        }}
        errorMasseg={errorMessage.title}
      />

      <SelectFeild
        labelFor="category"
        labelValue="Category"
        selectId="category"
        selectName="selectName"
        selectValue={expanse.category}
        selectHandler={(event) => {
          setExpanse((pre) => ({ ...pre, category: event.target.value }));
        }}
        optionList={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Filter category"
        errorMasseg={errorMessage.category}
      />

      <InputFeild
        labelFor="amount"
        labelValue="amount"
        inputId="amount"
        inputName="amount"
        InputValue={expanse.amount}
        InputHandler={(event) => {
          setExpanse((pre) => ({ ...pre, amount: event.target.value }));
        }}
        errorMasseg={errorMessage.amount}
      />
      <button className="add-btn">{isSave ? "save" : "add"}</button>
    </form>
  );
}
