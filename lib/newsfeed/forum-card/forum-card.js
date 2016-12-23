/**
 * Module Dependencies
 */

import dom from 'component-dom';
import view from '../../view/mixin';
import template from './template.jade';

export default class ForumCard extends view('appendable') {
  constructor(options = {}) {
    options.template = template;
    options.locals = { forum: options.forum };
    super(options);
    this.forum = options.forum;
    console.log('client forum %0',this.forum);
  }

}
