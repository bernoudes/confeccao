function itemInPrimaryValue(itemMod){
    const itemTran ={
        status_order: itemMod.status_order || undefined,
        sales_price_unity: itemMod.sales_price_unity  || undefined,
        sales_quantity_products: itemMod.sales_quantity_products  || undefined,
        sales_embroidery: itemMod.sales_embroidery  || undefined,
        sales_silk: itemMod.sales_silk  || undefined,
        sales_laser_applique: itemMod.sales_laser_applique  || undefined,
        sales_laser_holes: itemMod.sales_laser_holes  || undefined,
        sales_sublimation_applique: itemMod.sales_sublimation_applique  || undefined,
        sales_sublimation_body: itemMod.sales_sublimation_body || undefined,
        sales_vies: itemMod.sales_vies || undefined,
        sales_forro: itemMod.sales_forro || undefined
    }

    if(isNaN(itemTran.sales_quantity_products)){
        return undefined
    }

    itemTran.sales_price_unity = itemTran.sales_price_unity.replace(/[,]/, '.');
    itemTran.sales_price_unity = itemTran.sales_price_unity.replace(/[^0-9.]/g,"")

    if(itemTran.sales_embroidery == 'sim'){itemTran.sales_embroidery = true}
    else {itemTran.sales_embroidery = false} 

    if(itemTran.sales_silk == 'sim'){itemTran.sales_silk = true}
    else {itemTran.sales_silk = false}   

    if(itemTran.sales_laser_applique == 'sim'){itemTran.sales_laser_applique = true}
    else {itemTran.sales_laser_applique = false}   

    if(itemTran.sales_laser_holes == 'sim'){itemTran.sales_laser_holes = true}
    else {itemTran.sales_laser_holes = false}   

    if(itemTran.sales_sublimation_applique == 'sim'){itemTran.sales_sublimation_applique = true}
    else {itemTran.sales_sublimation_applique = false}   

    if(itemTran.sales_sublimation_body == 'sim'){itemTran.sales_sublimation_body = true}
    else {itemTran.sales_sublimation_body = false}   

    if(itemTran.sales_vies == 'sim'){itemTran.sales_vies = true}
    else {itemTran.sales_vies = false}
    
    if(itemTran.sales_forro == 'sim'){itemTran.sales_forro = true}
    else {itemTran.sales_forro = false}   

    return itemTran
}

function initialValue(){
    return {
        status_order: 'none',
        sales_price_unity: 0,
        sales_quantity_products: 0,
        sales_embroidery: false,
        sales_silk: false,
        sales_laser_applique: false,
        sales_laser_holes: false,
        sales_sublimation_applique: false,
        sales_sublimation_body: false,
        sales_vies: false,
        sales_forro: false
    }
}

module.exports = {itemInPrimaryValue,initialValue}