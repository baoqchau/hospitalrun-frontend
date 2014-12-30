import AbstractModel from "hospitalrun/models/abstract";
import DateFormat from "hospitalrun/mixins/date-format";

export default AbstractModel.extend(DateFormat, {
    imagingDate: DS.attr('date'),
    imagingType: DS.attr('string'),
    notes: DS.attr('string'),
    patient: DS.belongsTo('patient'),
    requestedBy: DS.attr('string'),
    requestedDate: DS.attr('date'),
    result: DS.attr('string'),
    status: DS.attr('string'),
    visit: DS.belongsTo('visit'),
    
    imagingDateAsTime: function() {        
        return this.dateToTime(this.get('imagingDate'));
    }.property('imagingDate'),
    
    requestedDateAsTime: function() {
        return this.dateToTime(this.get('requestedDate'));
    }.property('requestedDate')
});