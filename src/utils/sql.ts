import SQLite from "tauri-plugin-sqlite-api";
import dayjs from "dayjs";
import { STORE_DEFAULT_PATH } from "./index";

// 初始化数据库, 创建记录表
const records_init = `
  CREATE TABLE IF NOT EXISTS records (id TEXT, time INTEGER);
`;

const dbFile = import.meta.env.DEV ? "sql.dev.db" : "sql.db";
const db = await SQLite.open(`${STORE_DEFAULT_PATH}/${dbFile}`);

const initSQL = async () => {
  if (!db) return console.log("数据库连接失败");

  try {
    await db.execute(records_init);
    console.log("数据库初始化成功");
  } catch (error) {
    console.log(`数据库初始化失败,${error}`);
  }
};

const executeSQL = async (sql: string) => {
  try {
    await db.execute(sql);
  } catch (error) {
    console.log(`SQL执行失败,${error}`, sql);
  }
};

export { initSQL };
