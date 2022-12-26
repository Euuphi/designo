import useMediaQuery, { breakpoints } from "./useMediaQuery";

interface Screens {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
    xxxl?: boolean;
}

type Breakpoints = keyof typeof breakpoints;

/**
 * Returns object with state variables to track if current screen size matches
 *
 * @example
 * const { sm, md } = useBreakPoints("sm", "md");
 *
 * @param {...Breakpoints[]} args - Key for set breakpoints
 * @returns Object of state variables
 */
const useBreakpoints = (...args: Breakpoints[]) => {
    let screens: Screens = {};

    args.forEach((breakpoint) => {
        switch (breakpoint) {
            case "sm":
                screens["sm"] = useMediaQuery(breakpoints.sm);
                break;
            case "md":
                screens["md"] = useMediaQuery(breakpoints.md);
                break;
            case "lg":
                screens["lg"] = useMediaQuery(breakpoints.lg);
                break;
            case "xl":
                screens["xl"] = useMediaQuery(breakpoints.xl);
                break;
            case "xxl":
                screens["xxl"] = useMediaQuery(breakpoints.xxl);
                break;
            case "xxxl":
                screens["xxxl"] = useMediaQuery(breakpoints.xxxl);
                break;
            default:
                break;
        }
    });

    return screens;
};

export default useBreakpoints;
