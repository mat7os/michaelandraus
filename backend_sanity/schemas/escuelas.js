export default {
	name: 'escuelas',
	title: 'Escuelas',
	type: 'document',
	fields: [
        { name: 'nombre', title: 'Nombre', type: 'string' },
        
		{
			name: 'imagen',
			title: 'Imagen',
			type: 'image',
			options: {
				hotspot: true,
			},
		},

		{
            name:'grados',
            title:'Grados',
            type:'array',
            of:[{ type:'estudios'}]
        },

		{
			name: 'order',
			title: 'Order',
			type: 'number',
			hidden: true,
		},
	],
};
