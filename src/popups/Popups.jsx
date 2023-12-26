import React from 'react'
import css from './popups.module.css'

function Popups({ height1, widht1 }) {

    return (
        <div className={css.main}>
            <section style={{ height: height1, width: widht1 }} className={css.box} >
                <h1>Test data</h1>
            </section>
        </div>
    )
}

export default Popups
