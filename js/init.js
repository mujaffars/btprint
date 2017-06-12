$(function () { // DOM ready

    //init_game();

});

/**
 * Ready helper that sets the function when device ready or dom ready
 */
var Ready = function (func) {
    var event = /https?:\/\//.test(window.document.URL) ? 'DOMContentLoaded' : 'deviceready';
    window.document.addEventListener(event, func, false);
};

var btPrintHandling = {
    textButton: "0",
    initialize: function () {
        btPrintHandling.textButton = "0";
        document.addEventListener("deviceready", btPrintHandling.createFile, false);
    },
    listButtonClicked: function () {
        document.addEventListener("deviceready", btPrintHandling.listPrinter, false);
    },
    connectButtonClicked: function () {
        document.addEventListener("deviceready", btPrintHandling.connectPrinter, false);
    },
    disconnectButtonClicked: function () {
        document.addEventListener("deviceready", btPrintHandling.disconnect, false);
    },
    printButtonClicked: function () {
        document.addEventListener("deviceready", btPrintHandling.printText, false);
    },
    listPrinter: function () {
        BTPrinter.list(function (data) {
            console.log("Success");
            console.log(data); //list of printer in data array
            alert(data);
        }, function (err) {
            console.log("Error");
            console.log(err);
        });
    },
    connectPrinter: function () {
        alert('inside connect');
        var printerName = $('#txtPrinterName').val();
        BTPrinter.connect(function (data) {
            console.log("Success");
            console.log(data);
            alert(data);
        }, function (err) {
            console.log("Error");
            console.log(err)
        }, printerName)
    },
    disconnectPrinter: function () {
        alert('inside disconnect');
        var printerName = $('#txtPrinterName').val();
        BTPrinter.disconnect(function (data) {
            console.log("Success");
            console.log(data);
            alert('printer disconnected');
        }, function (err) {
            console.log("Error");
            console.log(err)
        }, printerName)
    },
    printText: function () {
        alert('inside print');
        var stringToPrint = $('#txtStringToPrint').val();
        BTPrinter.printText(function (data) {
            console.log("Success");
            console.log(data);
            alert('Text Printed');
        }, function (err) {
            console.log("Error");
            console.log(err)
        }, stringToPrint)
    },
    fail: function (evt) {
        alert(evt.target.error.code);
    }

};

btPrintHandling.initialize();