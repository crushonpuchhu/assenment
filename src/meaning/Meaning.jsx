import React, { useState } from 'react'
import ms from './meaning.module.css'
import { IoSearch } from "react-icons/io5";
function Meaning() {
    const [Word, SetWord] = useState("");
    const [meaning1, SetMeaning] = useState("");


    async function getmening() {

        try {
            const data = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${Word}`, {
                method: 'GET',
                headers: {

                }
            })

            const getdata = await data;
            const findata = await getdata.json();
            SetMeaning(findata[0].meanings[0].definitions[0].definition)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={ms.main}>

            <div className={ms.Boxx}>
                <input onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        if (Word != "") { getmening() }
                    }
                }} onChange={(e) => { SetWord(e.target.value) }} placeholder='search' type="text" />
                <IoSearch onClick={() => { if (Word != "") { getmening() } }} />

            </div>
            <div className={ms.Boxx}>
                <h1>{meaning1 != "" ? meaning1 : null}</h1>
            </div>

        </div>
    )
}

export default Meaning
