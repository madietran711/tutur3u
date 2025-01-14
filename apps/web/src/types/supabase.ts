export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      calendar_event_colors: {
        Row: {
          value: string;
        };
        Insert: {
          value: string;
        };
        Update: {
          value?: string;
        };
        Relationships: [];
      };
      calendar_event_participant_groups: {
        Row: {
          created_at: string | null;
          event_id: string;
          group_id: string;
          notes: string | null;
          role: string | null;
        };
        Insert: {
          created_at?: string | null;
          event_id: string;
          group_id: string;
          notes?: string | null;
          role?: string | null;
        };
        Update: {
          created_at?: string | null;
          event_id?: string;
          group_id?: string;
          notes?: string | null;
          role?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'calendar_event_participant_groups_event_id_fkey';
            columns: ['event_id'];
            referencedRelation: 'workspace_calendar_events';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'calendar_event_participant_groups_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'calendar_event_participant_groups_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups_with_amount';
            referencedColumns: ['id'];
          },
        ];
      };
      calendar_event_platform_participants: {
        Row: {
          created_at: string | null;
          event_id: string;
          going: boolean | null;
          notes: string;
          role: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          event_id: string;
          going?: boolean | null;
          notes?: string;
          role?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          event_id?: string;
          going?: boolean | null;
          notes?: string;
          role?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'calendar_event_platform_participants_event_id_fkey';
            columns: ['event_id'];
            referencedRelation: 'workspace_calendar_events';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'calendar_event_platform_participants_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      calendar_event_virtual_participants: {
        Row: {
          created_at: string | null;
          event_id: string;
          going: boolean | null;
          notes: string;
          role: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          event_id: string;
          going?: boolean | null;
          notes?: string;
          role?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          event_id?: string;
          going?: boolean | null;
          notes?: string;
          role?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'calendar_event_virtual_participants_event_id_fkey';
            columns: ['event_id'];
            referencedRelation: 'workspace_calendar_events';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'calendar_event_virtual_participants_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'workspace_users';
            referencedColumns: ['id'];
          },
        ];
      };
      credit_wallets: {
        Row: {
          limit: number;
          payment_date: number;
          statement_date: number;
          wallet_id: string;
        };
        Insert: {
          limit: number;
          payment_date: number;
          statement_date: number;
          wallet_id: string;
        };
        Update: {
          limit?: number;
          payment_date?: number;
          statement_date?: number;
          wallet_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'credit_wallets_wallet_id_fkey';
            columns: ['wallet_id'];
            referencedRelation: 'workspace_wallets';
            referencedColumns: ['id'];
          },
        ];
      };
      currencies: {
        Row: {
          code: string;
          name: string;
        };
        Insert: {
          code: string;
          name: string;
        };
        Update: {
          code?: string;
          name?: string;
        };
        Relationships: [];
      };
      finance_invoice_products: {
        Row: {
          amount: number;
          created_at: string | null;
          invoice_id: string;
          price: number;
          product_id: string | null;
          product_name: string;
          product_unit: string;
          total_diff: number;
          unit_id: string | null;
          warehouse: string;
          warehouse_id: string | null;
        };
        Insert: {
          amount: number;
          created_at?: string | null;
          invoice_id: string;
          price: number;
          product_id?: string | null;
          product_name?: string;
          product_unit?: string;
          total_diff?: number;
          unit_id?: string | null;
          warehouse?: string;
          warehouse_id?: string | null;
        };
        Update: {
          amount?: number;
          created_at?: string | null;
          invoice_id?: string;
          price?: number;
          product_id?: string | null;
          product_name?: string;
          product_unit?: string;
          total_diff?: number;
          unit_id?: string | null;
          warehouse?: string;
          warehouse_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'finance_invoice_products_invoice_id_fkey';
            columns: ['invoice_id'];
            referencedRelation: 'finance_invoices';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'finance_invoice_products_product_id_fkey';
            columns: ['product_id'];
            referencedRelation: 'workspace_products';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'finance_invoice_products_unit_id_fkey';
            columns: ['unit_id'];
            referencedRelation: 'inventory_units';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'finance_invoice_products_warehouse_id_fkey';
            columns: ['warehouse_id'];
            referencedRelation: 'inventory_warehouses';
            referencedColumns: ['id'];
          },
        ];
      };
      finance_invoice_promotions: {
        Row: {
          code: string;
          created_at: string;
          description: string | null;
          invoice_id: string | null;
          name: string | null;
          promo_id: string | null;
          use_ratio: boolean;
          value: number;
        };
        Insert: {
          code?: string;
          created_at?: string;
          description?: string | null;
          invoice_id?: string | null;
          name?: string | null;
          promo_id?: string | null;
          use_ratio: boolean;
          value: number;
        };
        Update: {
          code?: string;
          created_at?: string;
          description?: string | null;
          invoice_id?: string | null;
          name?: string | null;
          promo_id?: string | null;
          use_ratio?: boolean;
          value?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'finance_invoice_promotions_invoice_id_fkey';
            columns: ['invoice_id'];
            referencedRelation: 'finance_invoices';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'finance_invoice_promotions_promo_id_fkey';
            columns: ['promo_id'];
            referencedRelation: 'workspace_promotions';
            referencedColumns: ['id'];
          },
        ];
      };
      finance_invoices: {
        Row: {
          completed_at: string | null;
          created_at: string | null;
          creator_id: string | null;
          customer_id: string | null;
          id: string;
          note: string | null;
          notice: string | null;
          price: number;
          total_diff: number;
          transaction_id: string;
          ws_id: string;
        };
        Insert: {
          completed_at?: string | null;
          created_at?: string | null;
          creator_id?: string | null;
          customer_id?: string | null;
          id?: string;
          note?: string | null;
          notice?: string | null;
          price: number;
          total_diff?: number;
          transaction_id: string;
          ws_id: string;
        };
        Update: {
          completed_at?: string | null;
          created_at?: string | null;
          creator_id?: string | null;
          customer_id?: string | null;
          id?: string;
          note?: string | null;
          notice?: string | null;
          price?: number;
          total_diff?: number;
          transaction_id?: string;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'finance_invoices_creator_id_fkey';
            columns: ['creator_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'finance_invoices_transaction_id_fkey';
            columns: ['transaction_id'];
            referencedRelation: 'wallet_transactions';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'healthcare_prescriptions_patient_id_fkey';
            columns: ['customer_id'];
            referencedRelation: 'workspace_users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'healthcare_prescriptions_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      handles: {
        Row: {
          created_at: string | null;
          creator_id: string | null;
          value: string;
        };
        Insert: {
          created_at?: string | null;
          creator_id?: string | null;
          value: string;
        };
        Update: {
          created_at?: string | null;
          creator_id?: string | null;
          value?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'handles_creator_id_fkey';
            columns: ['creator_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      healthcare_checkup_vital_groups: {
        Row: {
          checkup_id: string;
          created_at: string | null;
          group_id: string;
        };
        Insert: {
          checkup_id: string;
          created_at?: string | null;
          group_id: string;
        };
        Update: {
          checkup_id?: string;
          created_at?: string | null;
          group_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'healthcare_checkup_vital_groups_checkup_id_fkey';
            columns: ['checkup_id'];
            referencedRelation: 'healthcare_checkups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'healthcare_checkup_vital_groups_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'healthcare_vital_groups';
            referencedColumns: ['id'];
          },
        ];
      };
      healthcare_checkup_vitals: {
        Row: {
          checkup_id: string;
          created_at: string | null;
          value: number | null;
          vital_id: string;
        };
        Insert: {
          checkup_id: string;
          created_at?: string | null;
          value?: number | null;
          vital_id: string;
        };
        Update: {
          checkup_id?: string;
          created_at?: string | null;
          value?: number | null;
          vital_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'healthcare_checkup_vitals_checkup_id_fkey';
            columns: ['checkup_id'];
            referencedRelation: 'healthcare_checkups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'healthcare_checkup_vitals_vital_id_fkey';
            columns: ['vital_id'];
            referencedRelation: 'healthcare_vitals';
            referencedColumns: ['id'];
          },
        ];
      };
      healthcare_checkups: {
        Row: {
          checked: boolean;
          checkup_at: string;
          completed_at: string | null;
          created_at: string | null;
          creator_id: string;
          diagnosis_id: string | null;
          id: string;
          next_checked: boolean | null;
          next_checkup_at: string | null;
          note: string | null;
          patient_id: string;
          ws_id: string;
        };
        Insert: {
          checked?: boolean;
          checkup_at?: string;
          completed_at?: string | null;
          created_at?: string | null;
          creator_id: string;
          diagnosis_id?: string | null;
          id?: string;
          next_checked?: boolean | null;
          next_checkup_at?: string | null;
          note?: string | null;
          patient_id: string;
          ws_id: string;
        };
        Update: {
          checked?: boolean;
          checkup_at?: string;
          completed_at?: string | null;
          created_at?: string | null;
          creator_id?: string;
          diagnosis_id?: string | null;
          id?: string;
          next_checked?: boolean | null;
          next_checkup_at?: string | null;
          note?: string | null;
          patient_id?: string;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'healthcare_checkups_creator_id_fkey';
            columns: ['creator_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'healthcare_checkups_diagnosis_id_fkey';
            columns: ['diagnosis_id'];
            referencedRelation: 'healthcare_diagnoses';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'healthcare_checkups_patient_id_fkey';
            columns: ['patient_id'];
            referencedRelation: 'workspace_users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'healthcare_checkups_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      healthcare_diagnoses: {
        Row: {
          created_at: string | null;
          description: string | null;
          id: string;
          name: string | null;
          note: string | null;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          id?: string;
          name?: string | null;
          note?: string | null;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          id?: string;
          name?: string | null;
          note?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'healthcare_diagnoses_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      healthcare_vital_groups: {
        Row: {
          created_at: string | null;
          description: string | null;
          id: string;
          name: string;
          note: string | null;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          id?: string;
          name: string;
          note?: string | null;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          id?: string;
          name?: string;
          note?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'healthcare_vital_groups_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      healthcare_vitals: {
        Row: {
          created_at: string | null;
          id: string;
          name: string;
          unit: string | null;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name: string;
          unit?: string | null;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string;
          unit?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'healthcare_vitals_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      inventory_batch_products: {
        Row: {
          amount: number;
          batch_id: string;
          created_at: string | null;
          price: number;
          product_id: string;
          unit_id: string;
        };
        Insert: {
          amount?: number;
          batch_id: string;
          created_at?: string | null;
          price?: number;
          product_id: string;
          unit_id: string;
        };
        Update: {
          amount?: number;
          batch_id?: string;
          created_at?: string | null;
          price?: number;
          product_id?: string;
          unit_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'inventory_batch_products_batch_id_fkey';
            columns: ['batch_id'];
            referencedRelation: 'inventory_batches';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'inventory_batch_products_product_id_fkey';
            columns: ['product_id'];
            referencedRelation: 'workspace_products';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'inventory_batch_products_unit_id_fkey';
            columns: ['unit_id'];
            referencedRelation: 'inventory_units';
            referencedColumns: ['id'];
          },
        ];
      };
      inventory_batches: {
        Row: {
          created_at: string | null;
          id: string;
          price: number;
          supplier_id: string | null;
          total_diff: number;
          warehouse_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          price?: number;
          supplier_id?: string | null;
          total_diff?: number;
          warehouse_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          price?: number;
          supplier_id?: string | null;
          total_diff?: number;
          warehouse_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'inventory_batches_supplier_id_fkey';
            columns: ['supplier_id'];
            referencedRelation: 'inventory_suppliers';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'inventory_batches_warehouse_id_fkey';
            columns: ['warehouse_id'];
            referencedRelation: 'inventory_warehouses';
            referencedColumns: ['id'];
          },
        ];
      };
      inventory_products: {
        Row: {
          amount: number | null;
          created_at: string | null;
          min_amount: number;
          price: number;
          product_id: string;
          unit_id: string;
          warehouse_id: string;
        };
        Insert: {
          amount?: number | null;
          created_at?: string | null;
          min_amount?: number;
          price?: number;
          product_id: string;
          unit_id: string;
          warehouse_id: string;
        };
        Update: {
          amount?: number | null;
          created_at?: string | null;
          min_amount?: number;
          price?: number;
          product_id?: string;
          unit_id?: string;
          warehouse_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'inventory_products_product_id_fkey';
            columns: ['product_id'];
            referencedRelation: 'workspace_products';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'inventory_products_unit_id_fkey';
            columns: ['unit_id'];
            referencedRelation: 'inventory_units';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'inventory_products_warehouse_id_fkey';
            columns: ['warehouse_id'];
            referencedRelation: 'inventory_warehouses';
            referencedColumns: ['id'];
          },
        ];
      };
      inventory_suppliers: {
        Row: {
          created_at: string | null;
          id: string;
          name: string | null;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'inventory_suppliers_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      inventory_units: {
        Row: {
          created_at: string | null;
          id: string;
          name: string | null;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'inventory_units_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      inventory_warehouses: {
        Row: {
          created_at: string | null;
          id: string;
          name: string | null;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'inventory_warehouses_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      personal_notes: {
        Row: {
          content: string | null;
          created_at: string | null;
          owner_id: string;
          user_id: string;
        };
        Insert: {
          content?: string | null;
          created_at?: string | null;
          owner_id: string;
          user_id: string;
        };
        Update: {
          content?: string | null;
          created_at?: string | null;
          owner_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'personal_notes_owner_id_fkey';
            columns: ['owner_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'personal_notes_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      product_categories: {
        Row: {
          created_at: string | null;
          id: string;
          name: string | null;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'product_categories_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      schema_migrations: {
        Row: {
          inserted_at: string | null;
          version: number;
        };
        Insert: {
          inserted_at?: string | null;
          version: number;
        };
        Update: {
          inserted_at?: string | null;
          version?: number;
        };
        Relationships: [];
      };
      task_assignees: {
        Row: {
          created_at: string | null;
          task_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          task_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          task_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'task_assignees_task_id_fkey';
            columns: ['task_id'];
            referencedRelation: 'tasks';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'task_assignees_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      task_lists: {
        Row: {
          archived: boolean | null;
          board_id: string;
          created_at: string | null;
          creator_id: string | null;
          deleted: boolean | null;
          id: string;
          name: string | null;
        };
        Insert: {
          archived?: boolean | null;
          board_id: string;
          created_at?: string | null;
          creator_id?: string | null;
          deleted?: boolean | null;
          id?: string;
          name?: string | null;
        };
        Update: {
          archived?: boolean | null;
          board_id?: string;
          created_at?: string | null;
          creator_id?: string | null;
          deleted?: boolean | null;
          id?: string;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'task_lists_board_id_fkey';
            columns: ['board_id'];
            referencedRelation: 'workspace_boards';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'task_lists_creator_id_fkey';
            columns: ['creator_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      tasks: {
        Row: {
          archived: boolean | null;
          completed: boolean | null;
          created_at: string | null;
          creator_id: string | null;
          deleted: boolean | null;
          description: string | null;
          end_date: string | null;
          id: string;
          list_id: string;
          name: string;
          priority: number | null;
          start_date: string | null;
        };
        Insert: {
          archived?: boolean | null;
          completed?: boolean | null;
          created_at?: string | null;
          creator_id?: string | null;
          deleted?: boolean | null;
          description?: string | null;
          end_date?: string | null;
          id?: string;
          list_id: string;
          name: string;
          priority?: number | null;
          start_date?: string | null;
        };
        Update: {
          archived?: boolean | null;
          completed?: boolean | null;
          created_at?: string | null;
          creator_id?: string | null;
          deleted?: boolean | null;
          description?: string | null;
          end_date?: string | null;
          id?: string;
          list_id?: string;
          name?: string;
          priority?: number | null;
          start_date?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'tasks_creator_id_fkey';
            columns: ['creator_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'tasks_list_id_fkey';
            columns: ['list_id'];
            referencedRelation: 'task_lists';
            referencedColumns: ['id'];
          },
        ];
      };
      team_members: {
        Row: {
          team_id: string;
          user_id: string;
        };
        Insert: {
          team_id: string;
          user_id: string;
        };
        Update: {
          team_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'project_members_project_id_fkey';
            columns: ['team_id'];
            referencedRelation: 'workspace_teams';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'project_members_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      transaction_categories: {
        Row: {
          created_at: string | null;
          id: string;
          is_expense: boolean | null;
          name: string;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          is_expense?: boolean | null;
          name: string;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          is_expense?: boolean | null;
          name?: string;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'transaction_categories_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      user_feedbacks: {
        Row: {
          content: string;
          created_at: string;
          creator_id: string | null;
          group_id: string | null;
          id: string;
          require_attention: boolean;
          user_id: string;
        };
        Insert: {
          content: string;
          created_at?: string;
          creator_id?: string | null;
          group_id?: string | null;
          id?: string;
          require_attention?: boolean;
          user_id: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          creator_id?: string | null;
          group_id?: string | null;
          id?: string;
          require_attention?: boolean;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_feedbacks_creator_id_fkey';
            columns: ['creator_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_feedbacks_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_feedbacks_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups_with_amount';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_feedbacks_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'workspace_users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_group_attendance: {
        Row: {
          created_at: string;
          date: string;
          group_id: string;
          notes: string;
          status: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          date: string;
          group_id: string;
          notes?: string;
          status: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          date?: string;
          group_id?: string;
          notes?: string;
          status?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_group_attendance_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_group_attendance_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups_with_amount';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_group_attendance_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'workspace_users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_group_indicators: {
        Row: {
          created_at: string;
          group_id: string;
          indicator_id: string;
        };
        Insert: {
          created_at?: string;
          group_id: string;
          indicator_id: string;
        };
        Update: {
          created_at?: string;
          group_id?: string;
          indicator_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_group_indicators_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_group_indicators_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups_with_amount';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_group_indicators_indicator_id_fkey';
            columns: ['indicator_id'];
            referencedRelation: 'healthcare_vitals';
            referencedColumns: ['id'];
          },
        ];
      };
      user_group_linked_products: {
        Row: {
          created_at: string;
          group_id: string;
          product_id: string;
          unit_id: string;
        };
        Insert: {
          created_at?: string;
          group_id: string;
          product_id: string;
          unit_id: string;
        };
        Update: {
          created_at?: string;
          group_id?: string;
          product_id?: string;
          unit_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_group_linked_products_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_group_linked_products_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups_with_amount';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_group_linked_products_product_id_fkey';
            columns: ['product_id'];
            referencedRelation: 'workspace_products';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_group_linked_products_unit_id_fkey';
            columns: ['unit_id'];
            referencedRelation: 'inventory_units';
            referencedColumns: ['id'];
          },
        ];
      };
      user_group_posts: {
        Row: {
          content: string | null;
          created_at: string;
          group_id: string;
          id: string;
          notes: string | null;
          title: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          group_id: string;
          id?: string;
          notes?: string | null;
          title?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          group_id?: string;
          id?: string;
          notes?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_group_posts_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_group_posts_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups_with_amount';
            referencedColumns: ['id'];
          },
        ];
      };
      user_linked_promotions: {
        Row: {
          created_at: string;
          promo_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          promo_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          promo_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_linked_promotions_promo_id_fkey';
            columns: ['promo_id'];
            referencedRelation: 'workspace_promotions';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_linked_promotions_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'workspace_users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_private_details: {
        Row: {
          birthday: string | null;
          email: string | null;
          new_email: string | null;
          user_id: string;
        };
        Insert: {
          birthday?: string | null;
          email?: string | null;
          new_email?: string | null;
          user_id: string;
        };
        Update: {
          birthday?: string | null;
          email?: string | null;
          new_email?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_private_details_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          created_at: string | null;
          deleted: boolean | null;
          display_name: string | null;
          handle: string | null;
          id: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string | null;
          deleted?: boolean | null;
          display_name?: string | null;
          handle?: string | null;
          id?: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string | null;
          deleted?: boolean | null;
          display_name?: string | null;
          handle?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'users_handle_fkey';
            columns: ['handle'];
            referencedRelation: 'handles';
            referencedColumns: ['value'];
          },
        ];
      };
      vital_group_vitals: {
        Row: {
          created_at: string | null;
          group_id: string;
          vital_id: string;
        };
        Insert: {
          created_at?: string | null;
          group_id: string;
          vital_id: string;
        };
        Update: {
          created_at?: string | null;
          group_id?: string;
          vital_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'vital_group_vitals_group_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'healthcare_vital_groups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'vital_group_vitals_vital_id_fkey';
            columns: ['vital_id'];
            referencedRelation: 'healthcare_vitals';
            referencedColumns: ['id'];
          },
        ];
      };
      wallet_transactions: {
        Row: {
          amount: number | null;
          category_id: string | null;
          created_at: string | null;
          description: string | null;
          id: string;
          report_opt_in: boolean;
          taken_at: string;
          wallet_id: string;
        };
        Insert: {
          amount?: number | null;
          category_id?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: string;
          report_opt_in?: boolean;
          taken_at?: string;
          wallet_id: string;
        };
        Update: {
          amount?: number | null;
          category_id?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: string;
          report_opt_in?: boolean;
          taken_at?: string;
          wallet_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'wallet_transactions_category_id_fkey';
            columns: ['category_id'];
            referencedRelation: 'transaction_categories';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'wallet_transactions_wallet_id_fkey';
            columns: ['wallet_id'];
            referencedRelation: 'workspace_wallets';
            referencedColumns: ['id'];
          },
        ];
      };
      wallet_types: {
        Row: {
          id: string;
        };
        Insert: {
          id: string;
        };
        Update: {
          id?: string;
        };
        Relationships: [];
      };
      workspace_boards: {
        Row: {
          archived: boolean | null;
          created_at: string | null;
          creator_id: string | null;
          deleted: boolean | null;
          id: string;
          name: string | null;
          ws_id: string;
        };
        Insert: {
          archived?: boolean | null;
          created_at?: string | null;
          creator_id?: string | null;
          deleted?: boolean | null;
          id?: string;
          name?: string | null;
          ws_id: string;
        };
        Update: {
          archived?: boolean | null;
          created_at?: string | null;
          creator_id?: string | null;
          deleted?: boolean | null;
          id?: string;
          name?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'project_boards_creator_id_fkey';
            columns: ['creator_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_boards_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_calendar_events: {
        Row: {
          color: string | null;
          created_at: string | null;
          description: string;
          end_at: string;
          id: string;
          start_at: string;
          title: string;
          ws_id: string;
        };
        Insert: {
          color?: string | null;
          created_at?: string | null;
          description?: string;
          end_at: string;
          id?: string;
          start_at: string;
          title?: string;
          ws_id: string;
        };
        Update: {
          color?: string | null;
          created_at?: string | null;
          description?: string;
          end_at?: string;
          id?: string;
          start_at?: string;
          title?: string;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_calendar_events_color_fkey';
            columns: ['color'];
            referencedRelation: 'calendar_event_colors';
            referencedColumns: ['value'];
          },
          {
            foreignKeyName: 'workspace_calendar_events_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_default_roles: {
        Row: {
          id: string;
        };
        Insert: {
          id: string;
        };
        Update: {
          id?: string;
        };
        Relationships: [];
      };
      workspace_documents: {
        Row: {
          content: string | null;
          created_at: string | null;
          id: string;
          name: string | null;
          ws_id: string;
        };
        Insert: {
          content?: string | null;
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id: string;
        };
        Update: {
          content?: string | null;
          created_at?: string | null;
          id?: string;
          name?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_documents_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_invites: {
        Row: {
          created_at: string | null;
          role: string;
          role_title: string | null;
          user_id: string;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          role?: string;
          role_title?: string | null;
          user_id: string;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          role?: string;
          role_title?: string | null;
          user_id?: string;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_invites_role_fkey';
            columns: ['role'];
            referencedRelation: 'workspace_default_roles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_invites_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_invites_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_members: {
        Row: {
          created_at: string | null;
          role: string;
          role_title: string;
          sort_key: number | null;
          user_id: string;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          role?: string;
          role_title?: string;
          sort_key?: number | null;
          user_id?: string;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          role?: string;
          role_title?: string;
          sort_key?: number | null;
          user_id?: string;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_members_role_fkey';
            columns: ['role'];
            referencedRelation: 'workspace_default_roles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_members_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_members_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_presets: {
        Row: {
          enabled: boolean;
          name: string;
        };
        Insert: {
          enabled?: boolean;
          name: string;
        };
        Update: {
          enabled?: boolean;
          name?: string;
        };
        Relationships: [];
      };
      workspace_products: {
        Row: {
          category_id: string | null;
          created_at: string | null;
          description: string | null;
          id: string;
          manufacturer: string | null;
          name: string | null;
          usage: string | null;
          ws_id: string;
        };
        Insert: {
          category_id?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: string;
          manufacturer?: string | null;
          name?: string | null;
          usage?: string | null;
          ws_id: string;
        };
        Update: {
          category_id?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: string;
          manufacturer?: string | null;
          name?: string | null;
          usage?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_products_category_id_fkey';
            columns: ['category_id'];
            referencedRelation: 'product_categories';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_products_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_promotions: {
        Row: {
          code: string | null;
          created_at: string;
          description: string | null;
          id: string;
          name: string | null;
          use_ratio: boolean;
          value: number;
          ws_id: string;
        };
        Insert: {
          code?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          name?: string | null;
          use_ratio?: boolean;
          value: number;
          ws_id: string;
        };
        Update: {
          code?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
          name?: string | null;
          use_ratio?: boolean;
          value?: number;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_promotions_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_secrets: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          value: string | null;
          ws_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name?: string;
          value?: string | null;
          ws_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          value?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_secrets_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_teams: {
        Row: {
          created_at: string | null;
          deleted: boolean | null;
          id: string;
          name: string | null;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          deleted?: boolean | null;
          id?: string;
          name?: string | null;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          deleted?: boolean | null;
          id?: string;
          name?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_teams_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_user_groups: {
        Row: {
          created_at: string | null;
          id: string;
          name: string;
          ws_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name: string;
          ws_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_user_roles_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_user_groups_users: {
        Row: {
          created_at: string | null;
          group_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          group_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          group_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_user_roles_users_role_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_user_roles_users_role_id_fkey';
            columns: ['group_id'];
            referencedRelation: 'workspace_user_groups_with_amount';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_user_roles_users_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'workspace_users';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_user_linked_users: {
        Row: {
          created_at: string;
          platform_user_id: string;
          virtual_user_id: string;
          ws_id: string;
        };
        Insert: {
          created_at?: string;
          platform_user_id: string;
          virtual_user_id: string;
          ws_id: string;
        };
        Update: {
          created_at?: string;
          platform_user_id?: string;
          virtual_user_id?: string;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_user_linked_users_platform_user_id_fkey';
            columns: ['platform_user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_user_linked_users_virtual_user_id_fkey';
            columns: ['virtual_user_id'];
            referencedRelation: 'workspace_users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_user_linked_users_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_users: {
        Row: {
          address: string | null;
          archived: boolean;
          archived_until: string | null;
          avatar_url: string | null;
          balance: number | null;
          birthday: string | null;
          created_at: string | null;
          created_by: string | null;
          display_name: string | null;
          email: string | null;
          ethnicity: string | null;
          full_name: string | null;
          gender: string | null;
          guardian: string | null;
          id: string;
          national_id: string | null;
          note: string | null;
          phone: string | null;
          ws_id: string;
        };
        Insert: {
          address?: string | null;
          archived?: boolean;
          archived_until?: string | null;
          avatar_url?: string | null;
          balance?: number | null;
          birthday?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          display_name?: string | null;
          email?: string | null;
          ethnicity?: string | null;
          full_name?: string | null;
          gender?: string | null;
          guardian?: string | null;
          id?: string;
          national_id?: string | null;
          note?: string | null;
          phone?: string | null;
          ws_id: string;
        };
        Update: {
          address?: string | null;
          archived?: boolean;
          archived_until?: string | null;
          avatar_url?: string | null;
          balance?: number | null;
          birthday?: string | null;
          created_at?: string | null;
          created_by?: string | null;
          display_name?: string | null;
          email?: string | null;
          ethnicity?: string | null;
          full_name?: string | null;
          gender?: string | null;
          guardian?: string | null;
          id?: string;
          national_id?: string | null;
          note?: string | null;
          phone?: string | null;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_users_created_by_fkey';
            columns: ['created_by'];
            referencedRelation: 'workspace_users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_users_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_wallet_transfers: {
        Row: {
          created_at: string | null;
          from_transaction_id: string;
          to_transaction_id: string;
        };
        Insert: {
          created_at?: string | null;
          from_transaction_id: string;
          to_transaction_id: string;
        };
        Update: {
          created_at?: string | null;
          from_transaction_id?: string;
          to_transaction_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_wallet_transfers_from_transaction_id_fkey';
            columns: ['from_transaction_id'];
            referencedRelation: 'wallet_transactions';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_wallet_transfers_to_transaction_id_fkey';
            columns: ['to_transaction_id'];
            referencedRelation: 'wallet_transactions';
            referencedColumns: ['id'];
          },
        ];
      };
      workspace_wallets: {
        Row: {
          balance: number | null;
          created_at: string | null;
          currency: string;
          description: string | null;
          id: string;
          name: string | null;
          report_opt_in: boolean;
          type: string;
          ws_id: string;
        };
        Insert: {
          balance?: number | null;
          created_at?: string | null;
          currency?: string;
          description?: string | null;
          id?: string;
          name?: string | null;
          report_opt_in?: boolean;
          type?: string;
          ws_id: string;
        };
        Update: {
          balance?: number | null;
          created_at?: string | null;
          currency?: string;
          description?: string | null;
          id?: string;
          name?: string | null;
          report_opt_in?: boolean;
          type?: string;
          ws_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_wallets_currency_fkey';
            columns: ['currency'];
            referencedRelation: 'currencies';
            referencedColumns: ['code'];
          },
          {
            foreignKeyName: 'workspace_wallets_type_fkey';
            columns: ['type'];
            referencedRelation: 'wallet_types';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'workspace_wallets_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
      workspaces: {
        Row: {
          avatar_url: string | null;
          created_at: string | null;
          deleted: boolean | null;
          handle: string | null;
          id: string;
          logo_url: string | null;
          name: string | null;
          preset: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string | null;
          deleted?: boolean | null;
          handle?: string | null;
          id?: string;
          logo_url?: string | null;
          name?: string | null;
          preset?: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string | null;
          deleted?: boolean | null;
          handle?: string | null;
          id?: string;
          logo_url?: string | null;
          name?: string | null;
          preset?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'workspaces_preset_fkey';
            columns: ['preset'];
            referencedRelation: 'workspace_presets';
            referencedColumns: ['name'];
          },
        ];
      };
    };
    Views: {
      audit_logs: {
        Row: {
          auth_role: string | null;
          auth_uid: string | null;
          id: number | null;
          old_record: Json | null;
          old_record_id: string | null;
          op: 'INSERT' | 'UPDATE' | 'DELETE' | 'TRUNCATE' | null;
          record: Json | null;
          record_id: string | null;
          table_name: unknown | null;
          ts: string | null;
          ws_id: string | null;
        };
        Insert: {
          auth_role?: string | null;
          auth_uid?: string | null;
          id?: number | null;
          old_record?: Json | null;
          old_record_id?: string | null;
          op?: 'INSERT' | 'UPDATE' | 'DELETE' | 'TRUNCATE' | null;
          record?: Json | null;
          record_id?: string | null;
          table_name?: unknown | null;
          ts?: string | null;
          ws_id?: never;
        };
        Update: {
          auth_role?: string | null;
          auth_uid?: string | null;
          id?: number | null;
          old_record?: Json | null;
          old_record_id?: string | null;
          op?: 'INSERT' | 'UPDATE' | 'DELETE' | 'TRUNCATE' | null;
          record?: Json | null;
          record_id?: string | null;
          table_name?: unknown | null;
          ts?: string | null;
          ws_id?: never;
        };
        Relationships: [
          {
            foreignKeyName: 'record_version_auth_uid_fkey';
            columns: ['auth_uid'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      calendar_event_participants: {
        Row: {
          created_at: string | null;
          display_name: string | null;
          event_id: string | null;
          going: boolean | null;
          handle: string | null;
          participant_id: string | null;
          type: string | null;
        };
        Relationships: [];
      };
      workspace_members_and_invites: {
        Row: {
          avatar_url: string | null;
          created_at: string | null;
          display_name: string | null;
          email: string | null;
          handle: string | null;
          id: string | null;
          pending: boolean | null;
          role: string | null;
          role_title: string | null;
          ws_id: string | null;
        };
        Relationships: [];
      };
      workspace_user_groups_with_amount: {
        Row: {
          amount: number | null;
          created_at: string | null;
          id: string | null;
          name: string | null;
          ws_id: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'workspace_user_roles_ws_id_fkey';
            columns: ['ws_id'];
            referencedRelation: 'workspaces';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Functions: {
      get_finance_invoices_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_healthcare_checkups_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_healthcare_diagnoses_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_healthcare_vital_groups_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_healthcare_vitals_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_inventory_batches_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_inventory_product_categories_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_inventory_products: {
        Args: {
          _category_ids?: string[];
          _ws_id?: string;
          _warehouse_ids?: string[];
          _has_unit?: boolean;
        };
        Returns: {
          id: string;
          name: string;
          manufacturer: string;
          unit: string;
          unit_id: string;
          category: string;
          price: number;
          amount: number;
          ws_id: string;
          created_at: string;
        }[];
      };
      get_inventory_products_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_inventory_suppliers_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_inventory_units_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_inventory_warehouses_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_pending_event_participants: {
        Args: {
          _event_id: string;
        };
        Returns: number;
      };
      get_transaction_categories_with_amount: {
        Args: Record<PropertyKey, never>;
        Returns: {
          id: string;
          name: string;
          is_expense: boolean;
          ws_id: string;
          created_at: string;
          amount: number;
        }[];
      };
      get_user_role: {
        Args: {
          user_id: string;
          ws_id: string;
        };
        Returns: string;
      };
      get_user_tasks: {
        Args: {
          _board_id: string;
        };
        Returns: {
          id: string;
          name: string;
          description: string;
          priority: number;
          completed: boolean;
          start_date: string;
          end_date: string;
          list_id: string;
          board_id: string;
        }[];
      };
      get_workspace_products_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_workspace_transaction_categories_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_workspace_transactions_count: {
        Args: {
          ws_id: string;
          start_date?: string;
          end_date?: string;
        };
        Returns: number;
      };
      get_workspace_user_groups_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_workspace_users_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_workspace_wallets_count: {
        Args: {
          ws_id: string;
        };
        Returns: number;
      };
      get_workspace_wallets_expense: {
        Args: {
          ws_id: string;
          start_date?: string;
          end_date?: string;
        };
        Returns: number;
      };
      get_workspace_wallets_income: {
        Args: {
          ws_id: string;
          start_date?: string;
          end_date?: string;
        };
        Returns: number;
      };
      gtrgm_compress: {
        Args: {
          '': unknown;
        };
        Returns: unknown;
      };
      gtrgm_decompress: {
        Args: {
          '': unknown;
        };
        Returns: unknown;
      };
      gtrgm_in: {
        Args: {
          '': unknown;
        };
        Returns: unknown;
      };
      gtrgm_options: {
        Args: {
          '': unknown;
        };
        Returns: undefined;
      };
      gtrgm_out: {
        Args: {
          '': unknown;
        };
        Returns: unknown;
      };
      has_other_owner: {
        Args: {
          _ws_id: string;
          _user_id: string;
        };
        Returns: boolean;
      };
      is_list_accessible: {
        Args: {
          _list_id: string;
        };
        Returns: boolean;
      };
      is_member_invited: {
        Args: {
          _user_id: string;
          _org_id: string;
        };
        Returns: boolean;
      };
      is_org_member: {
        Args: {
          _user_id: string;
          _org_id: string;
        };
        Returns: boolean;
      };
      is_project_member: {
        Args: {
          _project_id: string;
        };
        Returns: boolean;
      };
      is_task_accessible: {
        Args: {
          _task_id: string;
        };
        Returns: boolean;
      };
      is_task_board_member: {
        Args: {
          _user_id: string;
          _board_id: string;
        };
        Returns: boolean;
      };
      is_user_task_in_board: {
        Args: {
          _user_id: string;
          _task_id: string;
        };
        Returns: boolean;
      };
      search_users_by_name: {
        Args: {
          search_query: string;
          result_limit?: number;
          min_similarity?: number;
        };
        Returns: {
          id: string;
          handle: string;
          display_name: string;
          avatar_url: string;
          relevance: number;
        }[];
      };
      set_limit: {
        Args: {
          '': number;
        };
        Returns: number;
      };
      show_limit: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
      show_trgm: {
        Args: {
          '': string;
        };
        Returns: unknown;
      };
      transactions_have_same_abs_amount: {
        Args: {
          transaction_id_1: string;
          transaction_id_2: string;
        };
        Returns: boolean;
      };
      transactions_have_same_amount: {
        Args: {
          transaction_id_1: string;
          transaction_id_2: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
