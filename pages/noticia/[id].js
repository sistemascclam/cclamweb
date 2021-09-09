import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getAllPagesUri, getPageData } from '../../lib/noticias'

import Image from 'next/image'
import { json2html, html2json } from 'html2json'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')
import { useEffect, useState } from 'react'

export default function Noticia({ pageData }) {
    const [images, setimages] = useState([])
    const [innerHTML, setinnerHTML] = useState(null)

    const clearNode = (node, imgs) => {
        let newNode = node.child.filter(n => n.tag != "img")
        node.child.map(n => { if (n.tag == "img") { imgs.push({ height: n.attr.height, width: n.attr.width, src: n.attr.src }) } })
        node.child = newNode
        newNode.filter(nn => nn.hasOwnProperty("child")).map(nnn => clearNode(nnn, imgs))
    }

    useEffect(() => {
        var newJson = { ...html2json(pageData.content.replaceAll("<o:p></o:p>","")) }
        var imgs = []
        clearNode(newJson, imgs);
        setinnerHTML(json2html(newJson))
        setimages(imgs)
    }, [])

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="w-full h-screen">
                <div className="relative w-full h-4/5 mx-auto bg-black">
                    {
                        pageData.featuredImage ?
                        <Image
                            className="brightness-25"
                            objectFit="cover"
                            layout="fill"
                            src={pageData.featuredImage.node.mediaItemUrl}
                            alt={pageData.title}
                        />
                        :
                        <Image
                            className="brightness-25"
                            objectFit="cover"
                            layout="fill"
                            src={"/images/landing.png"}
                            alt={pageData.title}
                        />
                    }
                </div>
                <div className="w-11/12 -mt-96 mx-auto">
                    <div className="relative mb-10">
                        <h1 className="font-bold text-2xl lg:text-4xl text-white text-center">{pageData.title}</h1>
                        <div className="flex justify-between m-4">
                            <p className="font-light text-white text-lg">
                                {moment(pageData.date).format('LL')}
                            </p>
                            <button
                                className="font-light text-white"
                                onClick={() => window.print()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                <div className="relative bg-white w-full my-14 shadow-xl lg:px-16 px-6 py-6 lg:py-20 rounded-3xl">
                        <div dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
                        <p className="font-semibold mt-10 mb-5">Imágenes:</p>
                        <div className="grid grid-cols-2 gap-4">
                            {
                                images.map((img, i) =>
                                    <Image
                                        key={i}
                                        src={img.src}
                                        height={img.height}
                                        width={img.width}
                                        alt={`image_${i}`}
                                        layout="responsive"
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPagesUri()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const pageData = await getPageData(params.id)
    return {
        props: {
            pageData
        }
    }
}