import type { Schema, Struct } from '@strapi/strapi';

export interface VariableProductVariableProduct extends Struct.ComponentSchema {
  collectionName: 'components_variable_product_variable_products';
  info: {
    displayName: 'Variable product';
    icon: 'stack';
  };
  attributes: {};
}

export interface VariableProductVariations extends Struct.ComponentSchema {
  collectionName: 'components_variable_product_variations';
  info: {
    displayName: 'Variations';
    icon: 'layer';
  };
  attributes: {
    variableName: Schema.Attribute.String & Schema.Attribute.Required;
    variableOptions: Schema.Attribute.JSON & Schema.Attribute.Required;
    variablePrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    variableStock: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'variable-product.variable-product': VariableProductVariableProduct;
      'variable-product.variations': VariableProductVariations;
    }
  }
}
