import { SPHttpClient } from '@microsoft/sp-http';

export interface IAppProps {
  description: string;
  siteUrl:string;
  spHttpClient:SPHttpClient;
  itemId:string;
}
