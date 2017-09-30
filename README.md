# Logging to Graylog from Node using Bunyan

Read the [Graylog docker installation docs](http://docs.graylog.org/en/2.3/pages/installation/docker.html) first.

Graylog has dependencies on Mongo and Elasticsearch which I didn't know. Elasticsearch is cool.

Build the node image with:

```
docker build -t bunyan-node .
```

Then run docker compose up build.

Testing the endpoint using http is easy:

```
curl -XPOST http://localhost:12201/gelf -p0 -d '{"short_message":"Hello there", "host":"example.org", "facility":"test", "_foo":"bar"}'
```

However, as we are using streams you have to set up Graylog to accept UCP streams.

Voila.
