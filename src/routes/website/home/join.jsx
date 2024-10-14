import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/forms/button/button"

export const Join = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-4 py-8 md:py-20 max-w-screen-2xl">
            <section className="w-full md:w-1/2 flex flex-col gap-8">
                <article className="text-lg">
                    Businesses that use Klak save up to 40+ hours monthly on administrative tasks,
                    get paid 2x faster, and achieve positive cash flow to grow their business.
                </article>
                <p className="text-2xl md:text-[2rem] font-bold text-primary-200">Join them.</p>
            </section>

            <Button onClick={() => navigate("/book-a-demo")}>
                Book a Demo
            </Button>
        </div>
    )
}