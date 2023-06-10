import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths, WebpackConfiguration } from './config/build/types/config';


export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';

  const config: WebpackConfiguration = buildWebpackConfig({ mode, paths, isDev, port });

  return config;
};
