import marked from 'marked';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const md2html = (markdown: string, cliOptions: any): string => {
  return marked(markdown, {
    gfm: cliOptions.gfm,
  });
};
