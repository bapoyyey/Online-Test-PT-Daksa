export const addCssBlock = function(block, before = false) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head[before ? 'insertBefore' : 'appendChild'](tpl.content, document.head.firstChild);
};

import '@vaadin/grid/theme/lumo/vaadin-grid.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-column.js';
import '@vaadin/button/theme/lumo/vaadin-button.js';
import '@vaadin/checkbox/theme/lumo/vaadin-checkbox.js';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/context-menu/theme/lumo/vaadin-context-menu.js';
import '@vaadin/date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-column-group.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-sorter.js';
import '@vaadin/horizontal-layout/theme/lumo/vaadin-horizontal-layout.js';
import '@vaadin/icon/vaadin-icon.js';
import '@vaadin/icons/vaadin-iconset.js';
import '@vaadin/notification/theme/lumo/vaadin-notification.js';
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/polymer-legacy-adapter/template-renderer.js';
import '@vaadin/radio-group/theme/lumo/vaadin-radio-button.js';
import '@vaadin/radio-group/theme/lumo/vaadin-radio-group.js';
import '@vaadin/text-field/theme/lumo/vaadin-text-field.js';
import '@vaadin/tooltip/theme/lumo/vaadin-tooltip.js';
import '@vaadin/upload/theme/lumo/vaadin-upload.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';
import '@vaadin/vertical-layout/theme/lumo/vaadin-vertical-layout.js';
import 'Frontend/generated/jar-resources/contextMenuConnector.js';
import 'Frontend/generated/jar-resources/contextMenuTargetConnector.js';
import 'Frontend/generated/jar-resources/datepickerConnector.js';
import 'Frontend/generated/jar-resources/dndConnector-es6.js';
import 'Frontend/generated/jar-resources/flow-component-renderer.js';
import 'Frontend/generated/jar-resources/gridConnector.js';
import 'Frontend/generated/jar-resources/lit-renderer.ts';
import 'Frontend/generated/jar-resources/lumo-includes.ts';
import 'Frontend/generated/jar-resources/notificationConnector.js';
import 'Frontend/generated/jar-resources/vaadin-grid-flow-selection-column.js';
let thisScript;
const elements = document.getElementsByTagName('script');
for (let i = 0; i < elements.length; i++) {
 const script = elements[i];
 if (script.getAttribute('type')=='module' && script.getAttribute('data-app-id') && !script['vaadin-bundle']) {
  thisScript = script;
  break;
 }
}
if (!thisScript) {
 throw new Error('Could not find the bundle script to identify the application id');
}
thisScript['vaadin-bundle'] = true;
if (!window.Vaadin.Flow.fallbacks) { window.Vaadin.Flow.fallbacks={}; }
const fallbacks = window.Vaadin.Flow.fallbacks;
fallbacks[thisScript.getAttribute('data-app-id')] = {}
fallbacks[thisScript.getAttribute('data-app-id')].loadFallback = function loadFallback() {
 return import('./generated-flow-imports-fallback.js');
}