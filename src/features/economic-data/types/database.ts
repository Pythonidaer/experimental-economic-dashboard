/**
 * Supabase `Database` shape for typed clients and queries.
 * Keep in sync with `docs/data-model.md` and your remote schema.
 * Regenerate later with the Supabase CLI if preferred.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      state_trade_metrics: {
        Row: {
          id: string;
          state_code: string;
          state_name: string;
          year: number;
          import_value: number;
          export_value: number;
          total_trade_value: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          state_code: string;
          state_name: string;
          year: number;
          import_value: number;
          export_value: number;
          total_trade_value: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          state_code?: string;
          state_name?: string;
          year?: number;
          import_value?: number;
          export_value?: number;
          total_trade_value?: number;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type StateTradeMetricRow =
  Database["public"]["Tables"]["state_trade_metrics"]["Row"];
