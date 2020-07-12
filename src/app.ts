import program from 'commander';
import fs from 'fs';
import { md2html } from './lib/md2html';

program.option('--gfm', 'GFMを有効にする');
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    const html = md2html(file, cliOptions);
    console.log(html);
  }
});
