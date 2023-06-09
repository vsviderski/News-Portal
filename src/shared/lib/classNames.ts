type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, additional: (string | undefined)[] = [], mods: Mods = {}): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
