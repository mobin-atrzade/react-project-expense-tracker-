import React, { useState } from 'react'

const TransActionForm = ({ addTransAction, isShow }) => {
    const [formValues, setFormValues] = useState({
        type: "Expense",
        amount: 0,
        desc: "",
    });

    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        addTransAction(formValues)
        isShow(false);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type='text'
                name="desc"
                placeholder="description"
                onChange={changeHandler}
                value={formValues.desc}
            />
            <input type='number'
                name="amount"
                placeholder="amount"
                onChange={changeHandler}
                value={formValues.amount}
            />
            <div className="radioBox">
                <input
                    type="radio"
                    value="expense"
                    name="type"
                    checked={formValues.type === "expense"}
                    onChange={changeHandler}
                    id="expense"
                />
                <label htmlFor="expense">Expense</label>
                <input
                    type="radio"
                    value="income"
                    name="type"
                    checked={formValues.type === "income"}
                    onChange={changeHandler}
                    id="income"
                />
                <label htmlFor="income">Income</label>
            </div>
            <button type="submit"
                className="btn primary">
                Add transaction
            </button>
        </form>
    )
}
export default TransActionForm;