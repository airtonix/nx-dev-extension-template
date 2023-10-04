# setup-yarn

Installs node modules with yarn

## Requirements

- `package.json`
- yarn available


## Usage

```yml
  Release:

    runs-on: ubuntu-latest

    permissions:
      contents: write
      deployments: write

    steps:

      - uses: actions/checkout@v3

      - name: Setup tooling
        uses: ./pkg/ci/setup-tooling
        env:
          ASDF_PLUGINS: "(nodejs yarn)"

      - name: Install modules
        uses: ./pkg/ci/setup-yarn
```
