import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
const NewExpenses = (props) => {
  
  const SaveExpenseDataHandler = (entereExpenseData) => {
    const expenseData = {
      ...entereExpenseData, //form дан алынган данныйлар бул жерге сакталды
      id:Math.random().toString() //id нужна для того что бы при рендере всё было уникальным
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
       <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>{/* мы здесь в качестве обработчика onSaveExpenseData га  SaveExpenseDataHandler ны берип койдук ну и ещё подъём состояния*/}
    </div>
  );
};

export default NewExpenses;
