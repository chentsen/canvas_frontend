App.model.Canvas = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  contributors: DS.hasMany('App..model.User'),
  owner: DS.belongsTo('App.model.User'),
  folder: DS.attr('string'),
  canEdit: DS.attr('boolean')
});

/*
{
  "id": self.id,
  "contributors": self.contributors,
  "name": self.name,
  "description": self.description,
  "timestamp": self.timestamp,
  "visibility": self.visibility,
  "owner_id": self.owner.id
}
*/