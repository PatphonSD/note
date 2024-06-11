import { IToken } from '@/interface/token-interface';
import { openDB } from 'idb';

const dbPromise = openDB('tokens-db', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('tokens')) {
      db.createObjectStore('tokens', { keyPath: 'id' });
    }
  },
});

export const addToken = async (token: IToken): Promise<void> => {
  const db = await dbPromise;
  await db.add('tokens', token);
};

export const getTokens = async (): Promise<IToken[]> => {
  const db = await dbPromise;
  const tokens = await db.getAll('tokens');
  return tokens
};

export const getToken = async (id: string): Promise<IToken | undefined> => {
  const db = await dbPromise;
  return db.get('tokens', id);
};

export const updateToken = async (key: string | undefined, token: IToken): Promise<void> => {
  const db = await dbPromise;
  await db.put('tokens', token, key);
};

export const deleteToken = async (id: string): Promise<void> => {
  const db = await dbPromise;
  await db.delete('tokens', id);
};
