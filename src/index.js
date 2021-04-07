// @ts-check

import fs from 'fs/promises';
import axios from 'axios';
import path from 'path';
import { urlToFilename } from './utils.js';

export default (pageUrl, outputDir = '') => {
  const url = new URL(pageUrl);
  const link = `${url.hostname}${url.pathname}`;
  const filename = urlToFilename(link);
  const outputPath = path.join(path.resolve(process.cwd(), outputDir), filename);

  return axios.get(pageUrl)
    .then(({ data }) => fs.writeFile(outputPath, data))
    .then(() => ({ filepath: outputPath }));
};
