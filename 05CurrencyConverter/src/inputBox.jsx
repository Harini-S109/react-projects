import React from 'react'

function InputBox({
    label = "from",
    amount,
    onAmountChange,
    amountDisabled = false,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrrency = "USD",
    className = "",
}) {
  return (
    <div className={`bg-light mx-auto py-3 rounded-3  ${className}`} style={{width:"30%"}}>
        <div className="box d-flex gap-5 px-4 justify-content-between">
            <div className="amtBox d-flex flex-column">
                <label className='text-dark'>{label}</label>
                <input type="number" 
                className='px-1'
                placeholder='Amount'
                input={amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}
                name="" id="" 
                />
            </div>
            <div className="curBox d-flex flex-column" style={{width:"15%"}}>
                <label htmlFor="">Currency</label>
                <select 
                onChange={(e) => onCurrencyChange(e.target.value)}
                value={selectedCurrrency}
                >
                    {currencyOptions.map((currency) => (
                        <option key = {currency} value = {currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    </div>
  )
}
// bg-opacity-75 shadow-lg
export default InputBox