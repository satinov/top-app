export const NEXT_PUBLIC_DOMAIN='https://courses-top.ru'

export const API = {
	topPage: {
		find: NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		byAlias: NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/'
	},
	product: {
		find: NEXT_PUBLIC_DOMAIN + '/api/product/find'
	},
	review: {
		createDemo: NEXT_PUBLIC_DOMAIN + '/api/review/create-demo'
	}
};