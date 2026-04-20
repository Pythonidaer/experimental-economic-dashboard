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
      state_industries: {
        Row: {
          id: string;
          region: string;
          year: number;
          ownership_type: string | null;
          selected_industry: string | null;
          naics_code: string;
          industry: string;
          industry_slug: string | null;
          establishments: number | null;
          avg_monthly_employment: number | null;
          avg_weekly_wage: number | null;
          total_wages: number | null;
          source_file: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          region: string;
          year: number;
          ownership_type?: string | null;
          selected_industry?: string | null;
          naics_code: string;
          industry: string;
          industry_slug?: string | null;
          establishments?: number | null;
          avg_monthly_employment?: number | null;
          avg_weekly_wage?: number | null;
          total_wages?: number | null;
          source_file?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          region?: string;
          year?: number;
          ownership_type?: string | null;
          selected_industry?: string | null;
          naics_code?: string;
          industry?: string;
          industry_slug?: string | null;
          establishments?: number | null;
          avg_monthly_employment?: number | null;
          avg_weekly_wage?: number | null;
          total_wages?: number | null;
          source_file?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      state_industry_details: {
        Row: {
          id: string;
          region: string;
          year: number;
          naics_code: string;
          naics_level: string;
          industry: string;
          establishments: number | null;
          avg_monthly_employment: number | null;
          avg_weekly_wage: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          region: string;
          year: number;
          naics_code: string;
          naics_level: string;
          industry: string;
          establishments?: number | null;
          avg_monthly_employment?: number | null;
          avg_weekly_wage?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          region?: string;
          year?: number;
          naics_code?: string;
          naics_level?: string;
          industry?: string;
          establishments?: number | null;
          avg_monthly_employment?: number | null;
          avg_weekly_wage?: number | null;
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

export type StateIndustryRow =
  Database["public"]["Tables"]["state_industries"]["Row"];

export type StateIndustryDetailRow =
  Database["public"]["Tables"]["state_industry_details"]["Row"];
