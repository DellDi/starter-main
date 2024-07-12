import { useDark, useToggle } from "@vueuse/core";

export const isDark = useDark();

export const toggleDark = useToggle(isDark);
export const useSetDark = function () {
    const isDark = useDark()
    if (isDark.value) return
    toggleDark()
}
