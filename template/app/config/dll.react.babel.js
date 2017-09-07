import webpack from "webpack";
import path from "path";
import { libPath } from "./constant";

const vendors = ['react', 'react-immutable-render-mixin', 'react-dom', 'react-transition-group', 'react-router', 'react-router-dom', 'redux', 'redux-thunk', 'react-redux'];

export default {
	output: {
		path: path.resolve(__dirname, libPath),
		filename: '[name].js',
		library: '[name]'
	},
	entry: {
		"reactRel": vendors
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.resolve(__dirname, libPath + '/manifest-react.json'),
			name: '[name]',
			context: __dirname
		})
	],
};