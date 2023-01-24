'use strict';

/**
 * blogs-singular service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blogs-singular.blogs-singular');
