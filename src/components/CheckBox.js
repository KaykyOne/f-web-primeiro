import React from 'react'
import styles from './CheckBox.module.css';

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
