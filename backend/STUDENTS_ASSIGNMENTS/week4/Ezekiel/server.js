const http = require('http');

let tasks = ['Read', 'Code', 'Sleep'];

const server = http.createServer((req, res) => {

  // GET /
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    return res.end(
      JSON.stringify({
        success: true,
        message: 'Welcome to the Todo API'
      })
    );
  }

  // GET /tasks
  if (req.method === 'GET' && req.url === '/tasks') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    return res.end(
      JSON.stringify({
        success: true,
        tasks
      })
    );
  }

  // POST /add-task
  if (req.method === 'POST' && req.url.startsWith('/add-task')) {

    const params = new URLSearchParams(req.url.split('?')[1]);

    const taskName = params.get('task');

    // empty validation
    if (!taskName || taskName.trim() === '') {
      res.writeHead(400, { 'Content-Type': 'application/json' });

      return res.end(
        JSON.stringify({
          success: false,
          error: 'Task name is required'
        })
      );
    }

    // duplicate validation
    if (tasks.includes(taskName)) {
      res.writeHead(409, { 'Content-Type': 'application/json' });

      return res.end(
        JSON.stringify({
          success: false,
          error: 'Task already exists'
        })
      );
    }

    tasks.push(taskName);

    res.writeHead(200, { 'Content-Type': 'application/json' });

    return res.end(
      JSON.stringify({
        success: true,
        message: 'Task added successfully',
        tasks
      })
    );
  }

  // DELETE /delete-task
  if (req.method === 'DELETE' && req.url.startsWith('/delete-task')) {

    const params = new URLSearchParams(req.url.split('?')[1]);

    const taskName = params.get('task');

    // task not found
    if (!tasks.includes(taskName)) {
      res.writeHead(404, { 'Content-Type': 'application/json' });

      return res.end(
        JSON.stringify({
          success: false,
          error: 'Task not found'
        })
      );
    }

    tasks = tasks.filter(task => task !== taskName);

    res.writeHead(200, { 'Content-Type': 'application/json' });

    return res.end(
      JSON.stringify({
        success: true,
        message: 'Task deleted successfully',
        tasks
      })
    );
  }

  // invalid route
  res.writeHead(404, { 'Content-Type': 'application/json' });

  res.end(
    JSON.stringify({
      success: false,
      error: 'Route not found'
    })
  );
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});