const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people:[],
			character: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addRemoveFavorite: (fav)=>{
				const store = getStore();
				const isFavorite = store.favorites.some(el=> el.uid === fav.uid && el.type===fav.type);
				if (isFavorite) {
					setStore({
						favorites: store.favorites.filter(el=> !(el.uid === fav.uid && el.type===fav.type))
					})
				} else {
					setStore({favorites: [...store.favorites, fav]})
				}
				
			},
			getData: async (type) => {
				try {
					const resp = await fetch(`${getStore().url}/${type}`);
					if (!resp.ok) throw new Error('Error fetching people');
					const data =  await resp.json();
					setStore({[type]: data.results});
				} catch (error) {
					console.error(error);				
				}
			},
			getOne: async (type, uid) => {
				try {
					const resp = await fetch(`${getStore().url}/${type}/${uid}`);
					if (!resp.ok) throw new Error('Error fetching character');
					const data =  await resp.json();
					setStore({detailed: data.result});
				} catch (error) {
					console.error(error);				
				}
			},
		}
	};
};

export default getState;