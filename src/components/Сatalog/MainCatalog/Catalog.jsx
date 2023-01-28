import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import img1 from '../image/arr-img-1.jpg'
import img2 from '../image/arr-img-2.jpg'
import img3 from '../image/arr-img-3.png'
import img4 from '../image/arr-img-4.jpg'
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
    ]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='bg-[#f4f4f4]'>
            <Container>
                <div className='flex justify-between py-[30px]'>
                    <div className='w-[15%] flex justify-between items-center'>
                        <h1 className='text-[35px] font-[700]'>Каталог</h1>
                        <p className='text-[25px] opacity-[0.5] font-[700]'>{arr.length}</p>
                    </div>
                    <div id='search' className='bg-[#FFF] w-[20%] h-[7vh]'>
                        <input type="text" placeholder='Поиск' className='p-[10px] w-[80%]' />
                        <SearchIcon style={{ fontSize: '30px', padding: '0 7px', width: '20%', opacity: '0.6' }} />
                    </div>
                </div>
                <div className='flex w-[100%] justify-between'>
                    <div className='bg-[#FFF] w-[24%] h-[45vh] mt-[20px] sticky top-[70px] mb-[40px]'>
                        <Link to='/user/1'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Автогрейдеры</b> <p className='opacity-[0.6]'>6</p></p></Link>
                        <Link to='/user/2'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Бульдозеры</b> <p className='opacity-[0.6]'>78</p></p></Link>
                        <Link to='/user/3'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Экскаваторы</b> <p className='opacity-[0.6]'>13</p></p></Link>
                        <Link to='/user/4'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Компакторы</b> <p className='opacity-[0.6]'>3</p></p></Link>
                        <Link to='/user/5'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Трубоукладчики</b> <p className='opacity-[0.6]'>4</p></p></Link>
                        <Link to='/user/6'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Дорожные катки</b> <p className='opacity-[0.6]'>45</p></p></Link>
                        <Link to='/user/7'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Фронтальные погрузчики</b> <p className='opacity-[0.6]'>28</p></p></Link>
                    </div>
                    <div className='w-[75%] flex justify-around mb-[70px] flex-wrap'>
                        {arr.map((elem) => {
                            return (
                                <div id="div" className='w-[29%] flex flex-col my-[20px] justify-between bg-[#FFF]'>
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