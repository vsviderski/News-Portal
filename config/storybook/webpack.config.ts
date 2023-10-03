import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import buildCssLoader from '../build/loaders/buildCssLoader';
import buildSvgLoader from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config?.resolve?.modules?.push(paths.src);
    config?.resolve?.extensions?.push('.ts', '.tsx');

    // По дефолту в сторибучной сборке стоит другой лоадер для SVG, мы используем svgr, поэтому необходимо его подменить
    // @ts-ignore: Unreachable code error
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules?.push(buildSvgLoader());
    config.module?.rules?.push(buildCssLoader(true));
    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true
    }))

    return config;
};
