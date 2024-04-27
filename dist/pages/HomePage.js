import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import Layout from './Layout.js';
import { css } from 'hono/css';
const HomePage = ({ advice }) => {
    const title = "Kevin Kelly's Unsolicited Advice";
    const adv = advice;
    const smallerFontClass = css `
    font-size: 1rem;
  `;
    return (_jsx(Layout, { title: title, children: _jsxs("main", { children: [_jsx("h2", { children: title }), _jsx("p", { children: adv.advice }), _jsxs("p", { class: smallerFontClass, children: ["Source: ", _jsx("a", { href: adv.source, children: adv.source })] }), _jsxs("p", { class: smallerFontClass, children: ["Also available as an ", _jsx("a", { href: '/api', children: "API" })] })] }) }));
};
export default HomePage;
