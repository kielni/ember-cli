import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('<%= dasherizedModuleName %>', {
  // Specify the other units that are required for this test.
<%= typeof needs !== 'undefined' ? needs : '' %>
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
