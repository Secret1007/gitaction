import { defineConfig, AliasOptions } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import vue from "@vitejs/plugin-vue";
import VueMacros from "unplugin-vue-macros/vite";

export default defineConfig({
  base: "./",
});
