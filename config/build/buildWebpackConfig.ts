import webpack from "webpack";
import { BuildOptions } from "./types/config";
import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import  buildPlugins  from './buildPlugins'
import { buildLoaders } from './buildLoader'
import { buildResolvers } from './buildResolve'
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions):webpack.Configuration => {
    const {paths, mode, isDev} = options
    return{
        mode:mode,
        entry: paths.entry,
        output:{
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options) ,
        module: {
        rules: buildLoaders(options)
      },
      resolve: buildResolvers(),
      devtool: isDev ? 'inline-source-map': undefined,
      devServer: isDev ? buildDevServer(options): undefined,
      }
}