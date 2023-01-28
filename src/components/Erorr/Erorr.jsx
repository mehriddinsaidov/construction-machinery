import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import errorimg from '../img/erorr-img-new.gif'

function Erorr() {
    return (
        <div>
            <div className='py-[10px] relative' >
                <h1 className='text-[3em] text-center absolute top-[10px] left-[61%]'>ERROR 404</h1>
                <img className='m-auto' src={errorimg} alt="" />
                <Link to='/'>
                    <Button style={{ width: '14%', position: 'absolute', top: '79vh', left: '43%' }} variant="contained" color='success'>Go back home</Button>
                </Link>
            </div>
        </div>
    )
}

export default Erorr