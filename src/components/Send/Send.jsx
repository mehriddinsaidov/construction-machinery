import { Button, TextareaAutosize, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import send1 from '../img/send-img-1.jpg'
import sendbg from '../img/sendbg.jpg'

function Send() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='bg-[#f4f4f4]'>

      {/* <div className='bg-[rgba(0,0,0,0.6)]'>
        <img src={sendbg} alt="" className='min-w-[100%] object-cover absolute h-[60vh]' />
      </div> */}

      <div style={{ backgroundImage: `url(${sendbg})`, backgroundPosition: 'center' }} className='bg-no-repeat bg-cover text-start text-[#FFF] w-[100%] h-[60vh] flex flex-col justify-center'>
        <Container>
          <p className='text-start'><b>ОТЛАЖЕННАЯ ЛОГИСТИКА ПО ВСЕЙ СТРАНЕ</b></p>
          <h1 className='text-[50px] font-[700] py-[20px]'>Доставка экскаваторов</h1>
        </Container>
      </div>

      <Container>



        <div className='pb-[70px]'>
          <div className='text-start w-[65%] py-[70px] text-[16px] tablet1:w-[100%]'>
            <p className='py-[15px] tablet1:text-[15px]'>Организация доставки приобретаемой заказчиками спецтехники непосредственно до места будущей эксплуатации осуществляется нашей компании с привлечением специализированных транспортных компаний.  Они обладают всем необходимым для перевозки крупногабаритной и тяжеловесной техники, включая бульдозеры и экскаваторы на гусеничном ходу, карьерную технику, буровые установки и другие машины, нуждающиеся в получении соответствующих разрешений на перевозку и обеспечении особых условий процесса.</p>
          </div>

          <div className='flex w-[100%] justify-between items-center tablet1:flex-wrap'>
            <div className='w-[43%] text-center tablet1:w-[100%]'>
              <h1 className='text-start text-[36px] font-[700] tablet1:text-[25px]'>Порядок перевозки экскаваторов</h1>
              <p className='text-start text-[17px] py-[20px] tablet1:text-[15px]'>Вся ввозимая на территорию России импортная спецтехника первоначально поступает на склад нашей компании в Москве. В случае значительного расстояния перевозки, организация доставки проводится с использованием возможностей железнодорожного транспорта. Техника доставляется до ближайшей крупной станции, где перегружается на автотехнику с низкорамными тралами. Подбор техники для транспортировки в каждом случае проводится индивидуально с учетом массогабаритных характеристик доставляемой заказчику техники. Одновременно подбирается оптимальный маршрут следования, отвечающий требованиям безопасной и сохранной перевозки.</p>
              <p className='text-start text-[17px] py-[20px] tablet1:text-[15px]'>Далее доставка следует непосредственно до точки, указанной покупателем, где проводится разгрузка и передача клиенту. В случае необходимости, если этого требуют нормы дорожного движения, выставляется машина сопровождения тягача на всем пути следования, оборудования спецсигналами.</p>
            </div>
            <div className='w-[50%] tablet1:w-[100%]'>
              <img className='w-[100%]' src={send1} alt="" />
            </div>
          </div>

          <div className='py-[70px] w-[65%] text-start tablet1:w-[100%]'>
            <h1 className='text-[20px] font-[700] tablet1:text-[25px]'>Безопасность перевозки</h1>
            <p className='pt-[20px] tablet1:text-[15px]'>С учетом размеров и массы доставляемой техники, процесс транспортировки является сложным и ответственным делом. Поэтому к перевозке привлекаются только опытные специалисты, обладающие необходимыми знаниями и практическими навыками. С целью защиты имущества от любых рисков проводится его обязательное страхование. Транспортная компания несет всю полноту ответственности за целостность и сохранность принятого к перевозке груза. Только после того, как машина окажется на земле, и будет подписан акт приема-передачи, ответственность переходит к собственнику.</p>
          </div>

          <div className='bg-[#FFF] text-center py-[70px]'>
            <h1 className='text-[36px] font-[700] tablet1:text-[26px]'>Заказать доставку</h1>
            <div className='w-[50%] m-auto pt-[30px] tablet1:w-[80%]'>
              <TextField label='Введите имя' color="warning" fullWidth />
              <div className='py-[30px] flex justify-between tablet1:flex-col'>
                <TextField label='Введите телефон' color="warning" className='w-[48%] tablet1:w-[100%]' />
                <h1 className='h-[30px] hidden tablet1:block'></h1>
                <TextField type='email' label='Введите почту' color="warning" className='w-[48%] tablet1:w-[100%]' />
              </div>
              <TextareaAutosize placeholder='Введите комментарий' style={{ width: '100%', height: '8vh', border: '1px solid lightgrey', borderRadius: '5px', fontSize: '16px', padding: '12px 0 0 10px' }} />
              <Button fullWidth color="warning" variant='contained' style={{ padding: '10px 0', marginTop: '30px' }}>Отправить</Button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Send