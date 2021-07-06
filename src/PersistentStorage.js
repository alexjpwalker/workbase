/*
 * Copyright (C) 2021 Vaticle
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

import Store from 'electron-store';
import { version } from '../../../package.json';

// Config file in Mac system in: ~/Library/Application Support/typedb-workbase/config.json
const storage = new Store()

// Store current project version in persistent storage
// (to allow migrations and avoid conflicts in future)
const storedVersion = storage.get('project-version');
if (!storedVersion) storage.set('project-version', version);

export default storage;