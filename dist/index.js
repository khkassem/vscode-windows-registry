"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDWORDRegKey = exports.GetStringRegKey = void 0;
const windowregistry = process.platform === 'win32' ? require('../build/Release/winregistry.node') : null;
function GetStringRegKey(hive, path, name) {
    if (windowregistry) {
        return windowregistry.GetStringRegKey(hive, path, name);
    }
    console.error('Could not initialize Windows Registry native node module.');
    return undefined;
}
exports.GetStringRegKey = GetStringRegKey;
function GetDWORDRegKey(hive, path, name) {
    if (windowregistry) {
        return windowregistry.GetDWORDRegKey(hive, path, name);
    }
    console.error('Could not initialize Windows Registry native node module.');
    return undefined;
}
exports.GetDWORDRegKey = GetDWORDRegKey;
//# sourceMappingURL=index.js.map