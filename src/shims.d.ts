declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "element-ui/lib/locale/lang/*" {
  export const elementLocale: any;
}

declare module "vue-cropper";
