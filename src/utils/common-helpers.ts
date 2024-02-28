export const compressImageUrl = (imageUrl: string) => {
  return imageUrl
    .split("")
    .reduce((o, c) => {
      if (o[o.length - 2] === c && o[o.length - 1] < 35) o[o.length - 1]++;
      else o.push(c, 0);
      return o;
    }, [])
    .map((_) => (typeof _ === "number" ? _.toString(36) : _))
    .join("");
};

export const decompressImageUrl = (imageUrl: string) => {
  return imageUrl
    .split("")
    .map((c, i, a) =>
      i % 2 ? undefined : new Array(2 + parseInt(a[i + 1], 36)).join(c),
    )
    .join("");
};
