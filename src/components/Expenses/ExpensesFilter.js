//бул компоненттын озунун состояниясы жок но он зависит от состояния от другого компонента
import './expensesFilter.css'
function ExpensesFilter(props) {
    const selectChangeHandler = (event) => {
        props.onChangeFilter(event.target.value) //бул жерде onChangeFilter тандалган жылды алат
    }
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control '>
                <label>Filter by year</label>
               <select value={props.selected} onChange={selectChangeHandler}>  {/*это выборка  */}
               {/* value={props.selected} мы здесь делаем что бы 2022 постоянно стояла из-за того что const [filteredYear,setFilteredYear] = useState('2022')*/}
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>{/*value здесь обязательно жазылыш керек*/}
                    <option value="all">select all</option>
                </select>
            </div>
        </div>

    )
    
}
export default ExpensesFilter