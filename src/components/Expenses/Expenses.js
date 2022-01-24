import React from 'react';
//а это  не контролируемая компонента
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2022')

  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  }) //filteredExpenses полный фильтырация болгон массивти сактайт

  let expensesContent = <p style={{textAlign: 'center', color: 'white'}}>No 
  Expenses Found</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((element) => { //бул жакта полный фильтырация болгон массивти аралап атабыз 
      return (
        <ExpenseItem
          key={Math.random()} //бул жакта реакт учун уникальный ключ беришибиз керек а то консольдон ошибка чыга берет но если биз баарын озубуз map жок кылып чыксак анда уже анын под копотом озунун ключу создаётся
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      );
    })
  }
   if (filteredExpenses === '') {
     
   }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {console.log(filteredYear)}
      {}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
      {filteredYear === "all" && props.items.map((element) => { //бул жакта полный фильтырация болгон массивти аралап атабыз
      return (
        <ExpenseItem
          key={Math.random()} //
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      );
    })}

    </Card>
  );
};

export default Expenses;
