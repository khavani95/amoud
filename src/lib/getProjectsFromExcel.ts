import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

export function getProjectsFromExcel(fileName: string) {
  const filePath = path.join(process.cwd(), "data", fileName);
  const file = fs.readFileSync(filePath);

  const workbook = XLSX.read(file, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(sheet);

  return (data as any[]).map((p) => ({
    id: Number(p.id),
    title: p.title,
    shortDesc: p.shortDesc,
    fullDesc: p.fullDesc,
    images: (p.images as string).split(";"),
  }));
}
