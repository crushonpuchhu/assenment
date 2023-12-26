import React from "react";
import css from './navbar.module.css'
import { GiWorld } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigetor = useNavigate();

    return (<>
        <div className={css.main}>

            <img className={css.logo} src="https://static.wingify.com/gcp/images/vwo-logo-white.svg" alt="" />
            <section className={css.section}>
                {/* first list */}
                <ul className={css.MenuList}>
                    <li onMouseLeave={() => { navigetor("/nothing") }} onMouseEnter={() => { navigetor("/first") }}>Capabilities</li>
                    <li>Pricing</li>
                    <li onMouseLeave={() => { navigetor("/nothing") }} onMouseEnter={() => { navigetor("/second") }}>Solutions</li>
                    <li onMouseLeave={() => { navigetor("/nothing") }} onMouseEnter={() => { navigetor("/third") }}>Why VWO?</li>
                    <li onMouseLeave={() => { navigetor("/nothing") }} onMouseEnter={() => { navigetor("/fouth") }}>Resources</li>
                </ul>
                {/* second list */}
                <ul className={css.SideList}>
                    <li>Contact</li>
                    <li>Login</li>
                    <li><GiWorld />EN</li>
                </ul>


            </section>
        </div>
    </>)
}

export default Navbar;