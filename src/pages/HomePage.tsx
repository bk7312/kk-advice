import type { FC } from 'hono/jsx';
import Layout from './Layout.js';
import { Advice } from '../advice.js';
import { css } from 'hono/css';

const HomePage: FC = ({ advice }) => {
  const title = "Kevin Kelly's Unsolicited Advice";
  const adv: Advice = advice;
  const mainClass = css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `;
  const sourceClass = css`
    font-size: 1rem;
    text-align: end;
  `;
  const footerClass = css`
    margin-top: auto;
    font-size: 1rem;
    text-align: center;
  `;
  const quoteClass = css`
    background: #f9f9f9;
    border-left: 0.5rem solid #ccc;
    margin: 0.5em;
    padding: 0.5em;
    font-size: 1.4rem;

    &:before {
      color: #ccc;
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
        <h2>{title}</h2>
        <blockquote class={quoteClass}>
          {adv.advice}
          <p class={sourceClass}>
            Source: <a href={adv.source}>{adv.source}</a>
          </p>
        </blockquote>
        <p class={footerClass}>
          Also available as an <a href='/api'>API</a>
        </p>
      </main>
    </Layout>
  );
};

export default HomePage;
