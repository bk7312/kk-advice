import { jsx as _jsx } from "hono/jsx/jsx-runtime";
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { advice } from './advice.js';
import HomePage from './pages/HomePage.js';
import api from './api.js';
const app = new Hono();
app.route('/api', api);
app.get('/', (c) => {
    const random = Math.floor(Math.random() * advice.length) + 1;
    const randomAdvice = advice[random];
    return c.html(_jsx(HomePage, { advice: randomAdvice }));
});
app.onError((err, c) => {
    console.error(`${err}`);
    return c.json({ error: 'something went wrong...' }, 500);
});
app.notFound((c) => {
    return c.json({ error: 'page not found' }, 404);
});
const port = 3001;
console.log(`Server is running on port ${port}`);
serve({
    fetch: app.fetch,
    port,
});
