interface ButtonThemes {
	light: string;
	dark: string;
}

interface Props {
	text: string;
	theme?: keyof ButtonThemes;
	link?: string;
}

const Button = ({ theme = "light", text, link }: Props) => {
	const buttonTheme: ButtonThemes = {
		light: "bg-white text-black",
		dark: "bg-peach text-white",
	};

	return link ? (
		<a
			className={
				"inline-block rounded-lg px-6 py-4 text-[.9375rem] font-medium uppercase hover:bg-peach-light hover:text-white" +
				` ${buttonTheme[theme]}`
			}
			href={link}>
			{text}
		</a>
	) : (
		<button
			className={
				"inline-block rounded-lg px-6 py-4 text-[.9375rem] font-medium uppercase hover:bg-peach-light hover:text-white" +
				` ${buttonTheme[theme]}`
			}>
			{text}
		</button>
	);
};

export default Button;
