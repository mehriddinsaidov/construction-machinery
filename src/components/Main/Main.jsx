import { Container } from '@mui/system'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, Outlet } from 'react-router-dom';
import logo from '../img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Main.css'
import { Dropdown, Space } from 'antd';
import { Box, Button, Modal, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '45%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Main() {
    const items = [
        {
            key: '1',
            label: (
                <Link to='/Услуги' className='p-[15px] rounded-[15px]'><b>Ремонт и обслуживание</b></Link>
            ),
        },
    ];
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div className='bg-[#dfdfdf] laptop1:bg-[green]'>
                <Container>
                    <div className='flex'>
                        <ul className='flex items-center laptop1:w-[50%] tablet1:w-[70%] w-[25%] justify-between text-[13px]'>
                            <a href=""><li className='hover:text-[#FCB027] opacity-[0.8]'>
                                <b>8 499 430-01-64</b>
                            </li></a>
                            <a href=""><li className='hover:text-[#FCB027] opacity-[0.8]'>
                                <b>info@shantui.com.ru</b>
                            </li></a>
                        </ul>
                        <div className='w-[75%] text-end'>
                            <a href="" className='hover:text-[#FCB027] opacity-[0.8]'>
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
            <div claassName='sticky top-0'>
                <Container>
                    <div className='flex'>
                        <div className='flex items-center w-[65%] py-[15px]'>
                            <Link to='/'><img src={logo} alt="LOGO" /></Link>
                            <ul className='flex justify-around w-[75%] ml-[20px] items-center'>

                                <Link className='border border-solid py-[7px] px-[15px] hover:text-[#FCB027]'><b><MenuIcon /> Каталог</b></Link>

                                <Link to='/about' className='hover:text-[#FCB027]'><b>О компании</b></Link>
                                <Link to='/Доставка' className='hover:text-[#FCB027]'><b>Доставка</b></Link>
                                <Link to='/Лизинг' className='hover:text-[#FCB027]'><b>Лизинг</b></Link>

                                {/* uslugi */}
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <Link className='hover:text-[#FCB027]'>
                                                <b>Услуги</b>
                                                <KeyboardArrowDownIcon />
                                            </Link>
                                        </Space>
                                    </a>
                                </Dropdown>

                            </ul>
                        </div>
                        <div className='flex items-center w-[35%] justify-end'>
                            <Link to='/contacts' className='pr-[30px] hover:text-[#FCB027]'><b>Контакты</b></Link>
                            <SearchIcon className='hover:text-[#FCB027]' />
                        </div>
                    </div>
                </Container>
            </div>

            <Outlet />

            <div className='py-[30px] '>
                <Container>
                    <div className='flex w-[100%]'>
                        <ul className='flex flex-col text-start w-[25%]'>
                            <b className='opacity-[0.5]'>О НАС</b>
                            <Link to='/' className='hover:text-[#FCB027] py-[10px] text-[15px] text-[15px]'><b>Главная</b></Link>
                            <Link to='/about' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>О компании</b></Link>
                            <Link to='/contacts' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Контакты</b></Link>
                        </ul>
                        <ul className='flex flex-col text-start w-[25%]'>
                            <b className='opacity-[0.5]'>КАТАЛОГ</b>
                            <Link to='/user/3' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Экскаваторы</b></Link>
                            <Link to='/user/2' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Бульдозеры</b></Link>
                            <Link to='/user/7' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Фронтальные погрузчики</b></Link>
                            <Link to='/user/6' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Дорожные катки</b></Link>
                        </ul>
                        <ul className='flex flex-col text-start w-[25%]'>
                            <b className='opacity-[0.5]'>КЛИЕНТАМ</b>
                            <Link to='/Доставка' className='hover:text-[#FCB027] py-[10px]'><b>Доставка</b></Link>
                            <Link to='/Лизинг' className='hover:text-[#FCB027] py-[10px]'><b>Лизинг спецтехники</b></Link>
                            <Link to='/Услуги' className='hover:text-[#FCB027] py-[10px]'><b>Ремонт и обслуживание</b></Link>
                        </ul>

                        <div className='text-end w-[25%]'>
                            <a href="tel:8 499 430-01-64" class="v-link v-link--variant-secondary" data-v-4573c198="">
                                <li className='hover:text-[#FCB027] list-none text-[24px]'><b>8 499 430-01-64</b></li>
                            </a>
                            <a href="mailto:info@shantui.com.ru" class="v-link v-link--variant-secondary" data-v-4573c198="">
                                <li className='hover:text-[#FCB027] pt-[5px] opacity-[0.8] list-none text-[15px]'><b>info@shantui.com.ru</b></li>
                            </a>
                            <a href="mailto:info@shantui.com.ru" className='hover:text-[#FCB027] opacity-[0.8]'>
                                <FacebookIcon sx={{ margin: '20px 0' }} />
                            </a>    <br />
                            <button onClick={handleOpen} style={{
                                backgroundColor: '#FCB027', padding: '10px 20px', fontSize: '15px',
                                fontWeight: '600', color: '#FFF'
                            }}>Задать вопрос</button>
                        </div>
                    </div>
                    <p class='text-start mt-[30px] mb-[30px] text-[14px] opacity-[0.8]'>2023 © Официальный дистрибьютор SHANTUI</p>

                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <div className='pb-[30px] px-[10px]'>
                                    <div className='text-end'>
                                        <ClearIcon onClick={handleClose} style={{ cursor: 'pointer', fontSize: '35px', marginBottom: '15px' }} />
                                    </div>
                                    <div className='bg-[#FFF] text-center'>
                                        <h1 className='text-[36px] font-[700]'>Подать заявку на лизинг</h1>
                                        <div className='w-[100%] pt-[30px]'>
                                            <TextField label='Введите имя' color="warning" fullWidth />
                                            <div className='py-[30px] flex justify-between'>
                                                <TextField label='Введите телефон' color="warning" className='w-[48%]' />
                                                <TextField type='email' label='Введите почту' color="warning" className='w-[48%]' />
                                            </div>
                                            <TextField label='Введите коментарий' color="warning" fullWidth />
                                            <Button fullWidth color="warning" variant='contained' style={{ padding: '10px 0', marginTop: '30px' }}>Отправить</Button>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Main