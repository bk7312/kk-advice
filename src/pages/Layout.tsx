import type { FC } from 'hono/jsx';
import { css, Style } from 'hono/css';

const Layout: FC = ({ title, children }) => {
  const bodyClass = css`
    max-width: 70ch;
    padding: 1em;
    margin: auto;
    line-height: 1.75;
    font-size: 1.25em;
  `;
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <title>{title}</title>
        <Style />
      </head>
      <body class={bodyClass}>{children}</body>
    </html>
  );
};

export default Layout;
