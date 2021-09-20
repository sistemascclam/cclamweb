import { useState } from 'react'
import Link from 'next/link';

const FillMenus = (menusParam, cod, tooglemodal,type) => {
    const [show, setShow] = useState([]);

    const clickedShow = (cod, key) => {
        if (!show.includes(cod + "" + key)) {
            setShow([...show, cod + "" + key])
        } else {
            setShow(show.filter(s => s != cod + "" + key))
        }
    }
    return (
        <div className={`w-full mt-2 mb-8 mx-auto ${type==='small' ? '' : 'px-4 '}`}>
            {
                menusParam?.map((menu, key) =>
                    <div key={`${cod}${key}`}>
                        {
                            menu.to ?
                                <Link href={menu.to} >
                                    <a >
                                        <div className={`${type==="small" ? 'mt-4 font-light' :'mt-5 mb-2 w-full font-normal text-gray-700 text-lg '}`} >
                                            <MenuItem menu={menu} show={show} cod={cod} showinx={key} />
                                        </div>
                                    </a>
                                </Link>
                                :
                                menu.external ?
                                    <a href={menu.external} target="_blank">
                                        <div className={`${type==="small" ? 'mt-4 font-light' :'mt-5 mb-2 w-full font-normal text-gray-700 text-lg '}`} >
                                            <MenuItem menu={menu} show={show} cod={cod} showinx={key} />
                                        </div>
                                    </a>
                                    :
                                    <button className={`${type==="small" ? 'mt-4 font-light' :'mt-5 mb-2 w-full font-normal text-gray-700 text-lg '}`} onClick={() => clickedShow(cod, key)}>
                                        <MenuItem menu={menu} show={show} cod={cod} showinx={key} />
                                    </button>
                        }

                        <div className={`${!show.includes(cod + "" + key) ? "hidden" : 'block'}`}>{menu.menus && FillMenus(menu.menus, `${cod}${key}`,tooglemodal ,type)}</div>
                        {key < menusParam.length - 1 && type!="small" && <hr className="text-gray-200" />}
                    </div>)
            }
        </div>
    );

}

const MenuItem = ({ menu, show, cod, showinx }) => 
<div className="flex justify-between text-left  hover:text-themeLightBlue">
    <p>{menu.title}</p>
    {menu.menus && <span>{!show.includes(cod + "" + showinx) ? <span className="text-xs ml-1">+</span> : <span className="text-xs ml-1">-</span>}</span>}
</div>

export default function ListMenu({ menusParam, cod, tooglemodal,type }) {

    return (
        <>
            {
                FillMenus(menusParam, cod, tooglemodal,type)
            }
        </>
    );
}