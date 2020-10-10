export type CardMode = 'add' | 'edit';

export interface Product {
  id: number;
  sku: string;
  lojistaId: number;
  descricao: string;
  categoria: string;
  valor: number;
  dataCadastro: string;
}
