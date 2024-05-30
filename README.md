# Strapi with `@innovato/strapi-plugin-cron` for development

**This repository is supplementary to [@innovato/strapi-plugin-cron](https://github.com/innovato/strapi-plugin-cron)**

## 📦 🔧 Installation & Development

Clone this Strapi project

```
https://github.com/mjnoach/strapi--strapi-plugin-cron.git
```

Clone `@innovato/strapi-plugin-cron` into `src/plugins`

```
git submodule update --init --remote
```

Set up environment variables

```
cp .env.example .env
```

Install and build

```
bun i
cd src/plugins/strapi-plugin-cron
bun run build
cd ../../..
```

For plugin's server code to hot reload it is required to keep the development server of the plugin module on. Otherwise only the frontend code in `[plugin]/admin` will hot reload.

```
cd src/plugins/strapi-plugin-cron
bun dev
cd ../../..
```

Run in development mode

```
bun dev
```
