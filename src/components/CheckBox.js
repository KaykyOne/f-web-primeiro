import React from 'react'

export default function CheckBox({children}) {
    return (
        <>
            <label class="checkbox-container">
                <input checked={true} type="checkbox"></input>
                    <span class="checkmark"></span>
                    {children}       
            </label>

        </>
    )
}
