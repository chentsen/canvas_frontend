App.CanvasView = Ember.View.extend({
  templateName: 'canvas',
  
  didInsertElement: function() {
    console.debug('canvasView inserted');
    var self = this;

    $('.carousel-control.left').on('click', function () {
      var model = self.get('controller.model');
      var controller = self.get('controller');

      var prevModelId = Number(model.get('id')) - 1;
      if (prevModelId < 1) {
        prevModelId = App.model.Canvas.FIXTURES.length;
      }
      controller.transitionToRoute('canvas', App.model.Canvas.find(prevModelId));
    });

    $('.carousel-control.right').on('click', function () {
      var model = self.get('controller.model');
      var controller = self.get('controller');

      var nextModelId = Number(model.get('id')) + 1;
      console.debug(nextModelId);
      if (nextModelId > App.model.Canvas.FIXTURES.length) {
        nextModelId = 1;
      }
      controller.transitionToRoute('canvas', App.model.Canvas.find(nextModelId));
    });
  }

}); 