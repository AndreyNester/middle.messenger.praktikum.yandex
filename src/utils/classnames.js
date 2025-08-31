import Handlebars from "handlebars";
Handlebars.registerHelper("classnames", function (...args) {
  // последний аргумент — служебный options, его нужно убрать
  const options = args.pop();

  const parts = [];

  for (const a of args) {
    if (!a) continue;

    if (typeof a === "string") {
      parts.push(a);
      continue;
    }

    if (Array.isArray(a)) {
      parts.push(...a.filter(Boolean).map(String));
      continue;
    }

    // Игнорируем любые произвольные объекты, чтобы случайно не схватить что-то вроде options.hash
    if (typeof a === "object") {
      // Если хочешь поддержать «карты классов» — см. вариант ниже
      continue;
    }

    parts.push(String(a));
  }

  return parts.join(" ");
});
