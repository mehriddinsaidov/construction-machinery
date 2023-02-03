import React, { useEffect } from 'react'
import buldozer from '../img/buldozer.png'
import { Container } from '@mui/system'
import img1 from '../img/arr-img-1.jpg'
import img2 from '../img/arr-img-2.jpg'
import img3 from '../img/arr-img-3.png'
import img4 from '../img/arr-img-4.jpg'
import img5 from '../img/user5-img1.jpg'
import img6 from '../img/user6-img1.jpg'
import img7 from '../img/user7-img1.jpg'
import { Button } from '@mui/material'
import './Home.css'
import { Link } from 'react-router-dom'
import video from '../img/video.mp4'

function Home() {
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
            <video autoPlay muted loop className='min-w-[100%] table1:min-w-[100%] object-cover absolute h-[70vh]' >
                <source src={video} type="video/mp4" />
            </video>

            <div className='h-[70vh] bg-[rgba(0,0,0,0.6)] absolute w-[100%]'>

            </div>
            <Container>
                <div className='mt-[10vh] text-[#FFF] w-[50%] tablet1:w-[90%] h-[40vh] absolute text-start flex flex-col justify-evenly'>
                    <p className='tablet1:text-[14px] text-start'><b>ПРОИЗВОДСТВО ТЯЖЕЛОЙ ТЕХНИКИ С 1952 ГОДА</b></p>
                    <h1 className='text-[50px] tablet1:text-[30px] font-[700] py-[20px]'>Сделаем строительство проще</h1>
                    <Link to='/Catalog' ><Button variant='contained' color="warning" style={{ width: '30%', padding: '15px 0' }}>Смотреть каталог</Button></Link>
                </div>

                <div className='h-[70vh]'>

                </div>

                <div className='w-[100%] flex justify-between py-[10vh] flex-wrap'>
                    <div className='w-[41%] tablet1:w-[100%] text-start flex flex-col mt-[20px]'>
                        <p><b>VALUE THAT WORKS</b></p>
                        <h1 className='text-[40px] font-[700] py-[30px]'>Shantui Construction Machinery Co., Ltd</h1>
                        <p>Компания выпускает широкий спектр дорожно-строительной техники, включая бульдозеры,
                            экскаваторы различной производительности, погрузчики, асфальтоукладочные и иные
                            специализированные машины.</p>
                        <p>Инновационный подход и прорывные технологии обеспечивают динамичный социально-экономический
                            рост при обеспечении безопасности и экологичности</p>
                    </div>
                    <div className='w-[48%] tablet1:w-[100%] tablet1:mt-[30px]'>
                        <img src={buldozer} alt="" />
                    </div>

                </div>

                <div>
                    <h1 className='text-start text-[36px] font-[700]'>Строительная техника SHANTUI</h1>
                    <div className='flex justify-between pb-[70px] flex-wrap'>
                        {arr.map((elem) => {
                            return (
                                <div id="div" className='w-[24%] tablet1:w-[100%] flex flex-col my-[20px] justify-between bg-[#FFF]'>
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

export default Home