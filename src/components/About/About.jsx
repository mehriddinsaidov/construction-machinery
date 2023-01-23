import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import about1 from '../img/about-img-1.jpg'
import about2 from '../img/about-img-2.png'
import about3 from '../img/about-img-3.jpg'
import bg1 from '../img/about-bg-1.jpg'

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='bg-[#f4f4f4]'>
            {/* <div className='bg-[rgba(0,0,0,0.6)]'>
                <img src={bg1} alt="" className='min-w-[100%] object-cover absolute h-[60vh]' />
            </div> */}

            <div style={{backgroundImage: `url(${bg1})`}} className='bg-[#f4f4f4] bg-cover text-start text-[#FFF] w-[100%] h-[60vh] flex flex-col justify-center'>
                <Container>
                <p className='text-start'><b>ПРОИЗВОДСТВО СТРОИТЕЛЬНОЙ ТЕХНИКИ С 1952 ГОДА</b></p>
                <h1 className='text-[50px] font-[700] py-[20px]'>О компании</h1>
                </Container>    
            </div>

            <Container>

                <div className='text-start w-[55%] py-[70px] text-[16px]'>
                    <p>В основе деятельности компании SHANTUI лежит ориентация на инновации и
                        прорывные технологические решений, обеспечивающие динамичный
                        социально-экономический рост при обеспечении безопасности экологии.</p>
                    <p className='py-[15px]'>История компании Shantui Construction Machinery началась в Китае в 1952-м
                        году. Первоначально она носила название Yantai Machinery Factory. В 1980-м
                        году было проведено еще одно переименование, на этот раз в Shandong
                        Bulldozer. Причиной этого стало объединение нескольких китайских
                        машиностроительных предприятия, занимающихся выпуском бульдозерной и иной
                        специальной техники для строительства.</p>
                    <p>На сегодняшний день данная компания, принадлежащая государству, ее ценные
                        бумаги размещены на китайских биржах. Место регистрации компании SHANTUI
                        город Цзинин, одной из наиболее экономически развитых провинций Шаньдун.
                        Территория производственных мощностей превышает 180 гектаров.</p>
                </div>

                <div className='flex w-[100%] justify-between items-center'>
                    <div className='w-[43%] text-center'>
                        <h1 className='text-start text-[36px] font-[700]'>Полное покрытие потребностей строительного сектора</h1>
                        <p className='text-start text-[17px] py-[20px]'>На сегодня под брендом SHANTUI выпускается широкий спектр дорожно-строительной техники, включая бульдозеры, экскаваторы различной производительности, погрузчики, асфальтоукладочные и иные специализированные машины. Кроме того, компания занимается производством широкого спектра запасных частей и дополнительного оборудования к своей технике, позволяющего расширить функциональные возможности и повысить эффективность работы техники.</p>
                        <p className='text-start text-[17px] py-[20px]'>О масштабах производственной деятельности говорит тот факт, что ежегодно компания производит и продает более 10 тысяч бульдозеров, 6 тысяч различных дорожных машин, более 500 бетоносмесительных установок. Объемы элементов гусеничного хода, колес, гидротрансформаторов и других элементов суммарно исчисляется несколькими сотнями тысяч экземпляров, а продукцию SHANTUI сегодня можно встретить на всех без исключения континентах в разных странах мира.</p>
                    </div>
                    <div className='w-[50%]'>
                        <img className='w-[100%]' src={about1} alt="" />
                    </div>
                </div>

                <div className='text-start w-[55%] py-[70px] text-[15px]'>
                    <p>Достаточно сказать, что SHANTUI стабильно входит в ТОП-50 мировых производителей специализированной строительной техники, а в сегменте бульдозеров начиная с 2005-го года, неизменно оказывается мировым лидером по объему произведенной продукции. Авторитет бренда в своем сегменте делает его технику востребованной не только на внутреннем рынке или в странах с развивающейся экономикой, но и в ведущих государствах мира.</p>
                    <p className='py-[15px]'>С учетом огромных масштабов производства, компанией выстроены отлаженные цепочки сбыта готовой продукции. На сегодня приобрести спецтехнику SHANTUI можно в 160 странах мира, причем в каждой из них китайский производитель имеет не только официальные точки продаж, но и центры проведения сервисного послепродажного и гарантийного обслуживания. Только на внутреннем китайском рынке имеется 27 монобрендовых магазинов компании SHANTIU, более полусотни агентств и свыше 320 точек продаж.</p>
                    <p>В каждом случае компания готова предложить своим клиентам не только возможность приобретения всего спектра существующей техники SHANTUI, но и полноценное сервисное обслуживание, без которого эксплуатация сложной техники оказывается невозможна. Работа таких центров строится на основе строгих корпоративных стандартов вне зависимости от фактической страны присутствия.</p>
                </div>

                <div className='flex w-[100%] justify-between'>
                    <div className='w-[43%] text-center'>
                        <h1 className='text-start text-[36px] font-[700]'>Сервисные центры по всему миру</h1>
                        <p className='text-start text-[17px]'>Для работы на зарубежных рынках компания построила крупную сеть
                            на основе договоров с дилерскими компаниями, количество которых превышает
                            сотню. Кроме того, китайский бренд обладает и собственными филиалами,
                            расположенными на ключевых для компании рынках. Имеется филиал SHANTUI
                            и на территории России, рассматриваемой в качестве одного из наиболее
                            важных рынков сбыта китайской спецтехники.</p>
                    </div>
                    <div className='w-[50%]'>
                        <img className='w-[100%]' src={about2} alt="" />
                    </div>
                </div>

                <div className='text-start w-[55%] py-[70px] text-[16px]'>
                    <p>В контексте обслуживания техники компания SHANTUI строит собственный
                        бизнес на предоставлении клиентам максимально персонифицированных
                        услуг с высоким качеством обслуживания. Предлагаемые клиентам решения
                        в области строительства носят интегрированный характер, и позволяют
                        с высокой эффективностью решать поставленные задачи, опираясь на
                        новейшие разработки и инновационный потенциал бренда.</p>
                    <p className='py-[15px]'>Такой подход обеспечивает компании высокий
                        уровень лояльности со стороны покупателей, большую долю постоянных
                        клиентов и рост ценности бренда в глазах потребителей. Как результат,
                        положительный имидж SHANTUI на рынке положительно сказывается на
                        объемах продаж и финансовых показателях производителя.</p>
                    <p>Обновление корпоративной стратегии развития компании привело к ее
                        переориентации на достижение принципов устойчивого
                        социально-экономического развития, сокращения негативного
                        воздействия на окружающую среду, как в процессе производства,
                        так и последующей эксплуатации спецтехники покупателями. Основное
                        внимание в рамках корпоративной научно-исследовательской деятельности
                        уделяется развитию интеллектуальных систем, средств дистанционного
                        управления, высокопроизводительной техники и так далее. Одновременно
                        ведется работа по совершенствованию маркетинговой деятельности,
                        корпоративного менеджмента.</p>
                </div>

                <div className='flex justify-between'>
                    <div className='w-[43%] text-start'>
                        <h1 className='text-start text-[36px] font-[700]'>В ногу со временем</h1>
                        <p className='text-[17px] py-[20px]'>Результаты такого подхода дают о себе знать. Например, еще в 2019-м
                            году компания SHANTUI представила мощный бульдозер с дистанционным
                            управлением, поддерживающий передовой формат 5G-связи, только сейчас
                            внедряемый в ведущих странах мира. В настоящее время машина успешно
                            поставлена заказчику и используется им по прямому назначению.</p>
                        <p className='text-[17px]'>Одновременно компания ведет работу по внедрению
                            инновационных систем управления и контроля в уже существующие модели
                            бульдозерной техники с целью повышения их производительности,
                            снижения эксплуатационных трат, повышения надежности.</p>
                    </div>
                    <div className='w-[50%]'>
                        <img className='w-[100%]' src={about3} alt="" />
                    </div>
                </div>

                <div className='text-start w-[55%] py-[90px] text-[16px]'>
                    <p>Использование технологий 5G-связи характерно и для производственной
                        площадки бренда, предлагающей интеллектуальные сборочные линии.
                        Они отличаются не только высокой производительностью, но и высокой
                        точностью результатов работы, практически полным отсутствием браков.</p>
                    <p className='py-[15px]'>Руководство компании SHANTUI в настоящий момент работает над реализацией
                        амбициозного проекта превращения бренда в премиальный продукт на мировом
                        рынке, не только в сегменте бульдозеров, но и другой специализированной
                        техники для выполнения строительных, дорожных и грузоподъемных работ.
                        Ориентация на внедрение интеллектуальных решений, повышенная
                        энергоэффективность, надежность и безопасность работы, должны стать
                        основными трендами дальнейшего развития SHANTUI и продвижения продукции
                        бренда в различных странах мира.</p>
                </div>
            </Container>
        </div>
    )
}

export default About