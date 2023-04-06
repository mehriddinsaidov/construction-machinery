import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export default function TemporaryDrawer() {
    const items = [
        {
            key: '1',
            label: (
                <Link to='/Услуги' className='p-[15px] rounded-[15px]'><b>Ремонт и обслуживание</b></Link>
            ),
        },
    ];

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl(null);
    };

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open21 = Boolean(anchorEl1);
    const handleClick1 = (event1) => {
        setAnchorEl1(event1.currentTarget);
    };
    const handleClose21 = () => {
        setAnchorEl1(null);
    };

    const [state1, setState1] = React.useState({
        left1: false,
    });

    const toggleDrawer1 = (anchor1, open1) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState1({ ...state1, [anchor1]: open1 });
    };

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ color: '#000', fontSize: '30px' }} /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}>

                        <ul className='p-[10px] w-[100%]'>

                            <Button onClick={toggleDrawer(anchor, false)} style={{ width: '100%' }}>
                                <ClearIcon style={{ color: '#000', fontSize: '30px', marginLeft: '80%' }} />
                            </Button>

                            <Link id="basic-button"
                                aria-controls={open2 ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open2 ? 'true' : undefined}
                                onClick={handleClick}
                                className='border border-solid hover:text-[#FCB027] flex justify-between items-center'>
                                <b className='pl-[10px]'>Каталог </b>


                                {['left1'].map((anchor1) => (
                                    <React.Fragment key={anchor1}>
                                        <Button onClick={toggleDrawer1(anchor1, true)}><MenuIcon style={{ color: '#000', fontSize: '30px', width: '100%' }} /></Button>
                                        <Drawer
                                            anchor={anchor1}
                                            open={state1[anchor1]}
                                            onClose={toggleDrawer1(anchor1, false)}>

                                            <ul className='flex flex-col p-[10px] w-[100%]'>

                                                <Button onClick={toggleDrawer1(anchor1, false)} style={{ marginLeft: '80%' }} >
                                                    <ClearIcon style={{ color: '#000', fontSize: '30px', }} />
                                                </Button>

                                                <Link onClick={handleClose21} to='/user/1'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Автогрейдеры</b> <p className='opacity-[0.6]'>6</p></p></Link>
                                                <Link onClick={handleClose21} to='/user/2'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Бульдозеры</b> <p className='opacity-[0.6]'>78</p></p></Link>
                                                <Link onClick={handleClose21} to='/user/3'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Экскаваторы</b> <p className='opacity-[0.6]'>13</p></p></Link>
                                                <Link onClick={handleClose21} to='/user/4'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Компакторы</b> <p className='opacity-[0.6]'>3</p></p></Link>
                                                <Link onClick={handleClose21} to='/user/5'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Трубоукладчики</b> <p className='opacity-[0.6]'>4</p></p></Link>
                                                <Link onClick={handleClose21} to='/user/6'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Дорожные катки</b> <p className='opacity-[0.6]'>45</p></p></Link>
                                                <Link onClick={handleClose21} to='/user/7'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b className='pr-[15px]'>Фронтальные погрузчики</b> <p className='opacity-[0.6]'>28</p></p></Link>
                                            </ul>
                                        </Drawer>
                                    </React.Fragment>
                                ))}


                            </Link>
                            {/* <div className='tablet1:w-[20%]'>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open2}
                                    onClose={handleClose2}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <div className='m-[6px] '>
                                        <Link onClick={handleClose2} to='/user/1'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Автогрейдеры</b> <p className='opacity-[0.6]'>6</p></p></Link>
                                        <Link onClick={handleClose2} to='/user/2'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Бульдозеры</b> <p className='opacity-[0.6]'>78</p></p></Link>
                                        <Link onClick={handleClose2} to='/user/3'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Экскаваторы</b> <p className='opacity-[0.6]'>13</p></p></Link>
                                        <Link onClick={handleClose2} to='/user/4'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Компакторы</b> <p className='opacity-[0.6]'>3</p></p></Link>
                                        <Link onClick={handleClose2} to='/user/5'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Трубоукладчики</b> <p className='opacity-[0.6]'>4</p></p></Link>
                                        <Link onClick={handleClose2} to='/user/6'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b>Дорожные катки</b> <p className='opacity-[0.6]'>45</p></p></Link>
                                        <Link onClick={handleClose2} to='/user/7'><p className='hover:bg-[#f4f4f4] m-[5px] p-[15px] flex justify-between'><b className='pr-[15px]'>Фронтальные погрузчики</b> <p className='opacity-[0.6]'>28</p></p></Link>
                                    </div>
                                </Menu>
                            </div> */}

                            <div className='flex flex-wrap w-[100%] pl-[10px]'>
                                <Link to='/about' className='w-[100%] py-[10px] hover:text-[#FCB027]'><b>О компании</b></Link>
                                <Link to='/Доставка' className='w-[100%] py-[10px] hover:text-[#FCB027]'><b>Доставка</b></Link>
                                <Link to='/Лизинг' className='w-[100%] py-[10px] hover:text-[#FCB027]'><b>Лизинг</b></Link>
                            </div>

                            {/* uslugi */}
                            <Dropdown
                                menu={{
                                    items,
                                }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <Link className='tablet1:w-[40%] tablet1:text-[16px] hover:text-[#FCB027] pl-[10px]'>
                                            <b>Услуги</b>
                                            <KeyboardArrowDownIcon />
                                        </Link>
                                    </Space>
                                </a>
                            </Dropdown>
                        </ul>
                    </Drawer>
                </React.Fragment>
            ))}


        </div>
    );
}