import Head from 'next/head'
import Layout from '../../components/layout'
import NoticiasContainer from '../../components/ContigoEmpresa/NoticiasContainer'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {list} from "../../redux/actions/noticia"

export default function Noticias() {
    const dispatch = useDispatch();
    const {noticiaList}=useSelector(({noticia})=>noticia)
    useEffect(() => {
      dispatch(list())
    }, [])
    return (
        <Layout>
            <Head>
                <title>CCLAM | Noticias</title>
            </Head>
            <div className="min-h-screen bg-themeWhite">
                <div className="pt-36 lg:pt-20 text-center">
                    <h1 className="text-sm lg:text-xl md:text-xl font-black text-themeLightBlue ">GALERÍA<span className="block text-black text-2xl lg:text-5xl md:text-5xl">Noticias</span></h1>
                </div>
                <div className="w-full lg:px-14 px-6 py-6 lg:py-20">
                    <NoticiasContainer noticiasData={noticiaList} />
                </div>
            </div>
        </Layout>
    )
}