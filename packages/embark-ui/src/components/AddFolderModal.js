import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {isDarkTheme} from '../utils/utils';

class AddFolderModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {modal: false, folder: ''};
  }

  toggle() {
    this.setState({modal: !this.state.modal});
  }

  handleChange(event) {
    this.setState({folder: event.target.value});
  }

  addFolder() {
    this.props.saveFolder({path: `${this.props.node.path}/${this.state.folder}`});
    this.toggle();
  }

  render() {
    return (
      <Modal contentClassName={classNames({'dark-theme': isDarkTheme(this.props.theme)})}
             isOpen={this.state.modal}
             toggle={() => this.toggle()}>
        <ModalHeader toggle={() => this.toggle()}>Please give the folder a name</ModalHeader>
        <ModalBody>
          <Input autofocus="true" value={this.state.filename} onChange={e => this.handleChange(e)} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.addFolder()}>Add Folder</Button>{' '}
          <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

AddFolderModal.propTypes = {
  saveFolder: PropTypes.func,
  node: PropTypes.object,
  theme: PropTypes.string
};

export default AddFolderModal;