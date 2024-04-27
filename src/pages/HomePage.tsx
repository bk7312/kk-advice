import type { FC } from 'hono/jsx';
import Layout from './Layout';
import { Advice } from '../advice';
import { css } from 'hono/css';

const HomePage: FC = ({ advice }) => {
  const title = "Kevin Kelly's Unsolicited Advice";
  const adv: Advice = advice;
  const smallerFontClass = css`
    font-size: 1rem;
  `;
  return (
    <Layout title={title}>
      <main>
        <h2>{title}</h2>
        <p>{adv.advice}</p>
        <p class={smallerFontClass}>
          Source: <a href={adv.source}>{adv.source}</a>
        </p>
        <p class={smallerFontClass}>
          Also available as an <a href='/api'>API</a>
        </p>
      </main>
    </Layout>
  );
};

export default HomePage;
