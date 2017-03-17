import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('display-reviews', 'Integration | Component | display reviews', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{display-reviews}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#display-reviews}}
      template block text
    {{/display-reviews}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
