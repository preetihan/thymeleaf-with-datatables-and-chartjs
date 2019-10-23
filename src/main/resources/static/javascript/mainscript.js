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

$(document).ready( function () {
    $('#tblResult').DataTable({
        "dom": "<'row'<'col'l><'col'f>>" +
               "<'row't>" +
               "<'row'<'col'i><'col'p>>"
    });
});

function getRefnum(refNum){
    $.ajax({
        url: "getinfo/" + refNum,
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            var msgType;
            var pcode;

            if (res.msgType === '200')
                msgType = 'Request';
            else msgType = 'Response';

            if (res.pcode === '260000')
                pcode = 'Payment';
            else pcode = 'QR Trans';

            var html = '<div class=\'container\'> \
                           <div class=\'row\'> \
                               <div class=\'col\'><p class=\'h5\'><strong>Transaction Information</strong></p></div> \
                               <div class=\'col\'></div> \
                               <div class=\'col\'><p class=\'h5\'><strong>Merchant Information</strong></p></div> \
                               <div class=\'col\'></div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Message Type</div> \
                               <div class=\'col\'>' + isEmpty(msgType) + '</div> \
                               <div class=\'col\'>Merchant ID</div> \
                               <div class=\'col\'>' + isEmpty(res.pan) + '</div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Transaction Type</div> \
                               <div class=\'col\'>' + isEmpty(pcode) + '</div> \
                               <div class=\'col\'>Merchant Name</div> \
                               <div class=\'col\'>' + isEmpty(res.acceptorname) + '</div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Transaction Date</div> \
                               <div class=\'col\'>' + isEmpty(res.localDate) + '</div> \
                               <div class=\'col\'>Country Code</div> \
                               <div class=\'col\'>' + isEmpty(res.acqCountry) + '</div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Transaction Time</div> \
                               <div class=\'col\'>' + isEmpty(res.localTime) + '</div> \
                               <div class=\'col\'>Terminal ID</div> \
                               <div class=\'col\'>' + isEmpty(res.termid) + '</div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Settlement Date</div> \
                               <div class=\'col\'>' + isEmpty(res.settlementDate) + '</div> \
                               <div class=\'col\'>Merchant Category Code</div> \
                               <div class=\'col\'>' + isEmpty(res.merchantType) + '</div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Acquiring Bank</div> \
                               <div class=\'col\'>' + isEmpty(res.acquirer) + '</div> \
                               <div class=\'col\'>System Trace Number</div> \
                               <div class=\'col\'>' + isEmpty(res.trace) + '</div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Issuing Bank</div> \
                               <div class=\'col\'>' + isEmpty(res.issuer) + '</div> \
                               <div class=\'col\'>Retrieval Reference Number</div> \
                               <div class=\'col\'>' + isEmpty(res.refnum) + '</div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Local Amount</div> \
                               <div class=\'col\'>' + isEmpty(Number(res.amount).toFixed(2).toLocaleString()) + '</div> \
                               <div class=\'col\'></div> \
                               <div class=\'col\'></div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Local Currency</div> \
                               <div class=\'col\'>' + isEmpty(res.acqCurrencyCode) + '</div> \
                               <div class=\'col\'></div> \
                               <div class=\'col\'></div> \
                           </div> \
                           <br> \
                           <div class=\'row\'> \
                               <div class=\'col\'><p class=\'h5\'><strong>Authorization Information</strong></p></div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Approval Code</div> \
                               <div class=\'col\'>' + isEmpty(res.authnum) + '</div> \
                               <div class=\'col\'></div> \
                               <div class=\'col\'></div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Response Code</div> \
                               <div class=\'col\'>' + isEmpty(res.respcode) + '</div> \
                               <div class=\'col\'></div> \
                               <div class=\'col\'></div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Billing Amount</div> \
                               <div class=\'col\'>' + isEmpty(Number(res.chAmount).toFixed(2).toLocaleString()) + '</div> \
                               <div class=\'col\'></div> \
                               <div class=\'col\'></div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Billing Currency</div> \
                               <div class=\'col\'>' + isEmpty(res.issCurrencyCode) + '</div> \
                               <div class=\'col\'></div> \
                               <div class=\'col\'></div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Conversion Rate</div> \
                               <div class=\'col\'>' + isEmpty(res.issConvRate) + '</div> \
                               <div class=\'col\'></div> \
                               <div class=\'col\'></div> \
                           </div> \
                           <div class=\'row\'> \
                               <div class=\'col\'>Transaction Fee Amount</div> \
                               <div class=\'col\'>' + isEmpty(Number(res.fee).toFixed(2).toLocaleString()) + '</div> \
                               <div class=\'col\'></div> \
                               <div class=\'col\'></div> \
                           </div> \
                       </div>';
                $('#txnInfoModal .modal-body').html(html);
                $('#txnInfoModal').modal('show');
        },
        error: function(res) {
           console.log(res);
        }
    });
}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? '' : val;
}

$( document ).ready( function(){
    history.pushState(null,  document.title, location.href);
});