type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional,
  ].join(" ");
}

classNames("remove-btn", { hovered: true, disabled: false, red: false }, [
  "btn",
  "btn--primary",
  "btn--small",
]);
