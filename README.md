# Performance Testing Corteza with K6

## Getting started:
1. Create a .env file based on the .env.example:
   - Set CORTEZA_URL to your Corteza vagrant URL
   - Set AUTH_JWT to the JWT used in Corteza vagrant
2. (Optional) If you want to visualize the tests with graphs:
   - run `docker-compose up -d influxdb grafana`
   - Open http://localhost:3000
   - Import the `/public/grafana_dashboard.json` config to a new dashboard.
3. Run a test script:
   - `docker-compose run k6 run /tests/<path to script>`
   - Example: `docker-compose run k6 run /tests/stories/loginAndLoad.js`

## Troubleshooting

### dial tcp 127.0.0.1: connect: connection refused

You used `localhost` or `127.0.0.1` in your CORTEZA_URL.
K6 runs inside docker container and it's localhost is not the same.

On MacOS you can use `host.docker.internal` instead of `localhost` or IP
Visit https://nickjanetakis.com/blog/docker-tip-65-get-your-docker-hosts-ip-address-from-in-a-container for more info
