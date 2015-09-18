import DS from 'ember-data';
var attr = DS.attr,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	name: attr('string'),
	track: attr('number'),
	duration: attr('number'),
	url: attr('string'),
	album: belongsTo('album')
});
