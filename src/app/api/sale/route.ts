import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

interface ProjectRow {
  id: number;
  title: string;
  shortDesc: string;
  link: string;
  images?: string;
  state: number ;
}

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  link: string;
  images: string[];
  state:number ;
}

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public/data/sale.xlsx"
    );
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];

    // خروجی Excel به تایپ مشخص (ProjectRow)
    const rawData = XLSX.utils.sheet_to_json<ProjectRow>(
      workbook.Sheets[sheetName]
    );

    // اصلاح: تبدیل رشته به آرایه
    const data: Project[] = rawData.map((item) => ({
      ...item,
      images:
        typeof item.images === "string"
          ? item.images.split(",").map((s) => s.trim())
          : [],
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
