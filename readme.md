# Node.js Server with Nginx Load Balancing, Caching & Reverse Proxy

This project demonstrates a simple Node.js server using Express, along with an Nginx configuration for load balancing and caching. The server provides endpoints for retrieving data and handling POST requests.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Nginx Configuration](#nginx-configuration)
- [Endpoints](#endpoints)
- [License](#license)

## Features

- Simple Node.js server with Express.
- GET endpoints for cached and uncached data.
- POST endpoint for receiving data.
- Nginx configuration for load balancing between multiple server instances.
- Caching support for specific endpoints.

## Requirements

- Node.js (v12 or later)
- Nginx
- npm (Node Package Manager)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arpit-ayeeee/SystemPrototypes/nGinxProto.git
   cd node-nginx-example

2. **Install dependencies**:
   Navigate to the directory containing `server.js` and run:
   ```bash
   npm install express
   ```

3. **Start the Node.js server**:
   ```bash
   node server.js
   ```

4. **Set up Nginx**:
   Make sure you have Nginx installed and configured on your system. Place the Nginx configuration in the appropriate config file (usually located at `/etc/nginx/nginx.conf` on Linux or in the Nginx installation directory on Windows).

## Usage

1. **Run the Node.js server** on port 3000:
   ```bash
   node server.js
   ```

2. **Configure Nginx** to listen on port 8000. Make sure to point to your Node.js server instances running on ports 3000 and 3001.

3. **Send requests** to the Nginx server:
   - For uncached data:
     ```bash
     curl http://localhost:8000/data/1
     ```

   - For cached data:
     ```bash
     curl http://localhost:8000/data/1/value
     ```

   - To send data via POST:
     ```bash
     curl -X POST http://localhost:8000/data -H "Content-Type: application/json" -d '{"key":"value"}'
     ```

## Nginx Configuration

The Nginx configuration is set to handle load balancing and caching for two instances of the Node.js server running on ports 3000 and 3001.

### Key Configuration Highlights

- **Upstream block** defines the backend servers for load balancing.
- **Caching** is configured for specific endpoints matching the pattern `/data/{}/{}`
- **Proxy settings** ensure that the original request details are forwarded to the Node.js server.

## Endpoints

- `GET /data/:id` - Responds with uncached data.
- `GET /data/:id/:value` - Responds with cached data.
- `POST /data` - Accepts JSON data and responds with a confirmation message.

### Example Response
For the POST request:
```json
{
  "message": "Data received successfully!",
  "receivedData": {
    "key": "value"
  }
}
```

### NGINX Commands
- start nGinx
- nGinx -s stop
- nGinx -s reload