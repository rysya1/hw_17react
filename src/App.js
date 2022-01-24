import React from 'react';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
const GET_INIT = [ //мы его поставили с наружи чтобы при рендере чтоб он заново не создавался 
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2024, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022),
    },
  ];
const App = () => {
  const [expenses , setExpenses] = useState(GET_INIT)
  const addExpenseHandler = expense => {
    setExpenses(PrevExpense => { //мы здесь добавляем новый объект но те данные не будут удаляться 
      return[expense, ...PrevExpense] //биз биякта жаны объект менен эски объекты жаны бир массивке салып атабыз 
    })//PrevExpense у нас приходит из состаяния 
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>{/* мы здесь в качестве обработчика onAddExpense га  addExpenseHandler ди берип койдук ну и ещё подъём состояния журуп жатат*/}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
