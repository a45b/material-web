/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {styles as overlayStyles} from '../elevation/lib/elevation-overlay-styles.css.js';

import {Fab} from './lib/fab.js';
import {styles as sharedStyles} from './lib/fab-shared-styles.css.js';
import {styles as fabStyles} from './lib/fab-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-fab': MdFab;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
@customElement('md-fab')
export class MdFab extends Fab {
  static override styles = [overlayStyles, sharedStyles, fabStyles];
}
