import React, { Component } from 'react';
import PropTypes from 'prop-types';

const VIEW_TYPE_EDITING = 'view_type_editing';
const VIEW_TYPE_READ_ONLY = 'view_type_read_only';

//Highly specific to the about me section.
class EditToggle extends Component {
  static propTypes = {
    canEdit: PropTypes.bool.isRequired,
    data: PropTypes.object,
    ReadOnlyComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    EditableComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  };

  state = {
    viewType: VIEW_TYPE_READ_ONLY,
  };

  onClickEdit = () => {
    this.setState({ viewType: VIEW_TYPE_EDITING });
  };

  onClickCancel = () => {
    this.setState({ viewType: VIEW_TYPE_READ_ONLY });
  };

  onClickSave = () => {
    this.setState({ viewType: VIEW_TYPE_READ_ONLY });
  };

  render() {
    const { ReadOnlyComponent, EditableComponent, data, canEdit } = this.props;
    const { viewType } = this.state;
    if (viewType === VIEW_TYPE_READ_ONLY) {
      return <ReadOnlyComponent data={data} canEdit={canEdit} onClickEditCb={this.onClickEdit} />;
    } else if (viewType === VIEW_TYPE_EDITING) {
      return (
        <EditableComponent
          data={data}
          onClickCancelCb={this.onClickCancel}
          onClickSaveCb={this.onClickSave}
        />
      );
    }
    return null;
  }
}

export default EditToggle;
