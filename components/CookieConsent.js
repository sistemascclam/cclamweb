import React, { useEffect, useState } from 'react'

export default function CookieConsent() {
    const [showcookieconsent, setshowcookieconsent] = useState(false)
    useEffect(() => {
        let exist = localStorage.getItem('cclam-cookies-consent')
        if (exist){
            setshowcookieconsent(false)
        }else{
            setshowcookieconsent(true)
        }
    })

    const giveConsent = () => {
        localStorage.setItem('cclam-cookies-consent', true)
        setshowcookieconsent(false)
    }
    return (
        <>
        {
            showcookieconsent ?
            <div className="fixed z-10 bottom-3 left-3 bg-white rounded-xl px-6 py-4 w-96 shadow-md">
                <div className="flex">
                    <svg viewBox="0 0 24 24" height="28" width="28" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A2.963 2.963 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM12 20c-4.411 0-8-3.589-8-8a7.962 7.962 0 0 1 6.006-7.75A5.006 5.006 0 0 0 15 9l.101-.001a5.007 5.007 0 0 0 4.837 4C19.444 16.941 16.073 20 12 20z"></path><circle cx="12.5" cy="11.5" r="1.5"></circle><circle cx="8.5" cy="8.5" r="1.5"></circle><circle cx="7.5" cy="12.5" r="1.5"></circle><circle cx="15.5" cy="15.5" r="1.5"></circle><circle cx="10.5" cy="16.5" r="1.5"></circle></svg>
                    <span className="font-bold ml-4">Cookies</span>
                </div>
                <div className="flex">
                    <p className="text-sm font-semibold leading-none mt-3">Este sitio usa cookies para mejorar la experiencia de usuario</p>
                    <button className="bg-blue-600 rounded-md text-white px-3 text-sm" onClick={giveConsent}>Aceptar</button>
                </div>
            </div> : ""
        }
        </>
    )
}
