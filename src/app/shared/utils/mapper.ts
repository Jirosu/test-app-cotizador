import { CartProductGen, CartProductMod, GenerateQuotation_BL, ModifyQuotation_BL, RespQuotationDetailDto, RespQuotationsDto } from "../../features/cotizador/models/cotizacion.interface";
import { Product } from "../../features/cotizador/models/product.interface";

export class Mapper {

    // GET to POST
    static mapRespQuotationsDtoToGenerateQuotation_BL(origin: RespQuotationsDto): GenerateQuotation_BL {
        const cart: CartProductGen[] = [];
        origin.detail.forEach( prod => {
            cart.push({
                productCode: prod.noProduct,
                quantity: prod.quantity,
                price: prod.price
            })
        })
    
        return {
            clientDoc: origin.noClient,
            clientNames: origin.clientName,
            igv: origin.igv!,
            totalPrice: origin.totalPrice!,
            cart: cart        
        }
    }

    // GET to PUT
    static mapRespQuotationsDtoToModifyQuotation_BL (origin: RespQuotationsDto): ModifyQuotation_BL {
        const cart: CartProductMod[] = [];
        origin.detail.forEach( prod => {
            cart.push({
                noLine: prod.noLine! /*|| '1000'*/,
                productCode: prod.noProduct,
                quantity: prod.quantity,
                price: prod.price        
            })
        })
    
        return {
            noCotizacion: origin.no,
            clientDoc: origin.noClient,
            clientNames: origin.clientName,
            igv: origin.igv!,
            totalPrice: origin.totalPrice!,
            cart: cart                                            
        }
    }


    // product
    static mapProductToQuotationDetailDto(origin: Product): RespQuotationDetailDto {
        return {
            noProduct: origin.code,
            noQuotation: '',
            descProduct: origin.description,
            quantity: origin.quantity!,
            price: origin.unitPrice,
            amount: origin.amount,
            stock: origin.stock,
            noLine: 0
        }
    }
}
