import { Container } from '@mui/system';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import user1Img1 from '../img/user1-img1.jpg'
import img2 from '../img/user1-img2.jpg'
import img3 from '../img/user1-img3.jpg'
import img4 from '../img/user1-img4.jpg'
import img5 from '../img/user1-img5.jpg'
import img6 from '../img/user1-img6.jpg'
import img7 from '../img/user1-img7.jpg'
import User7 from '../User7/User7'
import User2 from '../User2/User2'
import User3 from '../User3/User3'
import User4 from '../User4/User4'
import User5 from '../User5/User5'
import User6 from '../User6/User6'
import Erorr from '../Erorr/Erorr'

function User(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let { id } = useParams();
    console.log(id)
    return (
        <>
            {id == 1 ?
                <div className='bg-[#f4f4f4]'>

                    <Container>
                        <div className='flex justify-between py-[50px]'>
                            <div className='w-[25%] bg-[#FFF] mt-[70px] h-[42vh] sticky top-[70px]'>
                                <Link to='/user/1'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Автогрейдеры</b> <p className='opacity-[0.6]'>6</p></p></Link>
                                <Link to='/user/2'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Бульдозеры</b> <p className='opacity-[0.6]'>78</p></p></Link>
                                <Link to='/user/3'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Экскаваторы</b> <p className='opacity-[0.6]'>13</p></p></Link>
                                <Link to='/user/4'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Компакторы</b> <p className='opacity-[0.6]'>3</p></p></Link>
                                <Link to='/user/5'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Трубоукладчики</b> <p className='opacity-[0.6]'>4</p></p></Link>
                                <Link to='/user/6'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Дорожные катки</b> <p className='opacity-[0.6]'>45</p></p></Link>
                                <Link to='/user/7'><p className='hover:bg-[#f4f4f4] m-[5px] p-[5px] flex justify-between'><b>Фронтальные погрузчики</b> <p className='opacity-[0.6]'>28</p></p></Link>
                            </div>
                            <div className='w-[73%]'>
                                <div id='search' className='bg-[#FFF] w-[25%] h-[7vh] ml-[75%]'>
                                    <input type="text" placeholder='Поиск' className='p-[10px] w-[80%]' />
                                    <SearchIcon style={{ fontSize: '30px', padding: '0 7px', width: '20%', opacity: '0.6' }} />
                                </div>

                                <div className='flex bg-[#FFF] p-[25px] justify-between mt-[23px]'>
                                    <div className='w-[58%] pt-[17px]'>
                                        <p className='text-start text-[15px]'>Автогрейдеры Shantui оснащены жесткими отвалами для выполнения работ по выравниванию грунта в узких местах. Эти отвалы оснащены плавающими механизмами для плавного выравнивания грунта и идеально подходят для уборки снега с дорог. Благодаря прочной конструкции и мощным двигателям, эти машины хорошо показывают себя при длительной эксплуатации.</p>
                                    </div>
                                    <div className='w-[40%] min-h-[90%]'>
                                        <img className='w-[100%]' src={user1Img1} alt="" />
                                    </div>
                                </div>

                                <div className='flex flex-wrap justify-between'>
                                    <div className='w-[32%] bg-[#FFF] mt-[20px]'>
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
                                    </div>

                                    <div className='w-[32%] bg-[#FFF] mt-[20px]'>
                                        <img className='p-[10px] w-[100%] h-[25vh]' src={img7} alt="" />
                                        <div className='p-[15px]'>
                                            <h1 className='hover:text-[#FCB027] opacity-[0.8] font-[600] text-start py-[10px] text-[20px]'>Автогрейдер SHANTUI SG16-3</h1>
                                            <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                                <p className='w-[45%] opacity-[0.7] text-start'>Рабочий вес</p>
                                                <p className='w-[50%] text-end'>15100 кг</p>
                                            </div>
                                            <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                                <p className='w-[45%] opacity-[0.7] text-start'>Производитель двигателя</p>
                                                <p className='w-[50%] text-end'>Cummins</p>
                                            </div>
                                            <div className='flex justify-between py-[5px] border-b border-solid text-[13px]'>
                                                <p className='w-[45%] opacity-[0.7] text-start'>Мощность</p>
                                                <p className='w-[50%] text-end'>118 кВт</p>
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

                                </div>
                            </div>
                        </div>
                    </Container>
                </div> : id == 2 ? <User2 /> : id == 3 ? <User3 /> : id == 4 ? <User4 /> : id == 5 ? <User5 />
                    : id == 6 ? <User6 /> : id == 7 ? <User7 /> : <Erorr />
            }
        </>

    )
}

export default User