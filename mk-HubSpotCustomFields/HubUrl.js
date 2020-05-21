
let config = {
    groups:"https://api.hubapi.com/properties/v1/contacts/groups",
    companyGroups :"https://api.hubapi.com/properties/v1/companies/groups",
    dealGroups :"https://api.hubapi.com/properties/v1/deals/groups",
    companyList : "https://api.hubapi.com/companies/v2/companies/paged?properties=name",
    createGroup: "https://api.hubapi.com/properties/v1/deals/groups",
    createProperty: "https://api.hubapi.com/properties/v1/deals/properties",
    createCompanyGroup: "https://api.hubapi.com/properties/v1/companies/groups",
    createCompanyProperty: "https://api.hubapi.com/properties/v1/companies/properties",
    createContactGroup: "https://api.hubapi.com/properties/v1/contacts/groups",
    createContactProperty: "https://api.hubapi.com/properties/v1/contacts/properties",
     headers: {
      "Authorization":"Bearer "+steps.ConfigData.configJson.config_json.cloudElements.thirdParty.accessToken,
       Accept: "application/json"
    },
    config: {
        groups: [{
            url: "https://api.hubapi.com/properties/v1/deals/groups/named/chargebeecustomproperties?includeProperties=true",
            type: "deal",
            group:"chargebeecustomproperties",
            custom: true
        },
        {
            url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeecustomproperties?includeProperties=true",
            type: "contacts",
             group:"chargebeecustomproperties",
            custom: true
        },
        {
            url: "https://api.hubapi.com/properties/v1/companies/groups/named/chargebeecustomproperties?includeProperties=true",
            type: "company",
            group:"chargebeecustomproperties",
            custom: true
        },
        {
            url: "https://api.hubapi.com/properties/v1/deals/groups/named/chargebeesubscriptioninfo?includeProperties=true",
            type: "deal",
            group:"chargebeesubscriptioninfo",
            displayName: "Chargebee subscription info",
            custom: false
        },
        {
            url: "https://api.hubapi.com/properties/v1/companies/groups/named/chargebeesubscriptionmetrics?includeProperties=true",
            type: "company",
            group:"chargebeesubscriptionmetrics",
            displayName: "Chargebee subscription metrics",
            custom: false
        },
        {
            url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeecustomerinfo?includeProperties=true",
             group:"chargebeecustomerinfo",
             displayName: "Chargebee customer info",
            type: "contacts",
            custom: false
        },
        {
            url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeesubscriptioninfo?includeProperties=true",
            type: "contacts",
             group:"chargebeesubscriptioninfo",
             displayName: "Chargebee subscription info",
            custom: false
        },
        {
            url: "https://api.hubapi.com/properties/v1/contacts/groups/named/chargebeeorderinfo?includeProperties=true",
            type: "contacts",
            group:"chargebeeorderinfo",
            displayName: "Chargebee order info",
            custom: false
        } 
        ],
        custom: {
            groups: [],
            creates: [],
            deletes: []
        },
        customefields: [
            {
                label: "Subscription",
                key: "subcst",
                fields: [
                    ['currency_code', 'string', 'text'],
                     ['plan_quantity', 'number', 'text'],
                    ['plan_unit_price', 'number', 'text', 'currency'],
                    ['plan_amount', 'number', 'text', 'currency'],
                    ['billing_period', 'number', 'text'],
                    ['billing_period_unit', 'string', 'text'],
                    ['plan_free_quantity', 'number', 'text'],
                    ['start_date', 'datetime', 'date'],
                    ['trial_start', 'datetime', 'date'],
                    ['trial_end', 'datetime', 'date'],
                    ['current_term_start', 'datetime', 'date'],
                    ['current_term_end', 'datetime', 'date'],
                    ['created_at', 'datetime', 'date'],
                    ['started_at', 'datetime', 'date'],
                    ['activated_at', 'datetime', 'date'],
                    ['gift_id', 'string', 'text'],
                    ['override_relationship', 'string', 'text'],
                    ['pause_date', 'datetime', 'date'],
                    ['resume_date', 'datetime', 'date'],
                    ['cancelled_at', 'datetime', 'date'],
                    ['cancel_reason', 'string', 'text'],
                    ['affiliate_token', 'string', 'text'],
                    ['created_from_ip', 'string', 'text'],
                    ['resource_version', 'number', 'text'],
                    ['updated_at', 'datetime', 'date'],
                    ['has_scheduled_changes', 'string', 'text'],
                    ['payment_source_id', 'string', 'text'],
                    ['exchange_rate', 'number', 'text'],
                    ['base_currency_code', 'string', 'text']
                ]
            },
            {
                label: "Customer",
                key: "custcst",
                fields: [
                    ['vat_number', 'string', 'text'],
                    ['vat_number_validated_time', 'datetime', 'date'],
                    ['vat_number_status', 'string', 'text'],
                    ['allow_direct_debit', 'string', 'text'],
                    ['is_location_valid', 'string', 'text'],
                    ['created_at', 'datetime', 'date'],
                    ['created_from_ip', 'string', 'text'],
                    ['taxability', 'string', 'text'],
                    ['entity_code', 'string', 'text'],
                    ['exempt_number', 'string', 'text'],
                    ['resource_version', 'number', 'text'],
                    ['updated_at', 'datetime', 'date'],
                    ['locale', 'string', 'text'],
                    ['consolidated_invoicing', 'string', 'text'],
                    ['billing_date_mode', 'string', 'text'],
                    ['billing_day_of_week', 'string', 'text'],
                    ['billing_day_of_week_mode', 'string', 'text'],
                    ['pii_cleared', 'string', 'text'],
                    ['fraud_flag', 'string', 'text'],
                    ['primary_payment_source_id', 'string', 'text'],
                    ['backup_payment_source_id', 'string', 'text'],
                    ['promotional_credits', 'number', 'text', 'currency'],
                    ['unbilled_charges', 'number', 'text', 'currency'],
                    ['refundable_credits', 'number', 'text', 'currency'],
                    ['excess_payments', 'number', 'text', 'currency'],
                    ['deleted', 'string', 'text'],
                    ['registered_for_gst', 'string', 'text'],
                    ['business_customer_without_vat_number', 'string', 'text'],
                    ['customer_type', 'string', 'text'],
                    ['client_profile_id', 'string', 'text'],
                ]
            },
            {
                label: "Order",
                key: "ordercst",
                fields: [
                    ['document_number', 'string', 'text'],
                    ['invoice_id', 'string', 'text'],
                    ['cancellation_reason', 'string', 'text'],
                    ['payment_status', 'string', 'text'],
                    ['order_type', 'string', 'text'],
                    ['price_type', 'string', 'text'],
                    ['reference_id', 'string', 'text'],
                    ['fulfillment_status', 'string', 'text'],
                    ['shipping_date', 'datetime', 'date'],
                    ['tracking_id', 'string', 'text'],
                    ['batch_id', 'string', 'text'],
                    ['created_by', 'string', 'text'],
                    ['shipment_carrier', 'string', 'text'],
                    ['invoice_round_off_amount', 'number', 'text', 'currency'],
                    ['tax', 'number', 'text', 'currency'],
                    ['amount_adjusted', 'number', 'text', 'currency'],
                    ['refundable_credits_issued', 'number', 'text', 'currency'],
                    ['refundable_credits', 'number', 'text', 'currency'],
                    ['rounding_adjustement', 'number', 'text', 'currency'],
                    ['paid_on', 'datetime', 'date'],
                    ['shipping_cut_off_date', 'datetime', 'date'],
                    ['created_at', 'datetime', 'date'],
                    ['status_update_at', 'datetime', 'date'],
                    ['delivered_at', 'datetime', 'date'],
                    ['shipped_at', 'datetime', 'date'],
                    ['resource_version', 'number', 'text'],
                    ['updated_at', 'datetime', 'date'],
                    ['cancelled_at', 'datetime', 'date'],
                    ['discount', 'number', 'text', 'currency'],
                    ['sub_total', 'number', 'text', 'currency'],
                    ['total', 'number', 'text', 'currency'],
                    ['deleted', 'string', 'text'],
                    ['currency_code', 'string', 'text'],
                    ['is_gifted', 'string', 'text'],
                    ['gift_id', 'string', 'text']
                ]
            },
        ],

        customCompanyFields: [
            {
                label: "Subscription",
                key: "subcst",
                fields: [
                    ['plan_quantity', 'number', 'text'],
                    ['plan_unit_price', 'number', 'text', 'currency'],
                    ['plan_amount', 'number', 'text', 'currency'],
                    ['plan_free_quantity', 'number', 'text']

                ]
            },
            {
                label: "Customer",
                key: "custcst",
                fields: [
                    ['promotional_credits', 'number', 'text', 'currency'],
                    ['unbilled_charges', 'number', 'text', 'currency'],
                    ['refundable_credits', 'number', 'text', 'currency'],
                    ['excess_payments', 'number', 'text', 'currency'],
                ]
            },
            {
                label: "Order",
                key: "ordercst",
                fields: [
                    ['invoice_round_off_amount', 'number', 'text', 'currency'],
                    ['tax', 'number', 'text', 'currency'],
                    ['amount_adjusted', 'number', 'text', 'currency'],
                    ['refundable_credits_issued', 'number', 'text', 'currency'],
                    ['refundable_credits', 'number', 'text', 'currency'],
                    ['rounding_adjustement', 'number', 'text', 'currency'],
                    ['discount', 'number', 'text', 'currency'],
                    ['sub_total', 'number', 'text', 'currency'],
                    ['total', 'number', 'text', 'currency']
                ]
            },
        ]

    }
  };
  
  done(config);