import React from 'react'

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="h-container">

                <img src="./logo.png" alt="logo" width={100} />

                <div className="h-menu">
                    <a href="">
                        Residencies
                    </a>
                    <a href="">Our Value</a>
                    <a href="">Contact us</a>
                    <a href="">Get started</a>
                    <button className='button'>
                      <a href="">Contact</a>
                    </button>

                </div>

            </div>

        </section>
    )
}