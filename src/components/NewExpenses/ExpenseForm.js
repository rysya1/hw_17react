import { useState } from 'react';
import './ExpenseForm.css';
import User from './User'
const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [showUsers, setShowUsers] = useState(true);

  const titleChangeHandler = (event) => { //бул обработчик событий
    setTitle(event.target.value)
  };

  const amountChangeHandler = (event) => { //бул обработчик событий
    setAmount(event.target.value)
  };

  const dateChangeHandler = (event) => { //бул обработчик событий
    setDate(event.target.value);
  };

  const submitHandler = (event) => { //submit бул form иштегенде аткарылат 
    event.preventDefault(); //preventDefault чтобы отключить действие form по умолчанию
   
    const expenseData = { //азыр бул жакта NewExpensesтин ичиндеги expenseDataга в качестве объекта барып калды 
      //shortCard провописание болду 
      title,
      amount,
      date: new Date(date)
    }
    props.onSaveExpenseData(expenseData) //биз бул жерде NewExpenses те тузулгон функцияны бул жерге чакырып койдук
  };
  
  // const usersList = (users) => (
    
  // );
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text"  value={title} onChange={titleChangeHandler}/>{/* value бул жакта жазбай деле койсок болот бирок управляемый кылыш учун колдонобуз "двухстрочная привязка"*/}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input name="amount" type="number" min="0.1" step="1"  value={amount} onChange={amountChangeHandler}/> {/* value бул жакта жазбай деле койсок болот бирок управляемый кылыш учун колдонобуз "двухстрочная привязка"*/}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input name="date " type="date" min="2022-01-01"  value={date} onChange={dateChangeHandler} /> {/* value бул жакта жазбай деле койсок болот бирок управляемый кылыш учун колдонобуз "двухстрочная привязка"*/}
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onToggle}>Cancel</button> <button type="submit" >  Add Expense</button>
        {/* {showUsers && usersList} onClick={toggleUsersHandler}*/}
      </div>
    </form>
  );
};

export default ExpenseForm;
