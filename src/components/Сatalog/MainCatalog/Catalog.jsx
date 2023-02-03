import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import img1 from '../image/arr-img-1.jpg'
import img2 from '../image/arr-img-2.jpg'
import img3 from '../image/arr-img-3.png'
import img4 from '../image/arr-img-4.jpg'
import img5 from '../image/user5-img1.jpg'
import img6 from '../image/user6-img1.jpg'
import img7 from '../image/user7-img1.jpg'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import "./Catalog.css"

function Catalog() {
    let arr = [
        {
            name: "Автогрейдеры",
            info: "Мощность 112~176 кВт | 11.6~18.5 тонн",
            img: img1,
            link: '/user/1',
        },
        {
            name: "Бульдозеры",
            info: "Объём отвала 1,24~28 м³ | 7.9~106 тонн",
            img: img2,
            link: '/user/2',
        },
        {
            name: "Экскаваторы",
            info: "Ковш 0.22~2.2 м³ | 5.9~46.8 тонн",
            img: img3,
            link: '/user/3',
        },
        {
            name: "Компакторы",
            info: "Объём 9~12 м³ | 23~28 тонн",
            img: img4,
            link: '/user/4',
        },
        {
            name: "Компакторы",
            info: "Объём 9~12 м³ | 23~28 тонн",
            img: img5,
            link: '/user/5',
        },
        {
            name: "Компакторы",
            info: "Объём 9~12 м³ | 23~28 тонн",
            img: img6,
            link: '/user/6',
        },
        {
            name: "Компакторы",
            info: "Объём 9~12 м³ | 23~28 тонн",
            img: img7,
            link: '/user/7',
        },
    ]
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='bg-[#f4f4f4]'>
            <Container>
                <div className='flex justify-between py-[30px] tablet1:w-[100%]'>
                    <div className='w-[15%] tablet1:w-[35%] flex justify-between items-center'>
                        <h1 className='text-[35px] font-[700] tablet1:text-[25px]'>Каталог</h1>
                        <p className='text-[25px] opacity-[0.5] font-[700] tablet1:text-[20px]'>{arr.length}</p>
                    </div>
                    <div id='search' className='bg-[#FFF] w-[20%] h-[7vh] tablet1:w-[40%] tablet1:h-[5.5vh]'>
                        <input type="text" placeholder='Поиск' className='p-[10px] w-[80%]' />
                        <SearchIcon style={{ fontSize: '30px', padding: '0 7px', width: '20%', opacity: '0.6' }} />
                    </div>
                </div>
                <div className='flex w-[100%] justify-between mb-[20px]'>
                    <div className='w-[25%] bg-[#FFF] mb-[65px] py-[10px] h-[52vh] sticky top-[70px] tablet1:hidden'>
                        <Link to='/user/1'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Автогрейдеры</b> <p className='opacity-[0.6]'>6</p></p></Link>
                        <Link to='/user/2'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Бульдозеры</b> <p className='opacity-[0.6]'>78</p></p></Link>
                        <Link to='/user/3'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Экскаваторы</b> <p className='opacity-[0.6]'>13</p></p></Link>
                        <Link to='/user/4'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Компакторы</b> <p className='opacity-[0.6]'>3</p></p></Link>
                        <Link to='/user/5'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Трубоукладчики</b> <p className='opacity-[0.6]'>4</p></p></Link>
                        <Link to='/user/6'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Дорожные катки</b> <p className='opacity-[0.6]'>45</p></p></Link>
                        <Link to='/user/7'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Фронтальные погрузчики</b> <p className='opacity-[0.6]'>28</p></p></Link>
                    </div>

                    <div className='w-[73%] flex justify-between pb-[50px] flex-wrap tablet1:w-[100%]'>
                        {arr.map((elem) => {
                            return (
                                <div id="div" className='mb-[20px] w-[32%] tablet1:w-[100%] flex flex-col justify-between bg-[#FFF]'>
                                    <Link to={elem.link}>
                                        <div className='py-[20px]'>
                                            <h1 id="h1" className='text-[20px] font-[400]'>{elem.name}</h1>
                                            <p className='p-[10px] text-[15px] font-[600] tracking-[0.3px] opacity-[0.7]'>{elem.info}</p>
                                        </div>
                                        <img src={elem.img} alt="" className='w-[100%]' />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Catalog