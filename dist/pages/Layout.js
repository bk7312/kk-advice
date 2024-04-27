import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import { css, Style } from 'hono/css';
const Layout = ({ title, children }) => {
    const bodyClass = css `
    max-width: 70ch;
    padding: 3em 1em;
    margin: auto;
    line-height: 1.75;
    font-size: 1.25em;
  `;
    return (_jsxs("html", { lang: 'en', children: [_jsxs("head", { children: [_jsx("meta", { charset: 'UTF-8' }), _jsx("meta", { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }), _jsx("meta", { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' }), _jsx("title", { children: title }), _jsx(Style, {})] }), _jsx("body", { class: bodyClass, children: children })] }));
};
export default Layout;
