import { Hono } from 'hono';
import { advice } from './advice';
import ApiPage from './pages/ApiPage';

const api = new Hono();

api.get('/', (c) => {
  return c.html(<ApiPage maxAdvice={advice.length} />);
});

api.get('/advice', (c) => {
  const random = Math.floor(Math.random() * advice.length) + 1;
  return c.json(advice[random]);
});

api.get('/advice/all', (c) => {
  return c.json(advice);
});

api.get('/advice/:id', (c) => {
  const id: number = parseInt(c.req.param('id'));
  if (isNaN(id)) {
    return c.json({
      error: 'id must be a number',
    });
  }
  if (id < 1 || id > advice.length) {
    return c.json({
      error: 'id must be from 1 to ' + advice.length,
    });
  }

  return c.json(advice[id - 1]);
});

export default api;
