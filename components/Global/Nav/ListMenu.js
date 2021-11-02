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
        <div className={`w-max pt-4 pb-10 mx-auto ${cod!=1 ? 'bg-white rounded-3xl bg-opacity-5' : ''}`}>
            {
                menusParam?.map((menu, key) =>
                    <div key={`${cod}${key}`}>
                        {
                            menu.to ?
                                <Link href={menu.to} >
                                    <a>
                                        <div className={`${type === "small" ? 'mt-4 font-light' : 'mt-5 mb-2 w-full font-light text-white text-xl '}`} >
                                            <MenuItem type={type} menu={menu} show={show} cod={cod} showinx={key} />
                                        </div>
                                    </a>
                                </Link>
                                :
                                menu.external ?
                                    <a href={menu.external} target="_blank">
                                        <div className={`${type === "small" ? 'mt-4 font-light' : 'mt-5 mb-2 w-full font-light text-white text-xl '}`} >
                                            <MenuItem type={type} menu={menu} show={show} cod={cod} showinx={key} />
                                        </div>
                                    </a>
                                    :
                                    <button className={`${type === "small" ? 'mt-4 font-light' : 'mt-5 mb-2 w-full font-light text-white text-xl '}`} onClick={() => clickedShow(cod, key)}>
                                        <MenuItem type={type} menu={menu} show={show} cod={cod} showinx={key} />
                                    </button>
                        }
                        <div className={`${!show.includes(cod + "" + key) ? "hidden" : 'block'}`}>{menu.menus && FillMenus(menu.menus, `${cod}${key}`, tooglemodal, type)}</div>

                    </div>)
            }
        </div>
    );

}

const MenuItem = ({ menu, show, cod, showinx, type }) =>
    <div className={`flex  ${type === 'small' ? 'justify-start' : 'justify-center mx-5'} text-center hover:text-themeLightBlue`}>
        <p>{menu.title} </p>
        {menu.menus &&
            <span className="my-auto">
                {!show.includes(cod + "" + showinx) ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
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