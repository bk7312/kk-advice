import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import Layout from './Layout.js';
import { css } from 'hono/css';
const ApiPage = ({ maxAdvice }) => {
    const title = "API for Kevin Kelly's Unsolicited Advice";
    const codeClass = css `
    display: block;
    font-size: 0.9rem;
  `;
    return (_jsx(Layout, { title: title, children: _jsxs("main", { children: [_jsx("h2", { children: title }), _jsx("p", { children: "Usage:" }), _jsxs("p", { children: [_jsx("code", { children: "GET /api/advice" }), " - Returns a random advice"] }), _jsxs("p", { children: [_jsx("code", { children: "GET /api/advice/all" }), " - Returns all advice"] }), _jsxs("p", { children: [_jsx("code", { children: "GET /api/advice/:id" }), " - Returns a specific advice based on id (1 to ", maxAdvice, ")"] }), _jsx("p", { children: "Example:" }), _jsxs("p", { children: ["Get advice with id = 7 by sending a ", _jsx("code", { children: "GET" }), " request to", ' ', _jsx("a", { href: '/api/advice/7', children: "/api/advice/7" }), " will return the following JSON:"] }), _jsx("code", { class: codeClass, children: "\"id\": 7," }), _jsx("code", { class: codeClass, children: "\"advice\": \"Gratitude will unlock all other virtues and is something you can get better at.\"," }), _jsx("code", { class: codeClass, children: "\"source\": \"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\"" }), _jsx("p", { children: _jsx("a", { href: '/', children: "Home" }) })] }) }));
};
export default ApiPage;
