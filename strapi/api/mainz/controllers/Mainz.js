'use strict';

/**
 * Mainz.js controller
 *
 * @description: A set of functions called "actions" for managing `Mainz`.
 */

module.exports = {

  /**
   * Retrieve mainz records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    ctx.body = {
      talk: "Hello from strapi"
    }
  },

  /**
   * Retrieve a mainz record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.mainz.fetch(ctx.params);
  },

  /**
   * Count mainz records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.mainz.count(ctx.query);
  },

  /**
   * Create a/an mainz record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    console.log(ctx.request.body)
    ctx.status = 200;
  },

  /**
   * Update a/an mainz record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mainz.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mainz record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mainz.remove(ctx.params);
  }
};
