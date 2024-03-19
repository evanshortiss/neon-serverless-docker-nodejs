# Neon Serverless Driver with Docker

_NOTE: This requires Docker or Podman to be installed on your machine._

Create a file named _.env_ and add your Neon connection string to it. For example:

```bash
DATABASE_URL=postgresql://neondb_owner:NjOTBLaW7k9t@ep-broad-sound-a4vf4x9z.us-east-1.aws.neon.tech/neondb?sslmode=require
```

Next, build a container image and run a container:

```bash
docker build . -t neon-docker

docker run --rm --env-file .env neon-docker
```

The `docker run` command should print:

```js
{
  version: 'PostgreSQL 16.2 on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit'
}
```
