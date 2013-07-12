exports.definition = {
    config: {
        columns: {
            platformWidth: "real",
            platformHeight: "real",
            osname: "string",
            imgPath: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "app"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("app", exports.definition, []);

collection = Alloy.C("app", exports.definition, model);

exports.Model = model;

exports.Collection = collection;