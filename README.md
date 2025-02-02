# Strapi with `@innovato/strapi-plugin-cron` for development

**This repository is supplementary to [@innovato/strapi-plugin-cron](https://github.com/innovato/strapi-plugin-cron)**

## 📦 🔧 Installation & Development

### 1. Clone this Strapi project

```
https://github.com/mjnoach/strapi--strapi-plugin-cron.git
```

### 2. Clone `@innovato/strapi-plugin-cron` into an independent directory and create create a symlink betweet the two projects

```
ln -s ~/[path-to]/strapi-plugin-cron src/plugins/strapi-plugin-cron
```

This serves a better workflow than the below instruction, when developing a Strapi application and a plugin separately on local machine.

### ~~2. Clone `@innovato/strapi-plugin-cron` into `src/plugins`~~

~~git submodule update --init --remote~~

### 3. Set up environment variables

```
cp .env.example .env
```

### 4. Install and build

```
yarn i
cd src/plugins/strapi-plugin-cron
yarn run build
cd ../../..
```

### 5. For plugin's server code to hot reload it is required to keep the development server of the plugin module on. Otherwise only the frontend code in `[plugin]/admin` will hot reload.

```
cd src/plugins/strapi-plugin-cron
yarn dev
cd ../../..
```

### 6. Run in development mode

```
yarn dev
```
