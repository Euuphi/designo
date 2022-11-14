import Button from "@/components/Button";

const Home = () => {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center gap-5 bg-peach text-white">
                <h1 className="heading-2">Home</h1>
                <Button text="Learn More" />
            </div>
        </>
    );
};

export default Home;
