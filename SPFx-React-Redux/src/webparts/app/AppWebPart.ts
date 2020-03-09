import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AppWebPartStrings';
import App from './components/App/App';
import { IAppProps } from './components/App/IAppProps';
import {  UrlQueryParameterCollection } from '@microsoft/sp-core-library';

export interface IAppWebPartProps {
  description: string;
}

export default class AppWebPart extends BaseClientSideWebPart <IAppWebPartProps> {

  public render(): void {

    var queryParameters = new UrlQueryParameterCollection(window.location.href);
    let id: string = "";
    if (queryParameters.getValue("itemid")) {
      id = queryParameters.getValue("itemid");
    }


    const element: React.ReactElement<IAppProps> = React.createElement(
      App,
      {
        description: this.properties.description,
        siteUrl:this.context.pageContext.web.absoluteUrl,
        spHttpClient:this.context.spHttpClient,
        itemId:id
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
