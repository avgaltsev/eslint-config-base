Files in this directory reflect rule categories from the [official documentation](https://eslint.org/docs/rules/) cached at `cache/rules.mht`.

Search/replace regexp: `^([a-z-]+)\t(.*)`

Replace string: `\t\t\/\/ \2\n\t\t"\1": "off",\n`
