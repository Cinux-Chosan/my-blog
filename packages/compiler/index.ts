import * as babel from "@babel/core";
import { TransformOptions, transform, BabelFileResult } from "@babel/core";

const compileConf = {
  // 博客附加脚本的编译默认配置
  blog: {
    presets: [["@babel/preset-env", { targets: { ie: "11" } }]]
  }
};

type KeysEnum<T> = { [P in keyof Partial<T>]: typeof transform };

const proxy: KeysEnum<typeof compileConf> = new Proxy(
  {},
  {
    get(target, propKey) {
      return (sourceCode: string, opt: TransformOptions) => {
        return (babel.transform(sourceCode, { ...compileConf[propKey], ...opt }) as unknown) as BabelFileResult;
      };
    }
  }
);

export default proxy;
