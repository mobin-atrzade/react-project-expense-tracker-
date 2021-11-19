import { useEffect, useState } from 'react'
import TransActionComponent from './TransActionComponent'
import OverViewComponent from './OverViewComponent';

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0)
    const [income, setIncome] = useState(0)
    const [transActions, setTransActions] = useState([])

    const addTransAction = (formValues) => {
        // console.log(formValues);
        const data = { ...formValues, id: Date.now() }
        setTransActions([...transActions, data])
    }
    useEffect(() => {
        let exp = 0;
        let inc = 0;
        transActions.forEach((t) => {
            t.type === "expense" ? exp = exp + parseFloat(t.amount) : inc = inc + parseFloat(t.amount);
        });
        setExpense(exp);
        setIncome(inc);
    }, [transActions])

    return (
        <section className="container">
            <OverViewComponent
                expense={expense}
                income={income}
                addTransAction={addTransAction}
            />
            <TransActionComponent
                transactions={transActions}
            />
        </section>
    )
}

export default ExpenseApp;