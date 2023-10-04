# setup-pnpm

Configures your workflow for publishing to the repos Github Package Registry.

> 🛑 Auth Token
>
> It is required that you provide an auth token.
>
> You can use either of the following:
>
>     secrets.BOT_TOKEN
>
> or
>
>     secrets.GITHUB_TOKEN


## Usage

```yml
  Release:

    runs-on: ubuntu-latest

    permissions:
      contents: write
      deployments: write

    steps:

      - uses: actions/checkout@v3


      - name: Enable publishing to GHPR
        uses: ./pkg/ci/setup-node-ghpr
        with:
          GithubToken: ${{secrets.BOT_TOKEN}}
```
