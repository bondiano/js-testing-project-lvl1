// @ts-check

import path from 'path';

/**
 * @param {String} link url without protocol
 * @param {String} [defaultFormat]
 *
 * @example
 * urlToFilename('ru.hexlet.io/courses')
 * // returns ru-hexlet-io-courses.html
 * @example
 * urlToFilename('ru.hexlet.io/image.png')
 * // returns ru-hexlet-io-image.png
 *
 * @returns {String} filename with replaced all symblies expect string and digits to "-"
 */
export const urlToFilename = (link, defaultFormat = '.html') => {
  const { dir, name, ext } = path.parse(link);
  const filename = path.join(dir, name).replace(/[^A-Za-z0-9_]/gi, '-');
  const format = ext || defaultFormat;

  return `${filename}${format}`;
};
