const IS_CONTAINER = process.env.NODE_ENV === 'container';
const IS_CI = process.env.CI;

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development' || IS_CONTAINER;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

exports.IS_CONTAINER = IS_CONTAINER;
exports.IS_CI = IS_CI;
exports.IS_DEVELOPMENT = IS_DEVELOPMENT;
exports.IS_PRODUCTION = IS_PRODUCTION;

const srcRoot = '.';
const destRoot = IS_DEVELOPMENT ? './.development' : './.tmp';

exports.builded = './.production';

const srcPath = {
  root: srcRoot,
  dir: {
    app: `${srcRoot}/app`,
    stylesheet: `${srcRoot}/stylesheets`,
    image: `${srcRoot}/images`,
  },
  app: [
    `${srcRoot}/app/index.js`,
  ],
  stylesheet: [
    `${srcRoot}/stylesheets/*`,
    `${srcRoot}/stylesheets/**/*`,
  ],
  image: [
    `${srcRoot}/images/*`,
    `${srcRoot}/images/**/*`,
  ],
  sprite: [
    `${srcRoot}/sprites/*.png`,
  ],
  spritesRetina: [
    `${srcRoot}/sprites/*@2x.png`,
  ],
  font: [
    `${srcRoot}/font-svgs/**`,
  ],
};

srcPath.javascript = srcPath.app;
exports.srcPath = srcPath;

exports.destPath = {
  root: destRoot,
  app: `${destRoot}/`,
  stylesheet: `${destRoot}/`,
  image: `${destRoot}/images/`,
  font: `${destRoot}/fonts/`,
  sprite: `${destRoot}/sprites/`,
};
