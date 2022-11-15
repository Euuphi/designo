interface ButtonThemes {
    light: string;
    dark: string;
}

interface Props {
    text: string;
    theme?: keyof ButtonThemes;
}

const ButtonDark = ({ theme = "light", text }: Props) => {
    const buttonTheme = {
        light: "bg-white text-black",
        dark: "bg-peach text-white",
    };

    return (
        <button
            className={
                "rounded-lg px-6 py-4 text-[.9375rem] font-medium uppercase hover:bg-peach-light hover:text-white" +
                ` ${buttonTheme[theme]}`
            }
        >
            {text}
        </button>
    );
};

export default ButtonDark;
