import config from "../../accordion.config";
import * as baseAccordion from "./base";
import type { Accordion } from "../accordion.types";

const item = {
    base: `${baseAccordion.item} group/item px-6 data-[state=open]:rounded-[--accordion-border-radius] data-[state=open]:border-transparent data-[state=open]:accordion-shadow`,
    appearances: {
        light: "bg-white",
        dark: "bg-[--accordion-dark-bg]",
        both: "bg-white bg-[--accordion-dark-bg] dark:data-[state=open]:bg-[--card-dark-bg]",
    },
};
const parentAppearances = {
    light: "border-[--ui-light-border-color] data-[state=open]:border-transparent",
    dark: "border-[--ui-dark-border-color] data-[state=open]:border-transparent",
    both: "border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] data-[state=open]:border-transparent dark:data-[state=open]:border-transparent",
};
const triggerParent = {
    base: baseAccordion.trigger.parent.base + " " + "border-b group-last/item:border-none",
    appearance:
        baseAccordion.trigger.parent.appearances[config.appearance] +
        " " +
        parentAppearances[config.appearance],
};

const elevatedVariant: Accordion = {
    root: "",
    item: item.base + " " + item.appearances[config.appearance],
    trigger: {
        parent: triggerParent.base + " " + triggerParent.appearance,
        content: baseAccordion.trigger.content,
        icon: baseAccordion.trigger.icon.base + " " + baseAccordion.trigger.icon.motion,
    },
    content:
        baseAccordion.content.base +
        " " +
        baseAccordion.content.motion +
        " " +
        baseAccordion.content.appearances[config.appearance],
};

export default elevatedVariant;
export { elevatedVariant };
