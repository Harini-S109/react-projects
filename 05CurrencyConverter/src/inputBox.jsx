import React from 'react'

function InputBox({
    label = "from",
    amount,
    onAmountChange,
    amountDisabled = false,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrrency,
    className = "",
}) {
  return (
    <div className={`bg-light mx-auto py-3 rounded-3  ${className}`} style={{width:"35%"}}>
        <div className="box d-flex gap-5 px-5 justify-content-between">
            <div className="amtBox d-flex flex-column">
                <label className='text-dark'>{label}</label>
                <input type="number" 
                className='px-1'
                placeholder='Amount'
                input={amount}
                name="" id="" />
            </div>
            <div className="curBox d-flex flex-column">
                <label htmlFor="">Currency</label>
                <input type="text" />
            </div>
        </div>
    </div>
  )
}
// bg-opacity-75 shadow-lg
export default InputBox