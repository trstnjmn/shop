/**
 * @schema AdminCreateShippingOption
 * type: object
 * description: The shipping option's details.
 * x-schemaName: AdminCreateShippingOption
 * required:
 *   - name
 *   - service_zone_id
 *   - shipping_profile_id
 *   - price_type
 *   - provider_id
 *   - type
 *   - prices
 * properties:
 *   name:
 *     type: string
 *     title: name
 *     description: The shipping option's name.
 *   service_zone_id:
 *     type: string
 *     title: service_zone_id
 *     description: The ID of the service zone this shipping option belongs to.
 *   shipping_profile_id:
 *     type: string
 *     title: shipping_profile_id
 *     description: The ID of the shipping profile this shipping option belongs to.
 *   data:
 *     type: object
 *     description: Any data necessary for fulfillment providers to handle shipping methods and fulfillments of this shipping option.
 *     externalDocs:
 *       url: https://docs.medusajs.com/v2/resources/commerce-modules/fulfillment/shipping-option#data-property
 *       description: Learn more about the data property.
 *   price_type:
 *     type: string
 *     description: >
 *       The shipping option price's type. If `flat`, it means the option has a fixed price set in the `prices` property.
 *       `calculated` means that the shipping option's price is calculated during checkout.
 *     enum:
 *       - flat
 *       - calculated
 *   provider_id:
 *     type: string
 *     title: provider_id
 *     description: The ID of the fulfillment provider used to handle this shipping option and its associated methods and fulfillments.
 *   type:
 *     $ref: "#/components/schemas/AdminCreateShippingOption"
 *   prices:
 *     type: array
 *     description: The shipping option's prices. If `price_type` is `calculated`, pass an empty array for this property.
 *     items:
 *       oneOf:
 *         - type: object
 *           description: The price for a currency code.
 *           x-schemaName: AdminCreateShippingOptionPriceWithCurrency
 *           required:
 *             - currency_code
 *             - amount
 *           properties:
 *             currency_code:
 *               type: string
 *               title: currency_code
 *               description: The price's currency code.
 *             amount:
 *               type: number
 *               title: amount
 *               description: The price's amount.
 *         - type: object
 *           description: The price in a region.
 *           x-schemaName: AdminCreateShippingOptionPriceWithRegion
 *           required:
 *             - region_id
 *             - amount
 *           properties:
 *             region_id:
 *               type: string
 *               title: region_id
 *               description: The ID of the region this price is used in.
 *             amount:
 *               type: number
 *               title: amount
 *               description: The price's amount.
 *   rules:
 *     type: array
 *     description: The shipping option's rules.
 *     items:
 *       $ref: "#/components/schemas/AdminCreateShippingOptionRule"
 * 
*/
