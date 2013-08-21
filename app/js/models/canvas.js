App.Canvas = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  contributors: DS.hasMany('App.User'),
  owner: DS.belongsTo('App.User')
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