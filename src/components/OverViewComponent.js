import React, { useState } from 'react'
import TransActionForm from './TransActionForm';

const OverViewComponent = ({ income, expense, addTransAction }) => {

    const [isShow, setIsShow] = useState(false)

    return (
        <>
            <div className="topSection">
                <p>Balance : {income - expense}</p>
                <button
                    onClick={() => setIsShow((prevState) => !prevState)}
                    className={`btn ${isShow && "cancelBtn"}`}>
                    {isShow ? "Cancel" : "Add"}
                </button>
            </div>

            {isShow &&
                <TransActionForm
                    addTransAction={addTransAction}
                    isShow={setIsShow}
                />
            }

            <div className="resultSection">
                <div className="expenseBox">
                    Expense <span style={{ color: "red" }}>{expense} $</span>
                </div>
                <div className="expenseBox">
                    Income <span>{income} $</span>
                </div>
            </div>
        </>
    )
}

export default OverViewComponent;