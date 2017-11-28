### Many-to-Many Relationships
* Consider the following models:
  
```javascript
// models/tag.js
module.exports = function(sequelize, DataTypes){
	var Tag = sequelize.define('Tag', {
		name : DataTypes.STRING
	}, {
		classMethods : {
			associate : function(models) {
				Tag.belongsToMany(models.Post, {
					through : { // The join table
						model : models.Itemtag,
						unique : false
					},
					foreignKey : 'tag_id'
				});
			}
		}
	});

	return Tag;
};

// models/Itemtag.js
module.exports = function(sequelize, DataTypes){
	var Itemtag = sequelize.define('Itemtag', {
		tag_id : {
			type : DataTypes.INTEGER,
			unique : 'item_tag_taggable'
		},
		taggable : {
			type : DataTypes.STRING,
			unique : 'item_tag_taggable' // category of tagged item
		},
		taggable_id : {
			type : DataTypes.INTEGER,
			unique : 'item_tag_taggable',
			references : null
		}
	});

	return Itemtag;
};

// models/post.js
module.exports = function(sequelize, DataTypes){
	var Post = sequelize.define('Post', {
		text : DataTypes.STRING
	}, {
		classMethods : {
			associate : function(models){
				Post.belongsToMany(models.Tag, {
					through : {
						model : models.Itemtag,
						unique : false,
						scope : {
							taggable : 'post'
						}
					},
					foreignKey : 'taggable_id',
					constraints : false
				});
			}
		}
	});
	return Post;
};
```
  
* In the above models we define a 'Post', a 'Tag', and a join table 'Itemtag'.
  
* The `Model.belongsToMany(model, {options})` method allows us to indicate a many-to-many relationship.
  * the `through` property dictates what join table will be used (in this case the Itemtag table), as well as any additional options.
  * the `foreignKey` property defines just that, the referenced foreign key on the join table.
  
* Using the above example, you could add a new tag to a post with the following controller method:
  
```javascript
// assume POST /posts/:id/tags/:tid
module.exports.addTag = function(req,res){
	models.Tag.findById(req.params.tid)
		.then(function(tag){
			models.Post.findById(req.params.id)
				.then(function(post){
					post.addTag(tag)
						.then(res.sendStatus(201));
				})
		})
};
```
  
* The above method first finds the Tag associated with the provided 'tid', then finds the Post associated with 'id', then uses the `Model.addAssociation(model)` method to create the association through the join table automatically.
  
* When queried, the resulting json will be something like this:
  
```json
[
  {
    "id": 1,
    "text": "This is a post",
    "createdAt": "2016-05-30T23:18:13.000Z",
    "updatedAt": "2016-05-30T23:18:13.000Z",
    "Tags": [
      {
        "id": 1,
        "name": "tagged!",
        "createdAt": "2016-05-30T23:19:49.000Z",
        "updatedAt": "2016-05-30T23:19:49.000Z",
        "Itemtag": {
          "tag_id": 1,
          "taggable": "post",
          "taggable_id": 1,
          "createdAt": "2016-05-30T23:32:44.000Z",
          "updatedAt": "2016-05-30T23:32:44.000Z"
        }
      }
    ]
  }
]
```
  
#### Continue to [Labs](15_Labs.md)