import * as path from 'path';
import yargs from 'yargs';
import merge from 'lodash.merge';
import { WebpackOptions } from 'webpack/declarations/WebpackOptions';
import { PATH_PROJECT } from '../constants';
import isPathToFileMatches from './isPathToFileMatches';

const argv = yargs.argv;

/**
 * Merge custom webpack config with default ones.
 * @param source - webpack client options
 * @param options - { production: whether in production mode or not; template: expression for template file }
 */
export default function createWebpackServerConfig(source: WebpackOptions, options: { production?: boolean } = {}): WebpackOptions {
  // eslint-disable-next-line
  // @ts-ignore
  const production = typeof options.production !== 'undefined'
    ? options.production : (argv.mode ? argv.mode === 'production' : false);

  return merge({
    entry: {
      server: path.resolve(PATH_PROJECT, 'src', 'server.js')
    },

    target: 'node',

    node: {
      __dirname: true,
      __filename: true,
    },

    output: {
      path: path.resolve(PATH_PROJECT, 'build', 'server'),
      filename: '[name].js'
    },

    optimization: {
      providedExports: true,
      sideEffects: true,
      minimize: false
    },

    devServer: {
      writeToDisk: (pathToFile: string) => isPathToFileMatches(pathToFile, 'server.js'),
      contentBase: path.join(PATH_PROJECT, 'build', 'server'),
      overlay: true,
      compress: true,
    }
  }, source);
}
