import Devis from "./Devis"
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
      <Devis/>
      );
    }
  }
