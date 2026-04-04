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
      state_labor_metrics: {
        Row: {
          id: string;
          state_code: string;
          state_name: string;
          year: number;
          unemployment_rate: number;
          avg_wage: number;
          labor_force_participation: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          state_code: string;
          state_name: string;
          year: number;
          unemployment_rate: number;
          avg_wage: number;
          labor_force_participation: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          state_code?: string;
          state_name?: string;
          year?: number;
          unemployment_rate?: number;
          avg_wage?: number;
          labor_force_participation?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      state_export_profiles: {
        Row: {
          id: string;
          state_code: string;
          state_name: string;
          year: number;
          month: number | null;
          period_label: string | null;
          manufactured_exports: number | null;
          non_manufactured_exports: number | null;
          re_exports: number | null;
          total_exports: number | null;
          manufactured_percent: number | null;
          non_manufactured_percent: number | null;
          notes: string | null;
          source_name: string | null;
          source_url: string | null;
          methodology_note: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          state_code: string;
          state_name: string;
          year: number;
          month?: number | null;
          period_label?: string | null;
          manufactured_exports?: number | null;
          non_manufactured_exports?: number | null;
          re_exports?: number | null;
          total_exports?: number | null;
          manufactured_percent?: number | null;
          non_manufactured_percent?: number | null;
          notes?: string | null;
          source_name?: string | null;
          source_url?: string | null;
          methodology_note?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          state_code?: string;
          state_name?: string;
          year?: number;
          month?: number | null;
          period_label?: string | null;
          manufactured_exports?: number | null;
          non_manufactured_exports?: number | null;
          re_exports?: number | null;
          total_exports?: number | null;
          manufactured_percent?: number | null;
          non_manufactured_percent?: number | null;
          notes?: string | null;
          source_name?: string | null;
          source_url?: string | null;
          methodology_note?: string | null;
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

export type StateLaborMetricRow =
  Database["public"]["Tables"]["state_labor_metrics"]["Row"];

export type StateExportProfileRow =
  Database["public"]["Tables"]["state_export_profiles"]["Row"];
