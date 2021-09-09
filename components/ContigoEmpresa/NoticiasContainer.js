import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

export default function NoticiasContainer({noticiasData}) {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
            {
                noticiasData?.children?.edges?.map((edge, i) =>
                    <NoticiaCard key={i} title={edge.node.title} id={edge.node.id} date={moment(edge.node.date).format('LL')}
                        image={edge.node.featuredImage ?
                            <Image
                                className="brightness-50 rounded-xl "
                                layout="fill"
                                objectFit="cover"
                                src={edge.node.featuredImage.node.mediaItemUrl}
                                alt={edge.node.title}
                            />
                            :
                            <Image
                                className="brightness-50 rounded-3xl	 "
                                layout="fill"
                                objectFit="cover"
                                src={"/images/landing.png"}
                                alt={edge.node.title}
                            />
                        } />
                )
            }
        </div>
    )
}

const NoticiaCard = ({ title, image, date, id }) => (
    <Link href={`/noticia/${id}`} >
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