const path = require('path');

module.exports = storybookBaseConfig => {
  const babelLoaderRule = storybookBaseConfig.module.rules.find(rule =>
    /\/babel-loader\//i.test(rule.loader)
  );
  const markdownLoaderRule = storybookBaseConfig.module.rules.find(
    rule =>
      rule.use && rule.use.some(use => /\/markdown-loader\//i.test(use.loader))
  );
  return {
    ...storybookBaseConfig,
    module: {
      ...storybookBaseConfig.module,
      rules: [
        ...storybookBaseConfig.module.rules.filter(
          rule => rule !== babelLoaderRule && rule !== markdownLoaderRule
        ),
        {
          ...babelLoaderRule,
          exclude: /(node_modules)[\/\\](?!(gatsby)[\/\\]).*/,
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: { importLoaders: 2 },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: { importLoaders: 2 },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')({
                    browsers: ['last 1 version', 'ie >= 11'],
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, '..', 'node_modules')],
              },
            },
          ],
        },
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.(html|svg)$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: false,
              },
            },
          ],
        },
      ],
    },
  };
};
