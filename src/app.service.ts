import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <html>
        <head><title>API Routes</title></head>
        <body>
          <h2>Authentication Routes</h2>
          <ul>
            <li><b>POST /auth/login</b> - Login route, returns a token</li>
            <li><b>POST /auth/signup</b> - Signup route, returns a success message</li>
          </ul>
          <h2>Todo Routes(Auth Required)</h2>
          <ul>
            <li><b>GET /todo</b> - Fetch all todos</li>
            <li><b>GET /todo/:id</b> - Fetch a todo by ID</li>
            <li><b>GET /todo/:userId</b> - Fetch todos by user ID</li>
            <li><b>POST /todo</b> - Create a new todo</li>
            <li><b>PUT /todo/:id</b> - Update a todo by ID</li>
            <li><b>DELETE /todo/:id</b> - Delete a todo by ID</li>
          </ul>
        </body>
      </html>
    `;
  }
}
