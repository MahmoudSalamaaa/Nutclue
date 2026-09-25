import { NextResponse } from "next/server";
import { database, hasDatabase } from "../../../lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!hasDatabase()) {
    return NextResponse.json({
      databaseConfigured: false,
      databaseReachable: false,
      healthDataStorage: "device",
      cloudHealthSyncEnabled: false,
    });
  }

  try {
    const sql = database();
    const result = await sql`select current_database() as database, now() as checked_at`;
    return NextResponse.json({
      databaseConfigured: true,
      databaseReachable: true,
      database: result[0]?.database ?? "postgres",
      checkedAt: result[0]?.checked_at ?? null,
      healthDataStorage: "device",
      cloudHealthSyncEnabled: false,
    });
  } catch {
    return NextResponse.json({
      databaseConfigured: true,
      databaseReachable: false,
      healthDataStorage: "device",
      cloudHealthSyncEnabled: false,
    }, { status: 503 });
  }
}

// production database connectivity probe
