import { NextResponse } from "next/server";
import { getSheetDocument } from "@/utils/googleSheets";

interface ServicesRow {
  _rawData: string[];
}

export async function GET() {
  try {
    const doc = await getSheetDocument();
    const testimonialsSheet = doc.sheetsByTitle["services"];
    const servicesRows = await testimonialsSheet.getRows();

    const testimonials = (servicesRows as ServicesRow[]).map((row, index) => ({
      id: `service-${index}`,
      title: row._rawData[0] || "",
      description: row._rawData[1] || "",
      bgClass: row._rawData[2] || "",
      pattern: row._rawData[3] || "",
    }));

    return NextResponse.json(testimonials);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
