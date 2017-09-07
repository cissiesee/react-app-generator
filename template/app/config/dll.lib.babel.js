import webpack from "webpack";
import path from "path";
import { libPath } from "./constant";

const vendors = ['immutable'];

export default {
	output: {
		path: path.resolve(__dirname, libPath),
		filename: '[name].js',
		library: '[name]'
	},
	entry: {
		"lib": vendors
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.resolve(__dirname, libPath + '/manifest-lib.json'),
			name: '[name]',
			context: __dirname
		})
	],
};