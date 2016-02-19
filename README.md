delete-button
=========================

A Meteor package that provides a delete button UI component. You need the [smart-record](https://github.com/tamino-martinius/meteor-smart-record) package to provide the model.

## Installation

In your Meteor app directory, enter:

```
$ meteor add zaku:smart-form-delete-button
```

## Usage

The UI component, `quickRemoveButton`, can be used with or without a block:

```html
{{> quickRemoveButton model="TestModel" _id=this._id}}

<!-- OR -->

{{#quickRemoveButton model="TestModel" _id=this._id}}Delete Me{{/quickRemoveButton}}
```

When used without block content, the content of the delete button will be the word "Delete".

At minimum, you need to provide the `model` and `_id` attributes:

* `model`: Set this to a helper that returns a `SmartModel` instance or to a string that identifies a `SmartModel` instance that is in the `window` scope.
* `_id`: Set this to the `_id` of the document you want the button to remove.

### Example

*HTML:*

```html
<template name="docList">
  <div class="container">
    {{#each docs}}
    <div class="panel panel-default">
      <div class="panel-body">
      {{this.name}} | {{> quickRemoveButton model="TestModel" _id=this._id class="btn btn-danger"}}
      </div>
    </div>
    {{/each}}
  </div>
</template>
```

*JavaScript:*

```js
TestModel = class TestModel extends SmartModel {

};

if (Meteor.isClient) {
  Template.docList.helpers({
    docs: function () {
      return TestModel.all();
    }
  });
}
```

## Contributing

Thanks to [aldeed](https://github.com/aldeed/) for the delete-button package!

[![Support aldeed via Gittip](https://rawgithub.com/twolfson/gittip-badge/0.2.0/dist/gittip.png)](https://www.gittip.com/aldeed/)
