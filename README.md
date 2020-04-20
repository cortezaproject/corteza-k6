# Performance Testing Corteza with K6

## Getting started:
1. Create a .env file based on the .env.example
2. (Optional) If you want to visualize the tests with graphs:
   - run `docker-compose up -d influxdb grafana`
   - Open http://localhost:3000
   - Import the `/public/grafana_dashboard.json` config to a new dashboard.
3. Run a test script:
   - `docker-compose run k6 run /tests/<path to script>`
   - Example: `docker-compose run k6 run /tests/stories/login.js`
