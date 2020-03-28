
<h1 align="center">
  gatsby-playground
</h1>

Playing around with GatsbyJS

## Usage

Everything runs in a docker container.

First build the container with

```console
docker-compose build
```

Note that the `node-modules` directory will be empty but it is OK.  
It exits in the container.

Then up to start development

```console
docker-compose up
```

When adding dependencies

```console
docker-compose run --rm web npm install <package>
```

When building

```console
docker-compose run --rm web npm run build
```

## Author

[Tomoya Sawada](https://github.com/STomoya/)
