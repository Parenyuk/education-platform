import { Database } from '@/database.types';
import { rpcFunction } from '@/lib/constants/tableFunctions';

export type TableNames = keyof Database['public']['Tables'];

export type RpcFunctionValues = (typeof rpcFunction)[keyof typeof rpcFunction];

export type ResourceType = TableNames | RpcFunctionValues;
