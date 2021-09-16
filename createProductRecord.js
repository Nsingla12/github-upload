import { LightningElement, api } from 'lwc';
import productObj from '@salesforce/schema/Product__c';
// import productName from '@salesforce/schema/Product__c.Product_Name__c';
// import productCategory from '@salesforce/schema/Product__c.Category__c';
// import productBrand from '@salesforce/schema/Product__c.Brand__c';
// import productSupplier from '@salesforce/schema/Product__c.Supplier__c';
// import productSupplierPrice from '@salesforce/schema/Product__c.Supplier_Price__c';
// import productSellingPrice from '@salesforce/schema/Product__c.Selling_Price__c';
// import productSellingPercentage from '@salesforce/schema/Product__c.Selling_Percentage__c';
// import productPurchasedDate from '@salesforce/schema/Product__c.Purchased_Date__c';
// import productExpireyDate from '@salesforce/schema/Product__c.Expiry_Date__c';
// import totalQuantity from '@salesforce/schema/Product__c.Total_Qunatity__c';
// import soldQuantity from '@salesforce/schema/Product__c.Sold_Quantity__c';
 
import getBrandRecord from '@salesforce/apex/CreateProductRecordController.getBrandRecord';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class InsertProductRecordLwc extends LightningElement {

    @api product;
    @api Brand;
    @api recordId;
   // @api brandField;
    
    // fields = [productName, productCategory, productBrand, productSupplier, productSupplierPrice, 
    //           productSellingPrice, productSellingPercentage, productPurchasedDate, productExpireyDate,
    //           totalQuantity, soldQuantity];

 connectedCallback(){
    this.product = productObj;
    //this.brandField = productBrand;
    getBrandRecord({pBrandId : this.recordId}).then(result =>{
        console.log("Success");
        this.Brand = result;
        console.log("brand id : " + result);
    })
    .catch(error =>{
        console.log(error);
    });
 }

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Product created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    

 
    
}