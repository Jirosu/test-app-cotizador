<<<<<<< HEAD
import { CartProductGen, CartProductMod, GenerateQuotation_BL, ModifyQuotation_BL, Quotation, QuotationDetail, QuotationHeader, RespQuotationByIdDto, RespQuotationDetailDto, RespQuotationsDto } from "../../features/cotizador/models/cotizacion.interface";
=======
import { CartProductGen, CartProductMod, GenerateQuotation_BL, ModifyQuotation_BL, RespQuotationDetailDto, RespQuotationsDto } from "../../features/cotizador/models/cotizacion.interface";
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
import { Product } from "../../features/cotizador/models/product.interface";

export class Mapper {

    // GET to POST
<<<<<<< HEAD
    // static mapRespQuotationsDtoToGenerateQuotation_BL(origin: RespQuotationsDto): GenerateQuotation_BL {
    //     const cart: CartProductGen[] = [];
    //     origin.detail.forEach( prod => {
    //         cart.push({
    //             productCode: prod.noProduct,
    //             quantity: prod.quantity,
    //             price: prod.price
    //         })
    //     })
    
    //     return {
    //         clientDoc: origin.noClient,
    //         clientNames: origin.clientName,
    //         igv: origin.igv!,
    //         totalPrice: origin.totalPrice!,
    //         cart: cart        
    //     }
    // }

    // GET to PUT
    // static mapRespQuotationsDtoToModifyQuotation_BL (origin: RespQuotationsDto): ModifyQuotation_BL {
    //     const cart: CartProductMod[] = [];
    //     origin.detail.forEach( prod => {
    //         cart.push({
    //             noLine: prod.noLine! /*|| '1000'*/,
    //             productCode: prod.noProduct,
    //             quantity: prod.quantity,
    //             price: prod.price        
    //         })
    //     })
    
    //     return {
    //         noCotizacion: origin.no,
    //         clientDoc: origin.noClient,
    //         clientNames: origin.clientName,
    //         igv: origin.igv!,
    //         totalPrice: origin.totalPrice!,
    //         cart: cart                                            
    //     }
    // }

    // Header to quotation
    static mapQuotationHeaderToQuotation (origin: QuotationHeader): Quotation {
    
        return {
            noCotizacion: origin.no,
            clientDoc: origin.noClient,
            clientNames: origin.clientName,
            cart: [],
            puntoEntrega: '',
            lugarEnvio: '',
            tipoEntrega: '',
            tipoPrecio: '',
            telefonoCliente: '',
            direCliente: '',

            status: origin.status,
            totalPrice: 0,
        }
    }

    // RespQuotationByIdDto to Quotation
    static mapRespQuotationByIdDtoQuotation (origin: RespQuotationByIdDto): Quotation {
        const cart: QuotationDetail[] = [];
        origin.detail.forEach( prod => {
            cart.push({
                noLine: prod.noLine,
                productCode: prod.noProduct,
                descProduct: prod.descProduct,
                quantity: prod.quantity,
                price: prod.price,
                tariffPrice: [],
                originalPrice: prod.price        
=======
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
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
            })
        })
    
        return {
            noCotizacion: origin.no,
            clientDoc: origin.noClient,
            clientNames: origin.clientName,
<<<<<<< HEAD
            cart: cart,
            puntoEntrega: '',
            lugarEnvio: '',
            tipoEntrega: '',
            tipoPrecio: '',
            telefonoCliente: '',
            direCliente: '',

            status: undefined,
            totalPrice: 0,
            timestamp: 0
=======
            igv: origin.igv!,
            totalPrice: origin.totalPrice!,
            cart: cart                                            
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
        }
    }


<<<<<<< HEAD
    // product to QuotationDetail
    static mapProductToQuotationDetail(origin: Product): QuotationDetail {
        return {
            noLine: 0,
            productCode: origin.code,
            quantity: origin.quantity!,
            price: origin.unitPrice,

            descProduct: origin.description,
            amount: origin.amount,
            tariffPrice: [],
            originalPrice: origin.unitPrice,
=======
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
>>>>>>> bf24bb8533adfc7851011deeb18cb5000d90c66b
        }
    }
}
