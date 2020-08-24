export default function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return "Watch" + string.replace(/\s/g, "");
}
