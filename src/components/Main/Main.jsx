import { Container } from '@mui/system'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, Outlet } from 'react-router-dom';
import logo from '../img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Main() {
    return (
        <div>
            <div className='bg-[#dfdfdf]'>
                <Container>
                    <div className='flex'>
                        <ul className='flex items-center w-[25%] justify-between text-[13px]'>
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
                            <ul className='flex justify-around w-[75%] ml-[20px]'>
                                <Link className='border border-solid py-[2px] px-[10px]'>
                                    <b><MenuIcon /> Каталог</b></Link>
                                    <div className='hidden bg-[#FFF] absolute top-[13.3vh] left-[23%] w-[20%]'>
                                        <Link to=''><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Автогрейдеры</b> <p className='opacity-[0.6]'>6</p></p></Link>
                                        <Link to=''><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Бульдозеры</b> <p className='opacity-[0.6]'>78</p></p></Link>
                                        <Link to=''><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Экскаваторы</b> <p className='opacity-[0.6]'>13</p></p></Link>
                                        <Link to=''><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Компакторы</b> <p className='opacity-[0.6]'>3</p></p></Link>
                                        <Link to=''><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Трубоукладчики</b> <p className='opacity-[0.6]'>4</p></p></Link>
                                        <Link to=''><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Дорожные катки</b> <p className='opacity-[0.6]'>45</p></p></Link>
                                        <Link to=''><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Фронтальные погрузчики</b> <p className='opacity-[0.6]'>28</p></p></Link>
                                    </div>
                                <Link to='/about' className='hover:text-[#FCB027]'><b>О компании</b></Link>
                                <Link to='/Доставка' className='hover:text-[#FCB027]'><b>Доставка</b></Link>
                                <Link to='/Лизинг' className='hover:text-[#FCB027]'><b>Лизинг</b></Link>
                                <Link to='/Услуги' className='hover:text-[#FCB027]'><b>Услуги</b> <KeyboardArrowDownIcon /></Link>
                            </ul>
                        </div>
                        <div className='flex items-center w-[35%] justify-end'>
                            <Link to='/contacts' className='pr-[30px] hover:text-[#FCB027]'><b>Контакты</b></Link>
                            <SearchIcon className='hover:text-[#FCB027]' />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='relative hidden'>
                <Link className='bg-[red] p-[15px] absolute top-0 left-[50%]'><b>Ремонт и обслуживание</b></Link>
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
                            <Link to='/компании' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Экскаваторы</b></Link>
                            <Link to='/Доставка' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Бульдозеры</b></Link>
                            <Link to='/Лизинг' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Фронтальные погрузчики</b></Link>
                            <Link to='/Услуги' className='hover:text-[#FCB027] py-[10px] text-[15px]'><b>Дорожные катки</b></Link>
                        </ul>
                        <ul className='flex flex-col text-start w-[25%]'>
                            <b className='opacity-[0.5]'>КЛИЕНТАМ</b>
                            <Link to='/Доставка' className='hover:text-[#FCB027] py-[10px]'><b>Доставка</b></Link>
                            <Link to='/Лизинг' className='hover:text-[#FCB027] py-[10px]'><b>Лизинг спецтехники</b></Link>
                            <Link to='/Услуги' className='hover:text-[#FCB027] py-[10px]'><b>Ремонт и обслуживание</b></Link>
                        </ul>

                        <div className='text-end w-[25%]'>
                            <a href=""><li className='hover:text-[#FCB027] list-none text-[24px]'>
                                <b>8 499 430-01-64</b>
                            </li></a>
                            <a href=""><li className='hover:text-[#FCB027] opacity-[0.8] list-none text-[15px]'>
                                <b>info@shantui.com.ru</b>
                            </li></a>
                            <a href="" className='hover:text-[#FCB027] opacity-[0.8]'>
                                <FacebookIcon sx={{margin:'20px 0'}} />
                            </a>    <br />
                            <button style={{ backgroundColor: '#FCB027', padding: '10px 20px', fontSize: '15px', 
                            fontWeight: '600', color: '#FFF' }}>Задать вопрос</button>
                        </div>
                    </div>
                    <p class='text-start mt-[30px] mb-[30px] text-[14px] opacity-[0.8]'>2023 © Официальный дистрибьютор SHANTUI</p>
                </Container>
            </div>
        </div>
    )
}

export default Main