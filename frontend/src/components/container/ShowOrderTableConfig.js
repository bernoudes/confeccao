const Fields = [
    { key: 'status_order', label: 'estado'},
    { key: 'sales_man', label: 'vendedor'},
    { key: 'cd_production', label: 'codigo', },
    { key: 'sales_price_unity', label: 'preço'},
    { key: 'sales_quantity_products', label: 'quantidade'},
    { key: 'sales_embroidery', label: 'bordado'},
    { key: 'sales_silk', label: 'silk'},
    { key: 'sales_laser_applique', label: 'apl_gravado'},
    { key: 'sales_laser_holes', label: 'Furo_laser'},
    { key: 'sales_sublimation_applique', label: 'subli_apl'},
    { key: 'sales_sublimation_body', label: 'subli_corpo'},
    { key: 'sales_vies', label: 'viés'},
    { key: 'sales_forro', label: 'forro'},
    { key: 'exec_print', label: 'impresso'},
    { key: 'exec_program_embroidery', label: 'programa_bordado'},
    { key: 'exec_data_print_sublimation_applique', label: 'impressao_aplique'},
    { key: 'exec_quant_print_sublimation_applique', label: 'quantidade'},
    { key: 'exec_data_print_sublimation_forro', label: 'impressao_forro'},
    { key: 'quant_print_sublimation_forro', label: 'metragem'},
    { key: 'exec_separation', label: 'pr_Separação'},
    { key: 'exec_dublagem', label: 'pr_dublagem'},
    { key: 'exec_cut', label: 'pr_corte'},
    { key: 'exec_laser_holes', label: 'pr_furos_laser'},
    { key: 'exec_laser_applique', label: 'pr_corte_aplique'},
    { key: 'exec_vies', label: 'pr_viés'},
    { key: 'exec_silk', label: 'pr_silk'},
    { key: 'exec_peak', label: 'pr_aba'},
    { key: 'exec_sublimation_applique', label: 'pr_sublim_aplique'},
    { key: 'exec_sublimation_forro', label: 'pr_sublim_forro'},
    { key: 'seam_forro_front', label: 'co_forro_frente'},
    { key: 'seam_side_back', label: 'co_lateral_traseira'},
    { key: 'seam_vies', label: 'co_viés'},
    { key: 'seam_peak', label: 'co_aba'},
    { key: 'seam_fecho', label: 'co_fecho'},
    { key: 'seam_swearband', label: 'co_carneira'},
    { key: 'seam_arremate', label: 'arremate'},
    { key: 'seam_passadoria', label: 'passadoria'},
]

const itemsData = [
    {
        status_order: 'Prosseguindo',
        sales_man: 'Mauricio',
        cd_production: 'J58483-01/02',
        sales_price_unity: 'R$ 500,00',
        sales_quantity_products: '200',
        sales_embroidery: 'sim',
        sales_silk: 'não',
        sales_laser_applique: 'sim',
        sales_laser_holes: 'sim',
        sales_sublimation_applique: 'não',
        sales_sublimation_body: 'sim',
        sales_vies: 'sim',
        sales_forro: 'não',
        exec_print: '2021/10/05 25:10:20',
        exec_program_embroidery: '2021/10/05',
        exec_data_print_sublimation_applique: '2021/10/05',
        exec_quant_print_sublimation_applique: '2021/10/05',
        exec_data_print_sublimation_forro: '2021/10/05',
        quant_print_sublimation_forro: '2021/10/05',
        exec_separation: '2021/10/05',
        exec_dublagem: '2021/10/05',
        exec_cut: '2021/10/05',
        exec_laser_holes: '2021/10/05',
        exec_laser_applique: '2021/10/05',
        exec_vies: '2021/10/05',
        exec_silk: '2021/10/05',
        exec_peak: '2021/10/05',
        exec_sublimation_applique: '2021/10/05',
        exec_sublimation_forro: '2021/10/05',
        seam_forro_front: '2021/10/05',
        seam_side_back: '2021/10/05',
        seam_vies: '2021/10/05',
        seam_peak: '2021/10/05',
        seam_fecho: '2021/10/05',
        seam_swearband: '2021/10/05',
        seam_arremate: '2021/10/05',
        seam_passadoria: '2021/10/05',
    },
    {
        status_order: 'Alerta',
        sales_man: 'Mauricio',
        cd_production: 'J58483-01/02',
        sales_price_unity: 'R$ 500,00',
        sales_quantity_products: '200',
        sales_embroidery: 'sim',
        sales_silk: 'não',
        sales_laser_applique: 'sim',
        sales_laser_holes: 'sim',
        sales_sublimation_applique: 'não',
        sales_sublimation_body: 'sim',
        sales_vies: 'sim',
        sales_forro: 'não',
        exec_print: '2021/10/05 25:10:20',
        exec_program_embroidery: '2021/10/05',
        exec_data_print_sublimation_applique: '2021/10/05',
        exec_quant_print_sublimation_applique: '2021/10/05',
        exec_data_print_sublimation_forro: '2021/10/05',
        quant_print_sublimation_forro: '2021/10/05',
        exec_separation: '2021/10/05',
        exec_dublagem: '2021/10/05',
        exec_cut: '2021/10/05',
        exec_laser_holes: '2021/10/05',
        exec_laser_applique: '2021/10/05',
        exec_vies: '2021/10/05',
        exec_silk: '2021/10/05',
        exec_peak: '2021/10/05',
        exec_sublimation_applique: '2021/10/05',
        exec_sublimation_forro: '2021/10/05',
        seam_forro_front: '2021/10/05',
        seam_side_back: '2021/10/05',
        seam_vies: '2021/10/05',
        seam_peak: '2021/10/05',
        seam_fecho: '2021/10/05',
        seam_swearband: '2021/10/05',
        seam_arremate: '2021/10/05',
        seam_passadoria: '2021/10/05',
    },
    {
        status_order: 'Atrasado',
        sales_man: 'Mauricio',
        cd_production: 'J58483-01/02',
        sales_price_unity: 'R$ 500,00',
        sales_quantity_products: '200',
        sales_embroidery: 'sim',
        sales_silk: 'não',
        sales_laser_applique: 'sim',
        sales_laser_holes: 'sim',
        sales_sublimation_applique: 'não',
        sales_sublimation_body: 'sim',
        sales_vies: 'sim',
        sales_forro: 'não',
        exec_print: '2021/10/05 25:10:20',
        exec_program_embroidery: '2021/10/05',
        exec_data_print_sublimation_applique: '2021/10/05',
        exec_quant_print_sublimation_applique: '2021/10/05',
        exec_data_print_sublimation_forro: '2021/10/05',
        quant_print_sublimation_forro: '2021/10/05',
        exec_separation: '2021/10/05',
        exec_dublagem: '2021/10/05',
        exec_cut: '2021/10/05',
        exec_laser_holes: '2021/10/05',
        exec_laser_applique: '2021/10/05',
        exec_vies: '2021/10/05',
        exec_silk: '2021/10/05',
        exec_peak: '2021/10/05',
        exec_sublimation_applique: '2021/10/05',
        exec_sublimation_forro: '2021/10/05',
        seam_forro_front: '2021/10/05',
        seam_side_back: '2021/10/05',
        seam_vies: '2021/10/05',
        seam_peak: '2021/10/05',
        seam_fecho: '2021/10/05',
        seam_swearband: '2021/10/05',
        seam_arremate: '2021/10/05',
        seam_passadoria: '2021/10/05',
    },
    {
        status_order: 'Finalizado',
        sales_man: 'Mauricio',
        cd_production: 'J58483-01/02',
        sales_price_unity: 'R$ 500,00',
        sales_quantity_products: '200',
        sales_embroidery: 'sim',
        sales_silk: 'não',
        sales_laser_applique: 'sim',
        sales_laser_holes: 'sim',
        sales_sublimation_applique: 'não',
        sales_sublimation_body: 'sim',
        sales_vies: 'sim',
        sales_forro: 'não',
        exec_print: '2021/10/05 25:10:20',
        exec_program_embroidery: '2021/10/05',
        exec_data_print_sublimation_applique: '2021/10/05',
        exec_quant_print_sublimation_applique: '2021/10/05',
        exec_data_print_sublimation_forro: '2021/10/05',
        quant_print_sublimation_forro: '2021/10/05',
        exec_separation: '2021/10/05',
        exec_dublagem: '2021/10/05',
        exec_cut: '2021/10/05',
        exec_laser_holes: '2021/10/05',
        exec_laser_applique: '2021/10/05',
        exec_vies: '2021/10/05',
        exec_silk: '2021/10/05',
        exec_peak: '2021/10/05',
        exec_sublimation_applique: '2021/10/05',
        exec_sublimation_forro: '2021/10/05',
        seam_forro_front: '2021/10/05',
        seam_side_back: '2021/10/05',
        seam_vies: '2021/10/05',
        seam_peak: '2021/10/05',
        seam_fecho: '2021/10/05',
        seam_swearband: '2021/10/05',
        seam_arremate: '2021/10/05',
        seam_passadoria: '2021/10/05',
    },
    {
        status_order: 'Entregue',
        sales_man: 'Mauricio',
        cd_production: 'J58483-01/02',
        sales_price_unity: 'R$ 500,00',
        sales_quantity_products: '200',
        sales_embroidery: 'sim',
        sales_silk: 'não',
        sales_laser_applique: 'sim',
        sales_laser_holes: 'sim',
        sales_sublimation_applique: 'não',
        sales_sublimation_body: 'sim',
        sales_vies: 'sim',
        sales_forro: 'não',
        exec_print: '2021/10/05 25:10:20',
        exec_program_embroidery: '2021/10/05',
        exec_data_print_sublimation_applique: '2021/10/05',
        exec_quant_print_sublimation_applique: '2021/10/05',
        exec_data_print_sublimation_forro: '2021/10/05',
        quant_print_sublimation_forro: '2021/10/05',
        exec_separation: '2021/10/05',
        exec_dublagem: '2021/10/05',
        exec_cut: '2021/10/05',
        exec_laser_holes: '2021/10/05',
        exec_laser_applique: '2021/10/05',
        exec_vies: '2021/10/05',
        exec_silk: '2021/10/05',
        exec_peak: '2021/10/05',
        exec_sublimation_applique: '2021/10/05',
        exec_sublimation_forro: '2021/10/05',
        seam_forro_front: '2021/10/05',
        seam_side_back: '2021/10/05',
        seam_vies: '2021/10/05',
        seam_peak: '2021/10/05',
        seam_fecho: '2021/10/05',
        seam_swearband: '2021/10/05',
        seam_arremate: '2021/10/05',
        seam_passadoria: '2021/10/05',
    },
    {
        status_order: 'Cancelado',
        sales_man: 'Mauricio',
        cd_production: 'J58483-01/02',
        sales_price_unity: 'R$ 500,00',
        sales_quantity_products: '200',
        sales_embroidery: 'sim',
        sales_silk: 'não',
        sales_laser_applique: 'sim',
        sales_laser_holes: 'sim',
        sales_sublimation_applique: 'não',
        sales_sublimation_body: 'sim',
        sales_vies: 'sim',
        sales_forro: 'não',
        exec_print: '2021/10/05 25:10:20',
        exec_program_embroidery: '2021/10/05',
        exec_data_print_sublimation_applique: '2021/10/05',
        exec_quant_print_sublimation_applique: '2021/10/05',
        exec_data_print_sublimation_forro: '2021/10/05',
        quant_print_sublimation_forro: '2021/10/05',
        exec_separation: '2021/10/05',
        exec_dublagem: '2021/10/05',
        exec_cut: '2021/10/05',
        exec_laser_holes: '2021/10/05',
        exec_laser_applique: '2021/10/05',
        exec_vies: '2021/10/05',
        exec_silk: '2021/10/05',
        exec_peak: '2021/10/05',
        exec_sublimation_applique: '2021/10/05',
        exec_sublimation_forro: '2021/10/05',
        seam_forro_front: '2021/10/05',
        seam_side_back: '2021/10/05',
        seam_vies: '2021/10/05',
        seam_peak: '2021/10/05',
        seam_fecho: '2021/10/05',
        seam_swearband: '2021/10/05',
        seam_arremate: '2021/10/05',
        seam_passadoria: '2021/10/05',
    }
]


const rowVariantTemplate = (element) =>{
    element._cellVariants = {exec_program_embroidery:'info'}
    element._cellVariants = {exec_data_print_sublimation_applique:'success'}
    element._cellVariants = {exec_quant_print_sublimation_applique:'danger'}
    element._cellVariants = {exec_data_print_sublimation_forro:'danger'}
    element._cellVariants = {quant_print_sublimation_forro:'danger'}
    element._cellVariants = {exec_separation:'warning'}
    element._cellVariants = {exec_dublagem:'primary'}
    element._cellVariants = {exec_cut:'secondary'}
    element._cellVariants = {exec_laser_holes:'success'}
    element._cellVariants = {exec_laser_applique:'warning'}
    element._cellVariants = {exec_vies:'danger'}
    element._cellVariants = {exec_silk:'info'}
    element._cellVariants = {exec_peak:'light'}
    element._cellVariants = {exec_sublimation_applique:'primary'}
    element._cellVariants = {exec_sublimation_forro:'secondary'}
    element._cellVariants = {seam_forro_front:'success'}
    element._cellVariants = {seam_side_back:'warning'}
    element._cellVariants = {seam_vies:'danger'}
    element._cellVariants = {seam_peak:'info'}
    element._cellVariants = {seam_fecho:'light'}
    element._cellVariants = {seam_swearband:'primary'}
    element._cellVariants = {seam_arremate:'secondary'}
    element._cellVariants = {seam_passadoria:'success'}
}

const itemsModify = (itemsDatas) =>{
    itemsDatas.forEach(element => {
        if(element.status_order == 'Prosseguindo'){
            rowVariantTemplate(element)
            element._cellVariants= { status_order: 'success'}
        } 
        if(element.status_order == 'Alerta'){
            rowVariantTemplate(element)
            element._cellVariants= {status_order: 'warning '}
        } 
        if(element.status_order == 'Atrasado'){
            element._rowVariant='danger'
        } 
        if(element.status_order == 'Finalizado'){
            element._rowVariant='primary'
        } 
        if(element.status_order == 'Entregue'){
            element._rowVariant='success '
        } 
        if(element.status_order == 'Cancelado'){
            element._rowVariant='dark'
        }
    })

    return itemsDatas
}

const items = itemsModify(itemsData)


export default {Fields, items};