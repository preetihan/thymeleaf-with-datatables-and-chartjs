// Date Picker
$(function () {
    $('#startdate').datetimepicker({
        icons: {
            time: "glyphicon glyphicon-time text-primary",
            date: "glyphicon glyphicon-calendar text-primary",
            up: "glyphicon glyphicon-arrow-up text-primary",
            down: "glyphicon glyphicon-arrow-down text-primary",
            previous: 'glyphicon glyphicon-chevron-left',
            next: 'glyphicon glyphicon-chevron-right',
        },
        format: "DD/MM/YYYY HH:mm:ss",
        widgetPositioning: {
            horizontal: 'left'
        }
    });
    $('#enddate').datetimepicker({
        useCurrent: false,
        icons: {
            time: "glyphicon glyphicon-time text-primary",
            date: "glyphicon glyphicon-calendar text-primary",
            up: "glyphicon glyphicon-arrow-up text-primary",
            down: "glyphicon glyphicon-arrow-down text-primary",
            previous: 'glyphicon glyphicon-chevron-left',
            next: 'glyphicon glyphicon-chevron-right',
        },
        format: "DD/MM/YYYY HH:mm:ss",
        widgetPositioning: {
            horizontal: 'left'
        }
    });
    $("#startdate").on("change.datetimepicker", function (e) {
        $('#enddate').datetimepicker('minDate', e.date);
    });
    $("#enddate").on("change.datetimepicker", function (e) {
        $('#startdate').datetimepicker('maxDate', e.date);
    });
});

jQuery.fn.datetimepicker.Constructor.prototype._origSetValue = jQuery.fn.datetimepicker.Constructor.prototype._setValue;
jQuery.fn.datetimepicker.Constructor.prototype._setValue = function _setValue(targetMoment, index) {
	var oldDate = this.unset ? null : this._dates[index];
	var outpValue = '';
	if (!targetMoment && (!this._options.allowMultidate || this._dates.length === 1)) {
		this.unset = true;
		this._dates = [this.getMoment()];
		this._datesFormatted = [];
		this._viewDate = this.getMoment().locale(this._options.locale).clone();
		if (this.input !== undefined) {
			this.input.val('');
			this.input.trigger('input');
		}
		this._element.data('date', outpValue);
		this._notifyEvent({
			type: jQuery.fn.datetimepicker.Constructor.Event.CHANGE,
			date: false,
			oldDate: oldDate
		});
		this._update();
	}
	else
	{
		this._origSetValue(targetMoment, index);
	}
};

$(document).ready( function () {
    $('#tblResult').DataTable({
        "dom": "<'row'<'col'l><'col'f>>" +
               "<'row't>" +
               "<'row'<'col'i><'col'p>>"
    });
});

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? '' : val;
}

$( document ).ready( function(){
    history.pushState(null,  document.title, location.href);
});

$(".modal-dialog").draggable({
    handle: ".modal-header"
});