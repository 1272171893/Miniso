module.exports = ({ config, mode }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                return prop.parent.fileName.indexOf("node_modules")===-1;
              }
              return true;
            },
          },
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  };
  