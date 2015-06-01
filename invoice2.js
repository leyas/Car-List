(function(angular) {
  'use strict';
angular.module('invoice2', ['finance2'])
  .controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
    this.qty = 1;
    this.inCurr = 'PLN';
    this.currencies = currencyConverter.currencies;

    this.total = function total(outCurr) {
      return currencyConverter.convert(this.qty, this.inCurr, outCurr);
    };
    this.pay = function pay() {
      window.alert("Masz do zapłacenia " + currencyConverter.convert(this.qty, this.inCurr, 'PLN') + "zł");
    };
  }]);
})(window.angular);