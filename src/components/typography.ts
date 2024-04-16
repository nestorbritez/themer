import { tv } from "tailwind-variants";

export const base = tv({
    variants: {
        weight: {
            black: "font-black",
            bold: "font-bold",
            semibold: "font-semibold",
            medium: "font-medium",
            normal: "font-normal",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    defaultVariants: {
        size: "xl",
        weight: "normal",
    },
});

export const caption = tv(
    {
        extend: base,
        base: "text-[--caption-text-color]",
        variants: {
            size: {
                xs: "text-xs",
                sm: "text-sm",
                base: "text-base",
            },
            neutral: {
                true: "text-gray-950 dark:text-white",
            },
        },
        defaultVariants: {
            size: "sm",
            weight: "normal",
        },
    },
    {
        responsiveVariants: ["sm", "md", "lg", "xl", "2xl"],
    },
);

export const text = tv(
    {
        extend: base,
        base: "text-[--body-text-color]",
        variants: {
            size: {
                sm: "text-sm",
                base: "text-base",
                lg: "text-lg",
                xl: "text-xl",
            },
            neutral: {
                true: "text-gray-950 dark:text-white",
            },
        },
        defaultVariants: {
            size: "base",
            weight: "normal",
        },
    },
    {
        responsiveVariants: ["sm", "md", "lg", "xl", "2xl"],
    },
);

export const list = tv(
    {
        extend: text,
        base: "list-outside pl-4",
        variants: {
            type: {
                disc: "list-disc",
                decimal: "list-decimal",
                none: "list-none",
            },
            inside: {
                true: "list-outside pl-0",
            },
        },
        defaultVariants: {
            size: "base",
            type: "disc",
            weight: "normal",
            inside: false,
        },
    },
    {
        responsiveVariants: ["sm", "md", "lg", "xl", "2xl"],
    },
);

export const link = tv(
    {
        extend: base,
        base: "transition",
        variants: {
            size: {
                xs: "text-xs",
                sm: "text-sm",
                base: "text-base",
                lg: "text-lg",
                xl: "text-xl",
            },
            intent: {
                primary:
                    "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500",
                info: "text-info-600 hover:text-primary-700 dark:text-info-400 dark:hover:text-primary-500",
                gray: "text-[--body-text-color]",
                neutral:
                    "text-gray-950 hover:text-gray-800 dark:text-white dark:hover:text-gray-200",
            },
            variant: {
                plain: "",
                underlined: "underline",
                ghost: "hover:underline",
                animated:
                    "relative before:absolute before:inset-x-0 before:bottom-0 before:h-px before:scale-x-0 before:origin-right hover:before:origin-left hover:before:scale-x-100 before:transition before:duration-200",
            },
            visited: {
                true: "visited:text-accent-600 dark:visited:text-accent-400",
            },
        },
        compoundVariants: [
            {
                variant: ["plain", "ghost", "underlined"],
                intent: "gray",
                class: "hover:text-gray-950 dark:hover:text-white",
            },
            {
                variant: "animated",
                intent: "primary",
                class: "before:bg-primary-600/50 dark:before:bg-primary-400/50",
            },
            {
                variant: "animated",
                intent: "info",
                class: "before:bg-info-600/50 dark:before:bg-info-400/50",
            },
            {
                variant: "animated",
                intent: "neutral",
                class: "before:bg-gray-950/50 dark:before:bg-white/50",
            },
            {
                variant: "animated",
                intent: "gray",
                class: "before:bg-gray-600/50 dark:before:bg-gray-400/50",
            },
            {
                variant: "underlined",
                intent: "primary",
                class: "decoration-primary-600/50 dark:decoration-primary-400/50",
            },
            {
                variant: "underlined",
                intent: "info",
                class: "decoration-info-600/50 dark:decoration-info-400/50",
            },
            {
                variant: "underlined",
                intent: "gray",
                class: "decoration-gray-600/50 dark:decoration-gray-400/50",
            },
            {
                variant: "underlined",
                intent: "neutral",
                class: "decoration-gray-950/25 dark:decoration-white/25",
            },
        ],
        defaultVariants: {
            intent: "primary",
            variant: "ghost",
            size: "base",
        },
    },
    {
        responsiveVariants: ["sm", "md", "lg", "xl", "2xl"],
    },
);

export const display = tv(
    {
        extend: base,
        base: "block text-[--display-text-color]",
        variants: {
            size: {
                "4xl": "text-4xl",
                "5xl": "text-5xl",
                "6xl": "text-6xl",
                "7xl": "text-7xl",
                "8xl": "text-8xl",
                "9xl": "text-9xl",
            },
        },
        defaultVariants: {
            size: "6xl",
            weight: "bold",
        },
    },
    {
        responsiveVariants: ["sm", "md", "lg", "xl", "2xl"],
    },
);

export const title = tv(
    {
        extend: base,
        base: "block text-[--display-text-color]",
        variants: {
            size: {
                base: "text-base",
                lg: "text-lg",
                xl: "text-xl",
                "2xl": "text-2xl",
                "3xl": "text-3xl",
            },
        },
        defaultVariants: {
            size: "xl",
            weight: "semibold",
        },
    },
    {
        responsiveVariants: ["sm", "md", "lg", "xl", "2xl"],
    },
);

export type Weight = keyof typeof base.variants.weight;
export type Align = keyof typeof base.variants.align;

type BaseTextProps = {
    weight?: Weight;
    align?: Align;
};

export type CaptionProps = BaseTextProps & {
    size?: keyof typeof caption.variants.size;
    neutral?: boolean;
};

export type TextProps = BaseTextProps & {
    size?: keyof typeof text.variants.size;
    neutral?: boolean;
};

export type ListProps = BaseTextProps & {
    size?: keyof typeof text.variants.size;
    type?: keyof typeof list.variants.type;
    inside?: boolean;
    neutral?: boolean;
};

export type LinkProps = BaseTextProps & {
    size?: keyof typeof text.variants.size | keyof typeof link.variants.size;
    variant?: keyof typeof link.variants.variant;
    intent?: keyof typeof link.variants.intent;
    visited?: boolean;
};

export type TitleProps = BaseTextProps & {
    size?: keyof typeof title.variants.size;
};

export type TitleSizeProp =
    | TitleProps["size"]
    | {
          initial?: TitleProps["size"];
          sm?: TitleProps["size"];
          md?: TitleProps["size"];
          lg?: TitleProps["size"];
          xl?: TitleProps["size"];
          xxl?: TitleProps["size"];
      };

export type TextSizeProp =
    | TextProps["size"]
    | {
          initial?: TextProps["size"];
          sm?: TextProps["size"];
          md?: TextProps["size"];
          lg?: TextProps["size"];
          xl?: TextProps["size"];
          xxl?: TextProps["size"];
      };

export type DisplayProps = BaseTextProps & {
    size?: keyof typeof display.variants.size;
};

export type TextWeightProp =
    | Weight
    | {
          initial?: Weight;
          sm?: Weight;
          md?: Weight;
          lg?: Weight;
          xl?: Weight;
          xxl?: Weight;
      };

export type TextAlignProp =
    | Align
    | {
          initial?: Align;
          sm?: Align;
          md?: Align;
          lg?: Align;
          xl?: Align;
          xxl?: Align;
      };
