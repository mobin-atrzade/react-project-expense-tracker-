import React, { useEffect, useState } from 'react'

const TransActionComponent = (props) => {
    const [searchItem, setSearchItem] = useState("")
    const [filterTnx, setFilterTnx] = useState(props.transactions)

    const filterTransactions = (search) => {
        if (!search || search === "") {
            setFilterTnx(props.transactions)
            return;
        }
        const filtered = props.transactions.filter((t) => t.desc.toLowerCase().includes(search.toLowerCase()))
        setFilterTnx(filtered)
    }

    const changeHandler = (e) => {
        setSearchItem(e.target.value);
        //filter
        filterTransactions(e.target.value)
    }

    useEffect(() => {
        filterTransactions(searchItem)
    }, [props.transactions])

    if (!props.transactions.length) return <h4 className="tnx-n-l">add some tnx</h4>


    return (
        <section>
            <input type="text"
                value={searchItem}
                onChange={changeHandler}
                placeholder="Search for tnx ..."
                className="search"
            />
            {filterTnx.length
                ? filterTnx.map((t) =>
                    <div key={t.id}
                        className="transaction"
                        style={{ borderRight: t.type === "expense" && "4px solid red" }}>
                        <span>{t.desc}</span>
                        <span>${t.amount}</span>
                    </div>
                ) : <div className="tnx-no-item">no item matchs !</div>
            }
        </section>
    )
}

export default TransActionComponent;