module.export = {
	configWebpack:{
		resolve:{
			/* extensions:[], */
			alias:{
				/* '@':'src',默认 */
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views',
			}
		}
	}
}