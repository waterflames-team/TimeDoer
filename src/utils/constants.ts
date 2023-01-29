import { version } from '../../package.json'
import { configDir } from '@tauri-apps/api/path'
import { readDir, createDir } from "@tauri-apps/api/fs";

// 本地配置文件路径
const STORE_DEFAULT_PATH = await configDir() + 'TimeDoer';

// 首次打开时创建配置文件夹
await readDir(STORE_DEFAULT_PATH).catch(async () => {
  await createDir(STORE_DEFAULT_PATH);
});

const STORE_DEFAULT_VALUES: Record<string, any> = {
  version,
  theme: 'light',
};

export { STORE_DEFAULT_PATH, STORE_DEFAULT_VALUES }
