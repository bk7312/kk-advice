import type { FC } from 'hono/jsx';
import Layout from './Layout.js';
import { Advice } from '../advice.js';
import { css } from 'hono/css';

const HomePage: FC = ({ advice }) => {
  const title = "Kevin Kelly's Unsolicited Advice";
  const adv = advice as Advice;
  const mainClass = css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `;
  const titleClass = css`
    text-align: center;
    text-wrap: balance;
  `;
  const sourceClass = css`
    font-size: 0.8rem;
    text-align: end;
    word-break: break-word;
  `;
  const linkClass = css`
    margin: 1em auto;
    border: 1px solid var(--main-color);
    padding: 0.2em 1em;
    text-decoration: none;
    background-color: var(--bg-shade);
    color: var(--main-color) !important; // overwrites media query for dark mode
    border-radius: 5px;
    text-align: center;
    user-select: none;

    &:hover {
      background-color: var(--color-shade);
    }
  `;
  const footerClass = css`
    margin-top: auto;
    padding: 0.5em 0;
    font-size: 0.8rem;
    text-align: center;
  `;
  const quoteClass = css`
    background-color: var(--bg-shade);
    border-left: 0.5rem solid var(--color-shade);
    margin: 0.5em;
    padding: 0.5em;
    font-size: 1.2rem;

    &:before {
      color: var(--color-shade);
      content: open-quote;
      font-size: 3em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }
  `;
  return (
    <Layout title={title}>
      <main class={mainClass}>
        <h2 class={titleClass}>{title}</h2>
        <blockquote class={quoteClass}>
          {adv.advice}
          <p class={sourceClass}>
            Source: <a href={adv.source}>{adv.source}</a>
          </p>
        </blockquote>
        <a class={linkClass} href='.'>
          Random
        </a>
        <p class={footerClass}>
          Also available as an <a href='/api'>API</a>
        </p>
      </main>
    </Layout>
  );
};

export default HomePage;
