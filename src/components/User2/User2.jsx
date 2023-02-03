import { Container } from '@mui/system';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import user1Img1 from '../img/user2-img1.jpg'
import img2 from '../img/user2/img1.jpeg'
import img3 from '../img/user2/img2.jpg'
import img4 from '../img/user2/img3.jpg'
import img5 from '../img/user2/img4.jpg'
import img6 from '../img/user2/img5.jpg'
import img7 from '../img/user2/img6.jpg'
import { Button } from '@mui/material';


function User2() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let arr = [
        {
            img: img2,
            name: 'Бульдозер SHANTUI SD32W',
            weight: '40900 кг',
            engine: 'Cummins',
            power: '235 кВт',
            cutting: ' ',
            loosening: ' ',
            dump: 'Породный прямой отвал, породный угловой отвал, породный полусферический отвал',
            volume: ' ',
        },
        {
            img: img3,
            name: 'Бульдозер SHANTUI DH13C2 LGP',
            weight: '14000 кг',
            engine: 'Cummins',
            power: '103 кВт',
            cutting: '460 мм',
            loosening: '500 мм',
            dump: 'Угловой',
            volume: '3.39 м3',
        },
        {
            img: img4,
            name: 'Бульдозер SHANTUI SD26F',
            weight: '24700 кг',
            engine: 'Weichai',
            power: '194 кВт',
            cutting: '540 мм',
            loosening: '666 мм',
            dump: 'Прямой отвал',
            volume: '6.4 м3',
        },
        {
            img: img5,
            name: 'Бульдозер-планировщик SHANTUI STR13',
            weight: '14500 кг',
            engine: 'Shanghai',
            power: '105 кВт',
            cutting: '710 мм',
            loosening: ' ',
            dump: 'Планировочный отвал',
            volume: '1.86 м3',
        },
        {
            img: img6,
            name: 'Бульдозер SHANTUI DH13K XL',
            weight: '14200 кг',
            engine: 'Fiat',
            power: '115 кВт',
            cutting: '460 мм',
            loosening: '500 мм',
            dump: 'Угловой',
            volume: '3 м3',
        },
        {
            img: img7,
            name: 'Бульдозер SHANTUI SD32D',
            weight: '39500 кг',
            engine: 'Cummins',
            power: '235 кВт',
            cutting: ' ',
            loosening: ' ',
            dump: 'Прямой отвал, угловой отвал и полусферический отвал',
            volume: ' ',
        },
        {
            img: img7,
            name: 'Бульдозер SHANTUI SD32D',
            weight: '39500 кг',
            engine: 'Cummins',
            power: '235 кВт',
            cutting: ' ',
            loosening: ' ',
            dump: 'Прямой отвал, угловой отвал и полусферический отвал',
            volume: ' ',
        },
    ]

    return (
        <div className='bg-[#f4f4f4]'>
            <Container>
                <div className='py-[40px] w-[100%] flex justify-between items-center'>
                    <div className='w-[23%] flex items-center justify-between tablet1:w-[44%]'>
                        <h1 className='text-[40px] font-[600] text-start w-[94%] tablet1:text-[25px]'>Бульдозеры </h1>
                        <p className='w-[5%] opacity-[0.6] text-[22px] pt-[7px] font-[600] tablet1:text-[18px]'>78</p>
                    </div>
                    <div id='search' className='bg-[#FFF] w-[25%] h-[7vh] tablet1:w-[40%] tablet1:h-[5.6vh]'>
                        <input type="text" placeholder='Поиск' className='p-[10px] w-[80%]' />
                        <SearchIcon style={{ fontSize: '30px', padding: '0 7px', width: '20%', opacity: '0.6' }} />
                    </div>
                </div>
                <div className='flex justify-between pb-[50px]'>
                    <div className='w-[25%] bg-[#FFF] py-[10px] h-[52vh] sticky top-[70px] tablet1:hidden'>
                        <Link to='/user/1'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Автогрейдеры</b> <p className='opacity-[0.6]'>6</p></p></Link>
                        <Link to='/user/2'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Бульдозеры</b> <p className='opacity-[0.6]'>78</p></p></Link>
                        <Link to='/user/3'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Экскаваторы</b> <p className='opacity-[0.6]'>13</p></p></Link>
                        <Link to='/user/4'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Компакторы</b> <p className='opacity-[0.6]'>3</p></p></Link>
                        <Link to='/user/5'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Трубоукладчики</b> <p className='opacity-[0.6]'>4</p></p></Link>
                        <Link to='/user/6'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Дорожные катки</b> <p className='opacity-[0.6]'>45</p></p></Link>
                        <Link to='/user/7'><p className='hover:bg-[#f4f4f4] opacity-[0.8] m-[5px] px-[10px] py-[7px] flex justify-between'><b className='text-[18px]'>Фронтальные погрузчики</b> <p className='opacity-[0.6]'>28</p></p></Link>
                    </div>

                    <div className='w-[73%] tablet1:w-[100%]'>
                        <div className='flex bg-[#FFF] p-[25px] justify-between tablet1:flex-wrap'>
                            <div className='w-[58%] pt-[17px] tablet1:w-[100%]'>
                                <p className='text-start text-[15px]'>В зависимости от модели бульдозеры Shantui могут быть оснащены любым из следующих вспомогательных устройств. Такие, как прямой отвал, угловой отвал, U-образный отвал, санитарный отвал, кабина с кондиционером, кабина с антипробуксовочной системой, простая кабина, рыхлитель с тремя зубьями, рыхлитель с одним зубом, лебедка и скрепер. Бульдозеры Shantui в основном используются для работы в таких условиях, как аэропорт, дорога, шахта, плотина, железная дорога и т.д.</p>
                            </div>
                            <div className='w-[40%] min-h-[90%] tablet1:w-[100%] tablet1:mt-[15px]'>
                                <img className='w-[100%]' src={user1Img1} alt="" />
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-between'>
                            {/* <div className='w-[32%] bg-[#FFF] mt-[20px]'>
                                <img className='p-[10px] w-[100%] h-[25vh]' src={img2} alt="" />
                                <div className='p-[15px]'>
                                    <h1 className='hover:text-[#FCB027] opacity-[0.8] font-[600] text-start py-[10px] text-[20px]'>Автогрейдер SHANTUI SG21А-3 (полный привод)</h1>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Рабочий вес</p>
                                        <p className='w-[50%] text-end'>17100 кг</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Производитель двигателя</p>
                                        <p className='w-[50%] text-end'>Cummins</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Мощность</p>
                                        <p className='w-[50%] text-end'>160 кВт</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Тип отвала</p>
                                        <p className='w-[50%] text-end'>гидравлический привод с заменяемой режущей кромкой</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Максимальная глубина резания</p>
                                        <p className='w-[50%] text-end'>500 мм</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[32%] bg-[#FFF] mt-[20px]'>
                                <img className='p-[10px] w-[100%] h-[25vh]' src={img3} alt="" />
                                <div className='p-[15px]'>
                                    <h1 className='hover:text-[#FCB027] opacity-[0.8] font-[600] text-start py-[10px] text-[20px]'>Автогрейдер SHANTUI SG14</h1>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Рабочий вес</p>
                                        <p className='w-[50%] text-end'>11600 кг</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Производитель двигателя</p>
                                        <p className='w-[50%] text-end'>Cummins</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Мощность</p>
                                        <p className='w-[50%] text-end'>112 кВт</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Тип отвала</p>
                                        <p className='w-[50%] text-end'>гидравлический привод с заменяемой режущей кромкой</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Максимальная глубина резания</p>
                                        <p className='w-[50%] text-end'>500 мм</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[32%] bg-[#FFF] mt-[20px]'>
                                <img className='p-[10px] w-[100%] h-[25vh]' src={img4} alt="" />
                                <div className='p-[15px]'>
                                    <h1 className='hover:text-[#FCB027] opacity-[0.8] font-[600] text-start py-[10px] text-[20px]'>Автогрейдер SHANTUI SG24-С5</h1>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Рабочий вес</p>
                                        <p className='w-[50%] text-end'>18500 кг</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Производитель двигателя</p>
                                        <p className='w-[50%] text-end'>Weichai</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Мощность</p>
                                        <p className='w-[50%] text-end'>176 кВт</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Тип отвала</p>
                                        <p className='w-[50%] text-end'>гидравлический привод с заменяемой режущей кромкой</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Максимальная глубина резания</p>
                                        <p className='w-[50%] text-end'>500 мм</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[32%] bg-[#FFF] mt-[20px]'>
                                <img className='p-[10px] w-[100%] h-[25vh]' src={img5} alt="" />
                                <div className='p-[15px]'>
                                    <h1 className='hover:text-[#FCB027] opacity-[0.8] font-[600] text-start py-[10px] text-[20px]'>Автогрейдер SHANTUI SG21-3</h1>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Рабочий вес</p>
                                        <p className='w-[50%] text-end'>16800 кг</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Производитель двигателя</p>
                                        <p className='w-[50%] text-end'>Cummins</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Мощность</p>
                                        <p className='w-[50%] text-end'>160 кВт</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Тип отвала</p>
                                        <p className='w-[50%] text-end'>гидравлический привод с заменяемой режущей кромкой</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Максимальная глубина резания</p>
                                        <p className='w-[50%] text-end'>500 мм</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[32%] bg-[#FFF] mt-[20px]'>
                                <img className='p-[10px] w-[100%] h-[25vh]' src={img6} alt="" />
                                <div className='p-[15px]'>
                                    <h1 className='hover:text-[#FCB027] opacity-[0.8] font-[600] text-start py-[10px] text-[20px]'>Автогрейдер SHANTUI SG18-3</h1>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Рабочий вес</p>
                                        <p className='w-[50%] text-end'>16200 кг</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Производитель двигателя</p>
                                        <p className='w-[50%] text-end'>Cummins</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Мощность</p>
                                        <p className='w-[50%] text-end'>132 кВт</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Тип отвала</p>
                                        <p className='w-[50%] text-end'>гидравлический привод с заменяемой режущей кромкой</p>
                                    </div>
                                    <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                        <p className='w-[45%] opacity-[0.7] text-start'>Максимальная глубина резания</p>
                                        <p className='w-[50%] text-end'>500 мм</p>
                                    </div>
                                </div>
                            </div>*/}

                            {arr.map((elem) => {
                                return (
                                    <div className='w-[32%] bg-[#FFF] mt-[20px] tablet1:w-[100%]'>
                                        <img className='p-[10px] w-[100%] h-[25vh]' src={elem.img} alt="" />
                                        <div className='p-[15px]'>
                                            <h1 className='hover:text-[#FCB027] opacity-[0.8] font-[600] text-start py-[10px] text-[20px]'>{elem.name}</h1>
                                            <div className={`${elem.weight == " " ? 'hidden' : 'block'} flex justify-between py-[5px] border-b border-solid text-[13px]`}>
                                                <p className='w-[45%] opacity-[0.7] text-start'>Рабочий вес</p>
                                                <p className='w-[50%] text-end'>{elem.weight}</p>
                                            </div>
                                            <div className={`${elem.engine == " " ? 'hidden' : 'block'} flex justify-between py-[5px] border-b border-solid text-[13px]`}>
                                                <p className='w-[45%] opacity-[0.7] text-start'>Производитель двигателя</p>
                                                <p className='w-[50%] text-end'>{elem.engine}</p>
                                            </div>
                                            <div className={`${elem.power == " " ? 'hidden' : 'block'} flex justify-between py-[5px] border-b border-solid text-[13px]`}>
                                                <p className='w-[45%] opacity-[0.7] text-start'>Мощность</p>
                                                <p className='w-[50%] text-end'>{elem.power}</p>
                                            </div>
                                            <div className={`${elem.cutting == " " ? 'hidden' : 'block'} flex justify-between py-[5px] border-b border-solid text-[13px]`}>
                                                <p className='w-[45%] opacity-[0.7] text-start'>Глубина резания</p>
                                                <p className='w-[50%] text-end'>{elem.cutting}</p>
                                            </div>
                                            <div className={`${elem.loosening == " " ? 'hidden' : 'block'} flex justify-between py-[5px] border-b border-solid text-[13px]`}>
                                                <p className='w-[47%] opacity-[0.7] text-start'>Глубина рыхления</p>
                                                <p className='w-[50%] text-end'>{elem.loosening}</p>
                                            </div>
                                            <div className={`${elem.dump == " " ? 'hidden' : 'block'} flex justify-between py-[5px] border-b border-solid text-[13px]`}>
                                                <p className='w-[45%] opacity-[0.7] text-start'>Тип отвала</p>
                                                <p className='w-[50%] text-end'>{elem.dump}</p>
                                            </div>
                                            <div className={`${elem.volume == " " ? 'hidden' : 'block'} flex justify-between py-[5px] border-b border-solid text-[13px]`}>
                                                <p className='w-[45%] opacity-[0.7] text-start'>Максимальная глубина резания</p>
                                                <p className='w-[50%] text-end'>{elem.volume}</p>
                                            </div>
                                            <h1 className='pt-[30px] pb-[10px] text-start opacity-[0.7]'><b>Цена по запросу</b></h1>
                                            <Button style={{ width: '100%', color: '#fcb027', border: '1px solid grey', fontWeight: '700', fontSize: '11px', padding: '7px 0' }}><b>Заказать</b></Button>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default User2