import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import Image from 'next/image';
import moment from "moment";
import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')

export default function Pronunciamientos({ posts }) {
    console.log(posts)
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>
                <div className="pt-40 text-center">
                    <h1 className="text-5xl font-black">Pronunciamientos <span className="block text-themeLightBlue mt-2">Respaldo a la región Lambayeque</span></h1>
                </div>
                <div className="w-11/12 mx-auto ">
                    <div className="bg-white my-14 px-14 shadow-lg py-10 rounded-4xl">
                        <p className="text-lg text-center">La Centenaria Cámara de Comercio y Producción de Lambayeque respalda proyectos que van acorde al desarrollo y prestigio de la región Lambayeque, a través de: Comunicados a la opinión pública; Convocatorias institucionales; Conferencias de Prensa; Entrevistas de interés público; Proyección Social; entre otros.</p>
                    </div>
                    <div>
                        {
                            [...new Set(posts.map(z => moment(z.date).format('YYYYM')))].map((group, key) =>
                                <div key={key} className="my-20">
                                    <h2 className="text-themeLightBlue font-extrabold uppercase text-3xl">
                                        {moment(group, "YYYYM").format('YYYY') === moment().format('YYYY') ? moment(group, "YYYYM").format('MMMM') : moment(group, "YYYYM").format('MMMM, YYYY')}
                                    </h2>
                                    <div className="grid grid-cols-3 gap-14 mt-8">
                                        {
                                            posts.filter(pp => moment(pp.date).format('YYYYM') === group).map((p, i) =>
                                            
                                                <Image
                                                    key={i} className="rounded-xl shadow-xl hover:brightness-50 hover:scale-105 transition duration-500 ease-in-out cursor-pointer"
                                                    alt={p.date}
                                                    src={p.featuredImage.node.mediaItemUrl}
                                                    width={p.featuredImage.node.mediaDetails.width}
                                                    height={p.featuredImage.node.mediaDetails.height}
                                                    layout="responsive"
                                                    quality="100"
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'https://www.cclam.org.pe/graphql',
        cache: new InMemoryCache()
    });
    const response = await client.query({
        query: gql`
        query MyQuery {
            posts(
              where: {categoryName: "pronunciamientos", orderby: {field: DATE, order: DESC}}
            ) {
              nodes {
                date
                featuredImage {
                  node {
                    mediaItemUrl
                    mediaDetails {
                      file
                      width
                      height
                    }
                  }
                }
              }
            }
          }          
      `});
    const posts = response.data.posts.nodes;
    return {
        props: {
            posts
        }
    }
}