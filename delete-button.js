Template.quickRemoveButton.helpers({
  atts: function () {
    var context = this, atts = {};
    for (var prop in context) {
      if (context.hasOwnProperty(prop) &&
          prop !== "_id" &&
          prop !== "model" &&
          prop !== "onError" &&
          prop !== "onSuccess" &&
          prop !== "beforeRemove") {
        atts[prop] = context[prop];
      }
    }
    if (!atts.type) {
      atts.type = "button";
    }
    return atts;
  }
});

Template.quickRemoveButton.events({
  'click button': function (event, template) {
    var self = this;
    var model = lookup(self.model);
    if (!model || !model.__isSmartModel) {
      throw new Error("quickRemoveButton: model attribute must be set to a SmartModel instance or a string reference to a SmartModel instance that is in the window scope.");
    }
    var onError = self.onError || function (error) {
      alert("Delete failed");
      console.log(error);
    };
    var doc = model.find({_id: self._id});
    var onSuccess = self.onSuccess || function () {};
    var beforeRemove = self.beforeRemove || function () { this.remove(); };
    doc.destroy();
    if (doc.isValid) {
      onSuccess(doc);
    } else {
      onError(doc.errors);
    }
  }
});

function lookup(obj) {
  var ref = window, arr;
  if (typeof obj === "string") {
    arr = obj.split(".");
    while(arr.length && (ref = ref[arr.shift()]));
    if (!ref) {
      throw new Error(obj + " is not in the window scope");
    }
    return ref;
  }
  return obj;
}