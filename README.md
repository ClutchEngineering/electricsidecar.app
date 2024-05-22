

## Workspace setup

```
npm i -g http-server
http-server
```
fr
In a separate terminal:

```
npx tailwindcss -i ./.src/main.css -o ./css/main.css --watch
```

For production:

```
npx tailwindcss -i ./.src/main.css -o ./css/main.css --minify
```
