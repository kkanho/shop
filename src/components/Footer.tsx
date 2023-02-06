import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{
            background: "rgba(var(--bs-light-rgb),var(--bs-bg-opacity))"
        }}>
            © 2023 <a className="text-dark" href="https://github.com/kkanho/shop">Kan Ho</a>. All rights reserved
        </div>
        </footer>
    )
}
