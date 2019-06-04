module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      // 'transform-es2015-computed-properties'
    ]
  };