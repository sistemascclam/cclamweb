import { useState } from 'react'
import Link from 'next/link';

const FillMenus = (menusParam, cod, tooglemodal, type) => {
    const [show, setShow] = useState([]);

    const clickedShow = (cod, key) => {
        if (!show.includes(cod + "" + key)) {
            setShow([...show, cod + "" + key])
        } else {
            setShow(show.filter(s => s != cod + "" + key))
        }
    }

    return (
        <div className={`w-full mr-auto pb-3 px-1`}>
            {
                menusParam?.map((menu, key) =>
                    <div key={`${cod}${key}`}>
                        {
                            menu.to ?
                                <Link href={menu.to} >
                                    <a>
                                        <div className={`${type === "small" ? 'mt-4 font-light' : 'px-5 w-full hover:bg-bgblue rounded-xl hover:text-white text-gray-700 text-base font-normal py-2 my-1'}`} >
                                            <MenuItem type={type} menu={menu} icon={menu.icon} show={show} cod={cod} showinx={key} />
                                        </div>
                                    </a>
                                </Link>
                                :
                                menu.external ?
                                    <a href={menu.external} target="_blank" rel="noreferrer">
                                        <div className={`${type === "small" ? 'mt-4 font-light' : 'px-5 w-full hover:bg-bgblue rounded-xl hover:text-white text-gray-700 text-base font-normal py-2 my-1'}`} >
                                            <MenuItem type={type} menu={menu} icon={menu.icon} show={show} cod={cod} showinx={key} />
                                        </div>
                                    </a>
                                    :
                                    <button className={`${type === "small" ? 'mt-4 font-light' : 'px-5 w-full hover:bg-bgblue rounded-xl hover:text-white text-gray-700 text-base font-normal py-2 my-1'}`} onClick={() => clickedShow(cod, key)}>
                                        <MenuItem type={type} menu={menu} icon={menu.icon} show={show} cod={cod} showinx={key} />
                                    </button>
                        }
                        <div className={`${!show.includes(cod + "" + key) ? "hidden" : 'block'} mx-3`}>{menu.menus && FillMenus(menu.menus, `${cod}${key}`, tooglemodal, type)}</div>
                    </div>)
            }
        </div>
    );

}

const MenuItem = ({ menu, show, cod, showinx, type, icon }) =>
    <div className={`flex  ${type === 'small' ? 'justify-start' : 'justify-between'} text-left`}>
        <div className='flex'>
            {
                icon && type !== "small" ?
                    <span className="bg-blue-100 my-auto p-1 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bgblue opacity-80" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d={icon} clipRule="evenodd" />
                        </svg>
                    </span> : ""
            }
            <p>{menu.title} </p>
        </div>
        {menu.menus &&
            <span className="my-auto">
                {!show.includes(cod + "" + showinx) ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                }
            </span>}
    </div>

export default function ListMenu({ menusParam, cod, tooglemodal, type }) {

    return (
        <>
            {
                FillMenus(menusParam, cod, tooglemodal, type)
            }
        </>
    );
}