import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

export const buildResolvers = ():webpack.ResolveOptions => {
    
    return{
      extensions: ['.tsx', '.ts', '.js'],
    }
}