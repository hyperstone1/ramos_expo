const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

// Точки входа для ваших страниц
const entryPoints = {
	index: path.resolve(__dirname, 'src', 'index.js'),
	about: path.resolve(__dirname, 'src', 'index.js'),
	projects: path.resolve(__dirname, 'src', 'index.js'),
	contacts: path.resolve(__dirname, 'src', 'index.js'),
	detail: path.resolve(__dirname, 'src', 'index.js'),
	services: path.resolve(__dirname, 'src', 'index.js'),
	stands: path.resolve(__dirname, 'src', 'index.js'),
	// Добавьте другие страницы здесь
};

// Создаем экземпляры HtmlWebpackPlugin для каждой страницы
const htmlPlugins = Object.keys(entryPoints).map((entryName) => {
	return new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'src', `${entryName}.html`),
		filename: `${entryName}.html`, // Имя файла для каждой страницы
		chunks: 'all', // Укажите, какой бандл связать с каждой страницей
	});
});

module.exports = {
	mode,
	target,
	devtool,
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		watchFiles: ['src/*.html'],
	},
	//откуда билдить проект
	entry: {
		main: path.resolve(__dirname, 'src', 'index.js'),
	},

	output: {
		//куда выводит билд
		path: path.resolve(__dirname, 'dist'),
		//очистка билда перед сборкой нового
		clean: true,
		//название js файла в билде
		// [name] - стандартный по вебпаку (main), [contenthash] - добавляептся хэш к названию
		filename: '[name].js',
		// assetModuleFilename: 'assets/images',
	},
	optimization: {
		minimizer: [
			'...', // Здесь могут быть другие плагины для минимизации (например, TerserPlugin для минификации JavaScript)
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify, // Выбор реализации минимизации изображений
					options: {
						plugins: [
							'imagemin-gifsicle', // Плагин для оптимизации GIF изображений
							'imagemin-mozjpeg',  // Плагин для оптимизации JPEG изображений
							'imagemin-pngquant', // Плагин для оптимизации PNG изображений
							'imagemin-svgo',     // Плагин для оптимизации SVG изображений
						],
					},
				},
				generator: [
					{
						preset: 'webp',
						implementation: ImageMinimizerPlugin.imageminGenerate,
						options: {
							plugins: ['imagemin-webp'],
						},
					},
				],
			}),
		],
		minimize: true, // Отключение минификации
		// mangle: false, // Отключение замены имен переменных
	},
	plugins: [
		//сборщик html
		// new HtmlWebpackPlugin({
		//   template: path.resolve(__dirname, 'src', 'index.html'),
		// }),
		...htmlPlugins,
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],

	module: {
		rules: [
			//html
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},

			// css,scss
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							},
						},
					},
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			// шрифты
			{
				test: /\.(woff|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]',
				},
			},
			// изображения
			{
				test: /\.(jpe?g|png|webp|gif|svg)$/i,
				use: devMode
					? []
					: [
						{
							loader: 'image-webpack-loader',
							options: {
								mozjpeg: {
									progressive: true,
								},
								optipng: {
									enabled: false,
								},
								pngquant: {
									quality: [0.65, 0.9],
									speed: 4,
								},
								gifsicle: {
									interlaced: false,
								},
								webp: {
									quality: 75,
								},
							},
						},
					],
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name][ext]',
				},
			},

			//js
			{
				test: /\.(?:js|mjs|cjs)$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
		],
	},
};
