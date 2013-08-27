App.GridView = Ember.View.extend({
  templateName: 'grid',
  
  didInsertElement: function() {
    console.debug('gridView inserted');

    //console.debug(this.get('controller.model'));
    this.renderGrid();
    //console.debug(model);
    //debugger

    this.addObserver('controller.model', this, this.rerenderGrid);


    //this.addObserver(model, this, this.rerender);
  },

  renderGrid: function() {
    var $container = $(".gridster").append('<ul></ul>');
    $container.gridster({
      widget_margins: [0, 0],
      widget_base_dimensions: [140, 140],
      max_cols: 8,
      max_size_x: 8,
      responsive: true,
      autogenerate_stylesheet: false
    });

    cnvs.grid = $(".gridster ul").gridster().data('gridster');

    var model = this.get('controller.model');
    var folder = model.get('folder');

    if(!model.get('canEdit')) {
      console.debug('77777');
      cnvs.grid.disable();
    }

    for (var i = 0; i < 8; i++) {
      cnvs.grid.add_widget('<li class="tile-container" style="background:#000 url(\'dummy_data/' + folder + '/' + i + '.jpg\') no-repeat center center;"></li>', 2, 2, (1 + (i*2))%8, 1);
    }
  }

  , rerenderGrid: function() {
    cnvs.grid.destroy();
    this.renderGrid();
  }
}); 