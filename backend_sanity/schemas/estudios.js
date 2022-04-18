export default {
	name: 'estudios',
	title: 'Estudios',
	type: 'document',
	fields: [
        { name: 'nombre', title: 'nombre', type: 'string' },
        
        {
            name:'year',
            title:'Year',
            type:'string'
        },
		{
			name: 'desc',
			title: 'Desc',
			type: 'string',
		},

		{
			name: 'order',
			title: 'Order',
			type: 'number',
			hidden: true,
		},
	],
};
