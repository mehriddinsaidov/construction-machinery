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
import { Box, Button, Menu, MenuItem, Modal, TextareaAutosize, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Practic from '../Practic/Practic'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <div className='sticky top-0 z-10 bg-[#FFF]'>
                <div className='bg-[#dfdfdf] tablet1:w-[100%]'>
                    <Container>
                        <div className='flex justify-between tablet1:hidden'>
                            <ul className='w-[25%] tablet1:w-[70%] flex items-center justify-between text-[13px]'>
                                <a href=""><li className='hover:text-[#FCB027] opacity-[0.8]'>
                                    <b>8 499 430-01-64</b>
                                </li></a>
                                <a href=""><li className='hover:text-[#FCB027] opacity-[0.8]'>
                                    <b>info@shantui.com.ru</b>
                                </li></a>
                            </ul>
                            <div className='w-[5%] tablet1:w-[20%] text-end'>
                                <a href="" className='hover:text-[#FCB027] opacity-[0.8]'>
                                    <FacebookIcon />
                                </a>
                            </div>

                        </div>
                    </Container>
                </div>
                <div>
                    <Container>

                        <div className='flex tablet1:w-[100%] tablet1:justify-between'>
                            <div className='flex items-center w-[100%] py-[15px] tablet1:justify-between'>

                                <div className='flex justify-between w-[60%] items-center'>
                                    <div className='hidden tablet1:block w-[25%]'>
                                        <Practic className='w-[100%]' />
                                    </div>

                                    <div className='tablet1:w-[65%]'>
                                        <Link to='/'><img className='tablet1:w-[100%]' src={logo} alt="LOGO" /></Link>
                                    </div>
                                </div>
                                <ul className='tablet1:hidden flex justify-around w-[75%] items-center'>
                                    
                                    <Link id="basic-button"
                                        aria-controls={open2 ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open2 ? 'true' : undefined}
                                        onClick={handleClick} className='border border-solid py-[7px] px-[15px] hover:text-[#FCB027]'><b><MenuIcon /> Каталог</b>
                                    </Link>
                                    <div className='tablet1:w-[20%]'>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open2}
                                            onClose={handleClose2}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}>
                                                
                                            <div className='m-[6px]'>
                                                <Link onClick={handleClose2} to='/user/1'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Автогрейдеры</b> <p className='opacity-[0.6]'>6</p></p></Link>
                                                <Link onClick={handleClose2} to='/user/2'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Бульдозеры</b> <p className='opacity-[0.6]'>78</p></p></Link>
                                                <Link onClick={handleClose2} to='/user/3'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Экскаваторы</b> <p className='opacity-[0.6]'>13</p></p></Link>
                                                <Link onClick={handleClose2} to='/user/4'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Компакторы</b> <p className='opacity-[0.6]'>3</p></p></Link>
                                                <Link onClick={handleClose2} to='/user/5'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Трубоукладчики</b> <p className='opacity-[0.6]'>4</p></p></Link>
                                                <Link onClick={handleClose2} to='/user/6'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Дорожные катки</b> <p className='opacity-[0.6]'>45</p></p></Link>
                                                <Link onClick={handleClose2} to='/user/7'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b className='pr-[15px]'>Фронтальные погрузчики</b> <p className='opacity-[0.6]'>28</p></p></Link>
                                            </div>
                                        </Menu>
                                    </div>

                                    <Link to='/about' className='tablet1:w-[20%] hover:text-[#FCB027]'><b>О компании</b></Link>
                                    <Link to='/Доставка' className='tablet1:w-[20%] hover:text-[#FCB027]'><b>Доставка</b></Link>
                                    <Link to='/Лизинг' className='tablet1:w-[20%] hover:text-[#FCB027]'><b>Лизинг</b></Link>

                                    {/* uslugi */}
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <Link className='tablet1:w-[20%] hover:text-[#FCB027]'>
                                                    <b>Услуги</b>
                                                    <KeyboardArrowDownIcon />
                                                </Link>
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </ul>

                                <div className='flex items-center w-[35%] tablet1:w-[10%] justify-end'>
                                    <Link to='/contacts' className='tablet1:hidden pr-[30px] hover:text-[#FCB027]'><b>Контакты</b></Link>
                                    <SearchIcon className='hover:text-[#FCB027]' />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            <Outlet />

            <div className='py-[30px] '>
                <Container>
                    <div className='flex w-[100%] flex-wrap'>
                        <ul className='flex flex-col text-start w-[25%] tablet1:w-[100%]'>
                            <b className='opacity-[0.5]'>О НАС</b>
                            <Link to='/' className='hover:text-[#FCB027] py-[10px] text-[15px] text-[15px]'><b>Главная</b></Link>
                            <Link to='/about' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>О компании</b></Link>
                            <Link to='/contacts' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Контакты</b></Link>
                        </ul>
                        <ul className='flex flex-col text-start w-[25%] tablet1:w-[100%] tablet1:mt-[30px]'>
                            <b className='opacity-[0.5]'>КАТАЛОГ</b>
                            <Link to='/user/3' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Экскаваторы</b></Link>
                            <Link to='/user/2' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Бульдозеры</b></Link>
                            <Link to='/user/7' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Фронтальные погрузчики</b></Link>
                            <Link to='/user/6' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Дорожные катки</b></Link>
                        </ul>
                        <ul className='flex flex-col text-start w-[25%] tablet1:w-[100%] tablet1:mt-[30px]'>
                            <b className='opacity-[0.5]'>КЛИЕНТАМ</b>
                            <Link to='/Доставка' className='hover:text-[#FCB027] py-[10px]'><b>Доставка</b></Link>
                            <Link to='/Лизинг' className='hover:text-[#FCB027] py-[10px]'><b>Лизинг спецтехники</b></Link>
                            <Link to='/Услуги' className='hover:text-[#FCB027] py-[10px]'><b>Ремонт и обслуживание</b></Link>
                        </ul>

                        <div className='text-end w-[25%] tablet1:w-[100%] tablet1:text-start tablet1:mt-[30px]'>
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
                            <Box style={{}} sx={style}>
                                <div className='tablet1:w-[100%]'>
                                    <div className='pb-[30px] px-[10px]'>
                                        <div className='text-end'>
                                            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer', fontSize: '35px', marginBottom: '15px' }} />
                                        </div>
                                        <div className='bg-[#FFF] text-center'>
                                            <h1 className='text-[36px] font-[700] tablet1:text-[25px]'>Подать заявку на лизинг</h1>
                                            <div className='w-[100%] pt-[30px]'>
                                                <TextField label='Введите имя' color="warning" fullWidth />
                                                <div className='py-[30px] flex justify-between tablet1:flex-col'>
                                                    <TextField label='Введите телефон' color="warning" className='w-[48%] tablet1:w-[100%]' />
                                                    <h1 className='h-[3vh] hidden tablet1:block'></h1>
                                                    <TextField type='email' label='Введите почту' color="warning" className='w-[48%] tablet1:w-[100%]' />
                                                </div>
                                                <TextareaAutosize placeholder='Введите комментарий' style={{ width: '100%', height: '8vh', border: '1px solid lightgrey', borderRadius: '5px', fontSize: '16px', padding: '12px 0 0 10px' }} />
                                                <Button onClick={handleClose} fullWidth color="warning" variant='contained' style={{ padding: '10px 0', marginTop: '30px' }}>Отправить</Button>
                                            </div>
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