import { Button, TextareaAutosize, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
    useEffect(()=>{
        window.scrollTo(0, 0)
      },[])
    return (
        <div>
            <div className='bg-[#f4f4f4]'>

                <Container>

                    <div className='py-[20px] h-[80vh] flex justify-between items-center'>
                        <div className='w-[40%]  text-start'>
                            <h1 className='text-[40px] font-[700] py-[20px]'>Контакты</h1>

                            <div className='py-[20px]'>
                                <p>ПОЧТА</p>
                                <p className='text-[20px] py-[10px] border-b-2 border-solid '><b className='hover:text-[#FCB027]'>info@shantui.com.ru</b></p>
                            </div>

                            <div className='py-[20px]'>
                                <p>ТЕЛЕФОН</p>
                                <p className='text-[20px] py-[10px] border-b-2 border-solid '><b className='hover:text-[#FCB027]'>8 499 430-01-64</b></p>
                            </div>

                            <div className='py-[20px]'>
                                <p>АДРЕС</p>
                                <p className='text-[20px] py-[10px] border-b-2 border-solid '><b className='hover:text-[#FCB027]'>Москва, 1-я Северная линия, 1с10</b></p>
                            </div>
                            <a href="" className='hover:text-[#FCB027] opacity-[0.8]'>
                                <FacebookIcon style={{fontSize:'30px'}} />
                            </a>
                        </div>
                        <div className='w-[50%] h-[40vh] bg-[green]'>

                        </div>
                    </div>

                    <div className='py-[70px]'>
                        <div className='bg-[#FFF] text-center py-[70px]'>
                            <h1 className='text-[36px] font-[700]'>Оставить заявку</h1>
                            <div className='w-[50%] m-auto pt-[30px]'>
                                <TextField label='Введите имя' color="warning" fullWidth />
                                <div className='py-[30px] flex justify-between'>
                                    <TextField label='Введите телефон' color="warning" className='w-[48%]' />
                                    <TextField type='email' label='Введите почту' color="warning" className='w-[48%]' />
                                </div>
                                <TextareaAutosize placeholder='Введите комментарий' style={{ width:'100%',height:'8vh',border:'1px solid lightgrey',borderRadius:'5px',fontSize:'16px',padding:'12px 0 0 10px'}} />
                                <Button fullWidth color="warning" variant='contained' style={{ padding: '10px 0', marginTop: '30px' }}>Отправить</Button>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </div>
    )
}

export default Contact