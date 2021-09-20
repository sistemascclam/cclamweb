import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

export default function NoticiasContainer({noticiasData}) {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
            {
                noticiasData?.map((noticia, i) =>
                    <NoticiaCard key={i} title={noticia.title} slug={noticia.slug} date={moment(noticia.date).format('LL')}
                        image={noticia.coverImage ?
                            <Image
                                className="brightness-50 rounded-xl "
                                layout="fill"
                                objectFit="cover"
                                src={noticia.coverImage}
                                alt={noticia.slug}
                            />
                            :
                            <Image
                                className="brightness-50 rounded-3xl	 "
                                layout="fill"
                                objectFit="cover"
                                src={"/images/landing.png"}
                                alt={noticia.node.title}
                            />
                        } />
                )
            }
        </div>
    )
}

const NoticiaCard = ({ title, image, date, slug }) => (
    <Link href={`/noticia/${slug}`} >
        <a className="relative flex  hover:scale-105 transition duration-500 ease-in-out cursor-pointer ">
            <div className="relative w-full h-60 lg:h-32 lg:w-32">
                {image}
            </div>
            <div className="absolute lg:relative w-60 flex flex-col text-white lg:text-black bottom-0 m-5 lg:my-0 lg:mr-0 lg:ml-5 ">
                <p className="text-sm font-bold overflow-ellipsis line-clamp-3">{title}</p>
                <p className="text-xs mt-2">{date}</p>
                <p className="text-xs mt-2">Ver más...</p>
            </div>
        </a>
    </Link>
);