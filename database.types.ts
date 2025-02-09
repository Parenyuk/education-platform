export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      benefits: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          title?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: number
          message: string | null
          phone: string | null
          subject: string | null
          used_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id?: number
          message?: string | null
          phone?: string | null
          subject?: string | null
          used_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: number
          message?: string | null
          phone?: string | null
          subject?: string | null
          used_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contacts_used_id_fkey1"
            columns: ["used_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          author: string | null
          course_content: Json | null
          created_at: string
          description: string | null
          duration: string | null
          id: number
          images: string[] | null
          level: string | null
          slug: string | null
          tags: Json | null
          title: string | null
        }
        Insert: {
          author?: string | null
          course_content?: Json | null
          created_at?: string
          description?: string | null
          duration?: string | null
          id?: number
          images?: string[] | null
          level?: string | null
          slug?: string | null
          tags?: Json | null
          title?: string | null
        }
        Update: {
          author?: string | null
          course_content?: Json | null
          created_at?: string
          description?: string | null
          duration?: string | null
          id?: number
          images?: string[] | null
          level?: string | null
          slug?: string | null
          tags?: Json | null
          title?: string | null
        }
        Relationships: []
      }
      faq: {
        Row: {
          answer: string | null
          created_at: string
          id: number
          link: string | null
          linkText: string | null
          question: string | null
        }
        Insert: {
          answer?: string | null
          created_at?: string
          id?: number
          link?: string | null
          linkText?: string | null
          question?: string | null
        }
        Update: {
          answer?: string | null
          created_at?: string
          id?: number
          link?: string | null
          linkText?: string | null
          question?: string | null
        }
        Relationships: []
      }
      global_metadata: {
        Row: {
          description: string
          id: number
          table_name_key: string
          title: string
        }
        Insert: {
          description: string
          id?: number
          table_name_key: string
          title: string
        }
        Update: {
          description?: string
          id?: number
          table_name_key?: string
          title?: string
        }
        Relationships: []
      }
      pricing: {
        Row: {
          available_features: Json | null
          created_at: string
          id: number
          plan_type: string | null
          price_per_month: number | null
          price_per_year: number | null
        }
        Insert: {
          available_features?: Json | null
          created_at?: string
          id?: number
          plan_type?: string | null
          price_per_month?: number | null
          price_per_year?: number | null
        }
        Update: {
          available_features?: Json | null
          created_at?: string
          id?: number
          plan_type?: string | null
          price_per_month?: number | null
          price_per_year?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          email: string | null
          id: string
          name: string | null
        }
        Insert: {
          email?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      test_comments: {
        Row: {
          content: string
          id: number
          post_id: number | null
          user_id: number | null
        }
        Insert: {
          content: string
          id?: number
          post_id?: number | null
          user_id?: number | null
        }
        Update: {
          content?: string
          id?: number
          post_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "test_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "test_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "test_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "test_users"
            referencedColumns: ["id"]
          },
        ]
      }
      test_posts: {
        Row: {
          content: string | null
          id: number
          title: string | null
          user_id: number | null
        }
        Insert: {
          content?: string | null
          id?: number
          title?: string | null
          user_id?: number | null
        }
        Update: {
          content?: string | null
          id?: number
          title?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "test_posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "test_users"
            referencedColumns: ["id"]
          },
        ]
      }
      test_profiles: {
        Row: {
          bio: string | null
          id: number
          user_id: number | null
        }
        Insert: {
          bio?: string | null
          id?: number
          user_id?: number | null
        }
        Update: {
          bio?: string | null
          id?: number
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "test_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "test_users"
            referencedColumns: ["id"]
          },
        ]
      }
      test_user_post_roles: {
        Row: {
          id: number
          post_id: number | null
          role: string
          user_id: number | null
        }
        Insert: {
          id?: number
          post_id?: number | null
          role: string
          user_id?: number | null
        }
        Update: {
          id?: number
          post_id?: number | null
          role?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "test_user_post_roles_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "test_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "test_user_post_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "test_users"
            referencedColumns: ["id"]
          },
        ]
      }
      test_users: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author: string | null
          author_image: string | null
          content: string | null
          created_at: string
          id: number
          short_content: string | null
        }
        Insert: {
          author?: string | null
          author_image?: string | null
          content?: string | null
          created_at?: string
          id?: number
          short_content?: string | null
        }
        Update: {
          author?: string | null
          author_image?: string | null
          content?: string | null
          created_at?: string
          id?: number
          short_content?: string | null
        }
        Relationships: []
      }
      tests: {
        Row: {
          id: number
          test: string | null
        }
        Insert: {
          id?: number
          test?: string | null
        }
        Update: {
          id?: number
          test?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_table_with_metadata: {
        Args: {
          table_name: string
          filter_level: string
        }
        Returns: Json
      }
      get_table_with_metadata_old: {
        Args: {
          table_name: string
        }
        Returns: Json
      }
    }
    Enums: {
      ROLES: "admin" | "editor" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
