import * as React from 'react';
import styles from './App.module.scss';
import { IAppProps } from './IAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ConfigureStore from "../../store/ConfigureStore";
import { connect } from "react-redux";
import {INewFormState} from "./INewFormControlsState";
import { Provider } from "react-redux";
import NewPurchaseRequestComponent from "../CreateNewRequest/CreateNewRequestComponent";

export default class App extends React.Component<IAppProps, {}> {
  public render(): React.ReactElement<IAppProps> {

    const purchaseRequertStore = ConfigureStore();

    return (
      <Provider store={purchaseRequertStore}>
        <NewPurchaseRequestComponent {...this.props}/>
      </Provider>
    );
  }
}
