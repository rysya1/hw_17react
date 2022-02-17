import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
import User from './User'
const NewExpenses = (props) => {
	const [change, setChange] = useState(false)

	const SaveExpenseDataHandler = (entereExpenseData) => {
		const expenseData = {
			...entereExpenseData, //form дан алынган данныйлар бул жерге сакталды
			id: Math.random().toString(), //id нужна для того что бы при рендере всё было уникальным
		}
		props.onAddExpense(expenseData)
	}
	const toggleUsersHandler = () => {
		setChange((curState) => !curState)
	}

	return (
		<div className='new-expense'>
			{change && (
				<ExpenseForm onToggle={toggleUsersHandler} onSaveExpenseData={SaveExpenseDataHandler} />
			)}
			{!change &&  <User onToggle={toggleUsersHandler} />}

			{/* мы здесь в качестве обработчика onSaveExpenseData га  SaveExpenseDataHandler ны берип койдук ну и ещё подъём состояния*/}
		</div>
	)
}

export default NewExpenses
