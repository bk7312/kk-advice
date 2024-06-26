import type { FC } from 'hono/jsx';
import Layout from './Layout.js';
import { css } from 'hono/css';

const ApiPage: FC = ({ maxAdvice }) => {
  const title = "API for Kevin Kelly's Unsolicited Advice";
  const codeBlockClass = css`
    background-color: var(--bg-shade);
    padding: 1em;
  `;
  const codeClass = css`
    display: block;
  `;
  return (
    <Layout title={title}>
      <main>
        <h2>{title}</h2>
        <h4>Usage:</h4>
        <p>
          <code>GET /api/advice</code> - Returns a random advice
        </p>
        <p>
          <code>GET /api/advice/all</code> - Returns all advice
        </p>
        <p>
          <code>GET /api/advice/:id</code> - Returns a specific advice based on
          id (1 to {maxAdvice})
        </p>
        <h4>Example:</h4>
        <p>
          Get advice with id = 7 by sending a <code>GET</code> request to{' '}
          <a href='/api/advice/7'>/api/advice/7</a> will return the following
          JSON:
        </p>
        <div class={codeBlockClass}>
          <code class={codeClass}>"id": 7,</code>
          <code class={codeClass}>
            "advice": "Gratitude will unlock all other virtues and is something
            you can get better at.",
          </code>
          <code class={codeClass}>
            "source":
            "https://kk.org/thetechnium/68-bits-of-unsolicited-advice/"
          </code>
        </div>
        <p>
          <a href='/'>Home</a>
        </p>
      </main>
    </Layout>
  );
};

export default ApiPage;
