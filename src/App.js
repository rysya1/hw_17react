import React from 'react'
import { useState, useCallback } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import './App.css'
const GET_INIT = [
	//мы его поставили с наружи чтобы при рендере чтоб он заново не создавался
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
] // async const addExpenseHandler = expense => {
// setExpenses(PrevExpense => {
//   return[expense, ...PrevExpense]
// })
// }
const App = () => {
	const [expenses, setExpenses] = useState(GET_INIT)
	const [isLoading, setIsLoading] = useState(false)
	const [sohr,setSohr] = useState(false)
	const [error, setError] = useState(null)

	const fetchMoviesHandler = useCallback(async () => {
		
		setIsLoading(true)
		setError(null)
		try {
			const response = await fetch(
				'https://react-http-expenses-bd5f0-default-rtdb.firebaseio.com/expenses.json',
			)
			if (!response.ok) {
				throw new Error('Something went wrong!')
			}

			const data = await response.json()

			const loadetMovies = []
			for (const key in data) {
				loadetMovies.push({
					id: key,
					title: data[key].title,
					amount: data[key].amount,
					date: new Date(data[key].date),
					remove: data[key].remove,
				})
			}
			console.log(data)
			setExpenses(loadetMovies)
		} catch (error) {
			setError(error.message)
		}
		setIsLoading(false)
		
	}, [])

	async function addExpenseHandler(expense) {
		setSohr(true)
		const response = await fetch(
			'https://react-http-expenses-bd5f0-default-rtdb.firebaseio.com/expenses.json',
			{
				method: 'POST',
				body: JSON.stringify(expense),
				headers: {
					'Content-type': 'application/json',
				},
			},
		)
		const data = await response.json()
		setSohr(false)
	}

	function removeTask(remove) {
		setExpenses(remove)
	}
	let content = <p className='new-expense'>Found no movies.</p>

	if (expenses.length > 0) {
		content = <Expenses items={expenses} removeTask={removeTask} />
	}

	if (error) {
		content = <p className='new-expense'>{error}</p>
	}
	if (sohr) {
		content = <p className='new-expense'>Data saved successfully.</p>;
	}
	if (isLoading) {
		content = (
			<div className='cont'>
				<div class='lds-ring'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		)
	}

	return (
		<div>
			<NewExpenses onAddExpense={addExpenseHandler} />
			<section className='new-expense'>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>

			<section>{content}</section>
		</div>
	)
}

export default App
