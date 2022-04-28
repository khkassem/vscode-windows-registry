/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { GetStringRegKey, GetDWORDRegKey } from '../dist/index';
import * as assert from 'assert';

describe('Windows Registry Tests', () => {
	describe('@GetStringRegKey', () => {
		it('Retrieves the ProgramFilesPath registry value', () => {
			const prgmFilesPath = GetStringRegKey('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion', 'ProgramFilesPath');
			assert(prgmFilesPath === '%ProgramFiles%');
		});

		it('Validates argument count', () => {
			assert.throws(() => (<any>GetStringRegKey)());
			assert.throws(() => ((<any>GetStringRegKey)('HKEY_LOCAL_MACHINE')));
			assert.throws(() => ((<any>GetStringRegKey)('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion')));
		});

		it('Validates argument length', () => {
			let reallyLongString = 'areallystring';
			while (reallyLongString.length < 17000) {
				reallyLongString += reallyLongString;
			}

			assert.throws(() => ((<any>GetStringRegKey)(
				reallyLongString,
				'SOFTWARE\\Microsoft\\Windows\\CurrentVersion',
				'ProgramFilesPath')));

			assert.throws(() => ((<any>GetStringRegKey)(
				'HKEY_LOCAL_MACHINE',
				reallyLongString,
				'ProgramFilesPath')));

			assert.throws(() => ((<any>GetStringRegKey)(
				'HKEY_LOCAL_MACHINE',
				'SOFTWARE\\Microsoft\\Windows\\CurrentVersion',
				reallyLongString)));
		});
	});
	describe('@GetDWORDRegKey', () => {
		it('Retrieves the ProgramFilesPath registry value', () => {
			const version = GetDWORDRegKey('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\NET Framework Setup\\NDP\\v4\\Full\\', 'Release');
			console.log(version)
			assert(version !== '528372');
		});
	});
});