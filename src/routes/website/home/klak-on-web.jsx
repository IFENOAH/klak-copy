import { BlogCard } from "../../../components/global/blogcard"
import { BlogBanner } from "../../../components/global/blogBanner"
import Blog1 from "../../../assets/images/blog.jpg"

import Punch from "../../../assets/images/news/punch.png"
import Guardian from "../../../assets/images/news/guardian.png"
import TechCabal from "../../../assets/images/news/techcabal.png"
import Tc from "../../../assets/images/news/tc.png"
import BusinessDay from "../../../assets/images/news/b-day.png"

const BLOGS = [
    {
        time: "1 day ago",
        sector: "Finance",
        title: "Spend less time chasing payments",
        image: Blog1
    },
    {
        time: "1 day ago",
        sector: "Finance",
        title: "Spend less time chasing payments",
        image: Blog1
    },
    {
        time: "1 day ago",
        sector: "Finance",
        title: "Spend less time chasing payments",
        image: Blog1
    },
    {
        time: "1 day ago",
        sector: "Finance",
        title: "Spend less time chasing payments",
        image: Blog1
    },
]

export const KlakOnWeb = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-12">

            <h4 className="text-2xl">Klak in the news</h4>

            <section className="w-full flex items-center justify-center gap-6 flex-wrap">
                <img src={Guardian} alt="news-icon" />
                <img src={Punch} alt="news-icon" />
                <img src={TechCabal} alt="news-icon" />
                <img src={Tc} alt="news-icon" />
                <img src={BusinessDay} alt="news-icon" />
            </section>


            {/* <h1 className="text-3xl md:text-5xl font-extrabold text-primary-200">Klak on the web</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
                    {
                        BLOGS.map((blog, index) => (
                            <BlogCard
                                key={index}
                                time={blog.time}
                                sector={blog.sector}
                                title={blog.title}
                                image={blog.image}
                            />
                        ))
                    }
                </section>
                <section className="w-full h-full">
                    <BlogBanner />
                </section>
            </div> */}

        </div>
    )
}