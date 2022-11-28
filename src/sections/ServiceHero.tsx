import bgImage from "@/assets/web-design/desktop/bg-pattern-intro-web.svg";

interface Props {
    title: string;
    description: string;
}

const ServiceHero = ({ title, description }: Props) => {
    return (
        <section
            className="flex flex-col items-center justify-center gap-8 bg-peach px-8 py-24 text-center text-white md:py-16"
            style={{ backgroundImage: `url('${bgImage}')` }}
        >
            <h1 className="heading-1">{title}</h1>
            <p>{description}</p>
        </section>
    );
};

export default ServiceHero;
