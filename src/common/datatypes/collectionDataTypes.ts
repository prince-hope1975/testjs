export type cardData = {
  assetid?: number;
  collection_name: string;
  item_number: number;
  price?: number;
  unit?: string;
  time_interval?: string;
  claimed_amount?: number | string;
  time_added?: Date | string;
};

export type asaInfo = {
    src: string;    
  id: string| number;
  collection_name:string, 
  item_number:number;

};
export type templateData = {
  src: string;
  posone:any;
  postwo: any;
  posthree: any;
  posfour:any;
};
