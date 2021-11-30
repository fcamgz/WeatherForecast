import React from 'react'

export default function Header() {
    return (
        <div className='fixed-top bg-secondary d-flex align-items-center justify-content-center text-light' style={{height: '5em', borderBottom: '3px solid black'}}>
            <h3 className='text-center'>Toronto Weather Forecast</h3>
        </div>
    )
}
