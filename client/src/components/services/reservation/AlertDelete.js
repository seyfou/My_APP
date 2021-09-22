import React from 'react'

function AlertDelete() {
    return (
        <div>
            
        </div>
    )
}

export default AlertDelete
import React from 'react'

function AlertDelete() {
    return (
        <div>
        <button
          onClick={() => this.setState({ show: true })}
        >
          Alert
        </button>
        <SweetAlert
          show={this.state.show}
          title="Demo Complex"
          text="SweetAlert in React"
          showCancelButton
          onConfirm={() => {
            console.log('confirm');
            this.setState({ show: false });
          }}
          onCancel={() => {
            console.log('cancel');
            this.setState({ show: false });
          }}
          onEscapeKey={() => this.setState({ show: false })}
          onOutsideClick={() => this.setState({ show: false })}
        />
      </div>
    )
}

export default AlertDelete
