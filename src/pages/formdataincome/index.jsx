import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./formdata.css";
import { useNavigate } from "react-router-dom";
import bg1 from "../../images/bg1.png";
import bg2 from "../../images/bg2.png";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useAddTransaction } from "../../hooks/useAddTransactions";
import health from "../../images/health.png";

export const FormDataExpense = () => {
  const navigate = useNavigate(); 
  const { transactions, transactionTotals } = useGetTransactions();
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const [selectedDate, setSelectedDate] = useState(null);
  const { addTransaction } = useAddTransaction();
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType:"income",

    });

    setDescription("");
    setTransactionAmount("");
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/smartwallet", { state: { selectedDate } }); // Pass selectedDate as state
  };

  return (
    <body>
      <div className="whole">
        <div className="container">
        
          <img src={bg2} alt="bg2" className="top-left-image" />
          <div className="heading">
            <h1> Form</h1>
          </div>
          <form className="add-transaction" onSubmit={(e) => { onSubmit(e); handleSubmit(e); }}>
            <div>
            <a href="/smartwallet" className="closebtn">
          <img src={health} alt=""></img>
        </a>
              <label for="income-amount" className="inc">
                Income Amount{" "}
              </label>
              <input
                type="number"
                placeholder="Amount"
                value={transactionAmount}
                required
                onChange={(e) => setTransactionAmount(e.target.value)}
              />
              <label for="description" className="inc">
                Description{" "}
              </label>
              <input
              type="text"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <div>
              <label htmlFor="expense-date" className="inc">
                Expenditure Date{" "}
              </label>
              <DatePicker
                id="expense-date"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <button type="submit" className="sub">
              Submit
            </button>
          </form>

          <img src={bg1} alt="bg1" className="bottom-right-image" />
        </div>
      </div>
    </body>
  );
};