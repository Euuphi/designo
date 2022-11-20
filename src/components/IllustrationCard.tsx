interface Props {
    imgSrc: string;
    title: string;
    text: string;
}

const IllustrationCard = ({ imgSrc, title, text }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row md:text-left lg:flex-col lg:text-center">
            <img
                src={imgSrc}
                className="md:1/3 mx-auto w-4/5 max-w-xs sm:w-1/2"
            />
            <div>
                <h2 className="heading-3 mb-8 uppercase md:mb-4 lg:mb-8">
                    {title}
                </h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default IllustrationCard;
