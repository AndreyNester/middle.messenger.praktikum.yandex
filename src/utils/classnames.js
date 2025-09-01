import Handlebars from 'handlebars';
Handlebars.registerHelper('classnames', function (...args) {
  const parts = [];

  for (const a of args) {
    if (!a) continue;

    if (typeof a === 'string') {
      parts.push(a);
      continue;
    }

    if (Array.isArray(a)) {
      parts.push(...a.filter(Boolean).map(String));
      continue;
    }

    if (typeof a === 'object') {
      continue;
    }

    parts.push(String(a));
  }

  return parts.join(' ');
});
