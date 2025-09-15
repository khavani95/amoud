import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public/data/construction-projects.xlsx");
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    let data: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // اصلاح: تبدیل رشته به آرایه
    data = data.map((item) => ({
      ...item,
      images: typeof item.images === "string" ? item.images.split(",") : [],
    }));

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}
