import React from 'react'

const Footer = () => {
    return (
        <div className="p-5 border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center py-5 text-sm">
            <div className="mb-4">
                <a href="#" className="mx-2.5">About</a>
                <a href="#" className="mx-2.5">Privacy Policy</a>
                <a href="#" className="mx-2.5">Terms of Services</a>
            </div>
            <p>© Copyright Reserved {new Date().getFullYear()}</p>
        </div>

    )
}

export default Footer