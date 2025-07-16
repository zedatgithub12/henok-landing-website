import { NextResponse } from "next/server";
import { getSheetDocument } from "@/utils/googleSheets";

interface TestimonialRow {
  _rawData: string[];
}

export async function GET() {
  try {
    const doc = await getSheetDocument();
    const testimonialsSheet = doc.sheetsByTitle["testimonials"];
    const testimonialRows = await testimonialsSheet.getRows();

    const testimonials = (testimonialRows as TestimonialRow[]).map(
      (row, index) => ({
        id: `testimonial-${index}`,
        content: row._rawData[0] || "",
        name: row._rawData[1] || "",
        role: row._rawData[2] || "",
        company: row._rawData[3] || "",
        avatar: row._rawData[4] || "",
      })
    );

    return NextResponse.json(testimonials);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
