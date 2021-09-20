import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Layout, { siteTitle } from "../../components/layout";
import { getAllNews, getNewBySlug } from "../../lib/noticias";
import Image from "next/image";
import moment from "moment";
import "moment/locale/es";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Noticia({ noticia }) {
    const router = useRouter();
    if (!router.isFallback && !noticia?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="w-full min-h-screen">
                <div className="relative w-full h-96 mx-auto bg-black">
                    {noticia.coverImage ? (
                        <Image
                            className="brightness-25"
                            objectFit="cover"
                            layout="fill"
                            src={`/images/contigoempresa/noticias/${noticia.coverImage}`}
                            alt={noticia.sllug}
                        />
                    ) : (
                        <Image
                            className="brightness-25"
                            objectFit="cover"
                            layout="fill"
                            src={"/images/landing.png"}
                            alt={noticia.title}
                        />
                    )}
                </div>
                <div className="w-11/12 -mt-64 mx-auto">
                    <div className="relative">
                        <h1 className="font-bold text-2xl lg:text-4xl text-white text-center mb-10">
                            {noticia.title}
                        </h1>
                        <div className="flex justify-between m-4">
                            <p className="font-light text-white text-sm lg:text-lg">
                                {moment(noticia.date).format("LL")}
                            </p>
                            <button
                                className="font-light text-white"
                                onClick={() => window.print()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 lg:h-6 lg:w-6"
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
                    <div className="relative bg-white w-full shadow-xl lg:px-16 px-6 py-6 lg:py-20 rounded-3xl">
                        <div dangerouslySetInnerHTML={{ __html: noticia.content }}></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const noticia = getNewBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "content",
        "ogImage",
        "coverImage",
    ]);
    const content = await markdownToHtml(noticia.content || "");

    return {
        props: {
            noticia: {
                ...noticia,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const noticias = getAllNews(["slug"]);

    return {
        paths: noticias.map((noticia) => {
            return {
                params: {
                    slug: noticia.slug,
                },
            };
        }),
        fallback: false,
    };
}
