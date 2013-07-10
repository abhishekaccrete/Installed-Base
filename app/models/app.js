exports.definition = {
	config: {
		columns: {
		    "platformWidth": "real",
		    "platformHeight": "real",
		    "osname": "string",
		    "imgPath": "string"
		},
		
		adapter: {
			type: "sql",
			collection_name: "app"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

