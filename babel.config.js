module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["react-native-reanimated/plugin", {
    "relativeSourceLocation": true,
  }]
  ]
  
};

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   "plugins": [
//          ["react-native-reanimated/plugin", {
//           "inline-dotenv": "@env"
//        }
//       ]
//      ]
  // plugins: [
  //     'react-native-reanimated/plugin',
  //     'inline-dotenv',
  //     '@babel/plugin-syntax-dynamic-import',
  // ],
// };