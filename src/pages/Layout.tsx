import type { FC } from 'hono/jsx';
import { css, Style } from 'hono/css';

const Layout: FC = ({ title, children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <title>{title}</title>
        <Style>{css`
          :root {
            --main-bg-color: #fefefe;
            --main-color: #111;
            --bg-shade: #eee;
            --color-shade: #ccc;
          }
          html {
            max-width: 70ch;
            padding: 0 1em;
            margin: auto;
            line-height: 1.75;
            font-size: 1.25em;
            background-color: var(--main-bg-color);
            color: var(--main-color);
          }

          @media screen and (max-width: 600px) {
            html {
              font-size: 1em;
            }
          }
          @media screen and (prefers-color-scheme: dark) {
            :root {
              --main-bg-color: #111;
              --main-color: #fefefe;
              --bg-shade: #333;
              --color-shade: #777;
            }

            a {
              color: aqua;
            }
            a:visited {
              color: lightblue;
            }
          }
        `}</Style>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
