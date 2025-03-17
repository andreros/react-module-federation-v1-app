const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
	require("webpack").container.ModuleFederationPlugin;
const ModuleFederationTypesPlugin =
	require("@cloudbeds/webpack-module-federation-types-plugin").ModuleFederationTypesPlugin;
const path = require("path");
const packageJson = require("./package.json");
const { DefinePlugin } = require("webpack");
const dotEnv = require("dotenv");

const env = process.env.NODE_ENV || "development";
const envVars = dotEnv.config().parsed || process.env;
const mfe1RemoteEntry =
	(envVars
		? envVars.REACT_APP_MFE1_REMOTE_ENTRY
		: process.env.REACT_APP_MFE1_REMOTE_ENTRY) || "";
const publicUrl =
	(envVars ? envVars.PUBLIC_URL : process.env.PUBLIC_URL) || "/public";

const transformEnvVars = (envVars) => {
	const transformEnvVars = {};

	Object.keys(envVars).forEach((key) => {
		transformEnvVars[key] = JSON.stringify(envVars[key]);
	});

	return transformEnvVars;
};

const transformDependencies = (deps) => {
	const transformDependencies = {};

	Object.keys(deps).forEach((key) => {
		transformDependencies[key] = {
			eager: true,
			singleton: true,
			requiredVersion: deps[key],
		};
	});

	return transformDependencies;
};

module.exports = {
	entry: "./src/index",
	mode: env,
	devServer: {
		static: [
			{
				directory: path.join(__dirname, "public"),
			},
		],
		compress: true,
		port: 3001,
		historyApiFallback: true,
	},
	output: {
		path: path.resolve(__dirname, "public"),
		publicPath: "/",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@hooks": path.resolve(__dirname, "src/hooks/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
			"@routes": path.resolve(__dirname, "src/routes/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				loader: "ts-loader",
				exclude: /node_modules/,
				options: {
					transpileOnly: true,
				},
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "host",
			remotes: {
				mfe1: `mfe1@${mfe1RemoteEntry}`,
			},
			shared: {
				...transformDependencies(packageJson.dependencies),
			},
		}),
		new ModuleFederationTypesPlugin({
			downloadTypesWhenIdleIntervalInSeconds: 120,
		}),
		new HtmlWebpackPlugin({
			template: "src/index.html",
			templateParameters: {
				PUBLIC_URL: publicUrl,
			},
		}),
		new DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
				...transformEnvVars(envVars),
			},
		}),
	],
};
