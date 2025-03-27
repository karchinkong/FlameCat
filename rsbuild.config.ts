import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginLess } from "@rsbuild/plugin-less";
import AutoImport from "unplugin-auto-import/rspack";
import Components from "unplugin-vue-components/rspack";
import { VantResolver } from "@vant/auto-import-resolver";
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';

export default defineConfig({
  plugins: [pluginVue(), pluginLess(), pluginImageCompress()],
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          resolvers: [VantResolver()],
        }),
        Components({
          resolvers: [VantResolver()],
        }),
      ],
    },
  },
  output: {
    assetPrefix: '/FlameCat/'
  }
});
