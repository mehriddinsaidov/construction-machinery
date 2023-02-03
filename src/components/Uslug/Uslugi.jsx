import { Button, TextareaAutosize, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import uslugibg from '../img/uslugibg.jpg'
import uslugiimg1 from '../img/uslugiimg1.jpg'
import uslugiimg2 from '../img/uslugiimg2.jpg'
import uslugiimg3 from '../img/uslugiimg3.jpg'

function Uslugi() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='bg-[#f4f4f4]'>
            {/* <div className='bg-[rgba(0,0,0,0.6)]'>
                <img src={uslugibg} alt="" className='min-w-[100%] object-cover absolute h-[60vh]' />
            </div> */}

            <div style={{ backgroundImage: `url(${uslugibg})`}} className='bg-center bg-cover bg-no-repeat text-start text-[#FFF] w-[100%] h-[60vh] flex flex-col justify-center'>
                <Container>
                    <h1 className='w-[55%] text-[50px] font-[700] py-[20px]'>Ремонт и обслуживание экскаваторов</h1>
                </Container>
            </div>

            <Container>

                <div className='flex w-[100%] pt-[20vh] justify-between items-center tablet1:flex-wrap'>
                    <div className='w-[43%] text-center tablet1:w-[100%]'>
                        <p className='text-start text-[17px] py-[20px] tablet1:text-[15px]'>Любое оборудование и техника нуждаются в регулярном, профессиональном техническом и сервисном обслуживании. Особенно это актуально для спецтехники, обладающей сложной конструкцией, многочисленными углами и агрегатами. Эффективно справиться с поставленной задачей способны только подготовленные специалисты, наличие которых в организациях, эксплуатирующих технику, маловероятно. Оптимальным решением становится привлечение специализированных компаний, обладающих не только подготовленным штатом сотрудников, но и необходимым оборудованием, ориентированных на работу с конкретным видом или маркой техники/оборудования.</p>
                    </div>
                    <div className='w-[50%] tablet1:w-[100%] tablet1:mt-[20px]'>
                        <img className='w-[100%]' src={uslugiimg1} alt="" />
                    </div>
                </div>

                <div className='w-[65%] text-center pt-[20vh] tablet1:pt-[10vh] tablet1:w-[100%]'>
                    <p className='text-start text-[17px] tablet1:text-[15px]'>Наша компания сочетает в себе передовое оборудование и подготовленный персонал, регулярно обновляющий профессиональные знания по мере появления на рынке новых моделей спецтехники. Это позволяет выполнять все возможные виды ремонтных и сервисных работ с минимальными затратами времени и высочайшим качеством конечного результата.</p>
                    <p className='text-start text-[17px] pt-[20px] tablet1:text-[15px]'>Своим клиентам мы предлагаем:</p>
                    <ul className='list-disc text-start'>
                        <li className='pt-[20px]  tablet1:py-[10px] tablet1:text-[15px]'>комплексное техническое обслуживание строительной техники организаций;</li>
                        <li className='pt-[20px]  tablet1:py-[10px] tablet1:text-[15px]'>проведение гарантийного ремонта любой степени сложности;</li>
                        <li className='pt-[20px]  tablet1:py-[10px] tablet1:text-[15px]'>предпродажная подготовка спецтехники;</li>
                        <li className='pt-[20px]  tablet1:py-[10px] tablet1:text-[15px]'>оснащение машин дополнительным оборудованием для повышения их эффективности;</li>
                        <li className='pt-[20px]  tablet1:py-[10px] tablet1:text-[15px]'>проведение обучения персонала заказчика работе с техникой и ее обслуживанию;</li>
                        <li className='pt-[20px]  tablet1:py-[10px] tablet1:text-[15px]'>наличие выездных бригад, осуществляющих ремонтные работы и техобслуживание.</li>
                    </ul>
                </div>

                <div className='flex w-[100%] pt-[20vh] tablet1:pt-[10vh] justify-between items-center tablet1:flex-wrap'>
                    <div className='w-[43%] text-center tablet1:w-[100%]'>
                        <p className='text-start text-[17px] py-[20px] tablet1:text-[15px] tablet1:py-[10px]'>Многолетний опыт работы на рынке показывает, что выход техники из строя грозит значительными финансовыми затратами на ремонт и продолжительным периодом ее вывода из эксплуатации. В некоторых случаях это становится причиной остановки отдельных производственных линий или всей работы на участке. Для недопущения подобного развития ситуации требуется оперативное обслуживание и устранение выявленных неисправностей, пока они не трансформировались в серьезную поломку.</p>
                        <p className='text-start text-[17px] py-[20px] tablet1:text-[15px] tablet1:py-[10px]'>Оптимальным решением станет обращение к опытным специалистам, способным в кратчайшие сроки выполнить все необходимые работы на высоком профессиональном уровне.</p>
                    </div>
                    <div className='w-[50%] tablet1:w-[100%] tablet1:mt-[20px]'>
                        <img className='w-[100%]' src={uslugiimg2} alt="" />
                    </div>
                </div>

                <div className='w-[65%] text-center pt-[20vh] tablet1:pt-[10vh] tablet1:w-[100%]'>
                    <h1 className='text-start pb-[20px] text-[25px] font-[700]'>Наши преимущества</h1>
                    <p className='text-start text-[17px] tablet1:text-[15px]'>В условиях острой конкуренции на рынке наша компания строит свою работу с опорой на профессионализм сотрудников и современное техническое оснащение, что позволяет добиваться отличных результатов.</p>
                    <p className='text-start text-[17px] tablet1:text-[15px] pt-[20px]'>Среди преимуществ нашей компании:</p>
                    <ul className='list-disc text-start'>
                        <li className='pt-[20px] tablet1:text-[15px]'>подготовленный персонал, на регулярной основе проходящий переподготовку и повышение квалификации, владеющий навыками выполнения ремонтных работ любой степени сложности;</li>
                        <li className='pt-[20px] tablet1:text-[15px]'>ориентация на индивидуальный клиентский подход, позволяющий в каждом конкретном случае предоставить клиенту максимально возможный перечень необходимых ему услуг на выгодных условиях взаимодействия;</li>
                        <li className='pt-[20px] tablet1:text-[15px]'>привлекательные ценовые условия, намного ниже, чем предлагает большинство конкурентов. Формирование стоимости услуг проводится на принципах объективной оценки себестоимости выполняемых работ;</li>
                        <li className='pt-[20px] tablet1:text-[15px]'>наличие широкого спектра запчастей для экскаваторов и другой спецтехники, что позволяет значительно сократить сроки проведения ремонтных работ, простои техники и финансовые потери заказчика.</li>
                    </ul>
                    <p className='text-start text-[17px] tablet1:text-[15px] pt-[20px]'>В числе прочих услуг специалисты нашей компании осуществляют замену масел и других смазочных материалов, используемых в спецтехнике.</p>
                    <p className='text-start text-[17px] tablet1:text-[15px] py-[25px]'>Своим клиентам мы готовы предложить не только весь перечень основных запчастей в наличии и любых деталей под заказ, но и возможность приобретения разнообразного дополнительного оборудования, позволяющего расширить функциональные возможности техники, ее производительность и удобство эксплуатации. За счет этого появляется возможность не только поддерживать работоспособность техники, но и улучшить ее возможности.</p>
                    <h1 className='text-start pb-[25px] text-[20px] tablet1:text-[22px] font-[700]'>Запчасти и расходные материалы</h1>
                    <p className='text-start text-[17px] tablet1:text-[15px]'>Вся представленная в продаже продукция, включая расходные материалы, проходит обязательную процедуру сертификации. Каждый лот имеет собственный сертификат качество, подтверждающий его соответствие требованиям ГОСТ. Сертификация выступает гарантией того, что изделий полностью соответствует заявленным производителем техническим характеристикам и рабочим параметрам.</p>
                </div>

                <div className='flex w-[100%] pt-[20vh] tablet1:pt-[10vh] justify-between items-center tablet1:flex-col'>
                    <div className='w-[50%] tablet1:w-[100%]'>
                        <img className='w-[100%]' src={uslugiimg3} alt="" />
                    </div>
                    <div className='w-[43%] text-center tablet1:w-[100%] tablet1:mt-[30px]'>
                        <h1 className='text-start text-[36px] font-[700] tablet1:text-[25px]'>Техобслуживание техники Shantui</h1>
                        <p className='text-start text-[17px] py-[20px] tablet1:text-[15px]'>Техника Shantui на сегодняшний день зарекомендовала себя в качестве эффективной, надежной и неприхотливой в эксплуатации. При правильной организации ухода и обслуживание она способна длительное время работать без возникновения поломок, а хорошая ремонтопригодность позволяет оперативно вводить ее в строй при небольших финансовых затратах на выполняемые работы.</p>
                        <p className='text-start text-[17px] py-[20px] tablet1:text-[15px]'>Вместе с этим она обладает высокой производительностью, что положительно сказывается на итоговой результативности деятельности, прибыльности бизнеса. Сделав выбор в пользу бренда Shantui, вы совершаете правильный поступок.</p>
                    </div>
                </div>

                <div className='py-[70px]'>
                    <div className='bg-[#FFF] text-center py-[70px]'>
                        <h1 className='text-[36px] font-[700]'>Заказать техобслуживание</h1>
                        <div className='w-[50%] m-auto pt-[30px] tablet1:w-[80%]'>
                            <TextField label='Введите имя' color="warning" fullWidth />
                            <div className='py-[30px] flex justify-between tablet1:flex-col'>
                                <TextField label='Введите телефон' color="warning" className='w-[48%] tablet1:w-[100%]' />
                                <h1 className='h-[30px] hidden tablet1:block'></h1>
                                <TextField type='email' label='Введите почту' color="warning" className='w-[48%] tablet1:w-[100%]' />
                            </div>
                            <TextareaAutosize placeholder='Введите комментарий' style={{ width:'100%',height:'8vh',border:'1px solid lightgrey',borderRadius:'5px',fontSize:'16px',padding:'12px 0 0 10px'}} />
                            <Button fullWidth color="warning" variant='contained' style={{ padding: '10px 0', marginTop: '30px' }}>Отправить</Button>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Uslugi